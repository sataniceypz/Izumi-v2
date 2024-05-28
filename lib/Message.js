const {
  decodeJid,
  createInteractiveMessage,
  parsedJid,
} = require("./functions");
const Base = require("./Base");
const { writeExifWebp } = require("./sticker");
const config = require("../config");
const ReplyMessage = require("./ReplyMessage");
const fileType = require("file-type");
const {
  generateWAMessageFromContent,
  generateWAMessage,
} = require("@whiskeysockets/baileys");

class Message extends Base {
  constructor(client, data) {
    super(client);
    if (data) this._patch(data);
  }

  _patch(data) {
    this.user = decodeJid(this.client.user.id);
    this.key = data.key;
    this.isGroup = data.isGroup;
    this.prefix = data.prefix;
    this.id = data.key.id;
    this.jid = data.key.remoteJid;
    this.message = { key: data.key, message: data.message };
    this.pushName = data.pushName;
    this.participant = parsedJid(data.sender)[0];
    try {
      this.sudo = config.SUDO.split(",").includes(
        this.participant.split("@")[0]
      );
    } catch {
      this.sudo = false;
    }
    this.text = data.body;
    this.fromMe = data.key.fromMe;
    this.isBaileys = this.id.startsWith("BAE5");
    this.timestamp = data.messageTimestamp.low || data.messageTimestamp;

    const contextInfo = data.message.extendedTextMessage?.contextInfo;
    this.mention = contextInfo?.mentionedJid || false;

    if (data.quoted) {
      if (data.message.buttonsResponseMessage) return;
      this.reply_message = new ReplyMessage(this.client, contextInfo, data);
      const quotedMessage = data.quoted.message.extendedTextMessage;
      this.reply_message.type = data.quoted.type || "extendedTextMessage";
      this.reply_message.mtype = data.quoted.mtype;
      this.reply_message.mimetype =
        quotedMessage?.text?.mimetype || "text/plain";
      this.reply_message.key = data.quoted.key;
      this.reply_message.message = data.quoted.message;
      this.reply_message.mention =
        quotedMessage?.contextInfo?.mentionedJid || false;
    } else {
      this.reply_message = false;
    }

    return super._patch(data);
  }

  async sendReply(text, opt = {}) {
    return this.client.sendMessage(
      this.jid,
      { text },
      { ...opt, quoted: this }
    );
  }

  async log() {
    console.log(this.data);
  }

  async sendFile(content, options = {}) {
    const { data } = await this.client.getFile(content);
    const type = (await fileType.fromBuffer(data)) || {};
    return this.client.sendMessage(
      this.jid,
      { [type.mime.split("/")[0]]: data },
      options
    );
  }

  async edit(text, opt = {}) {
    await this.client.sendMessage(this.jid, { text, edit: this.key, ...opt });
  }

  async reply(text, opt = {}) {
    return this.client.sendMessage(
      this.jid,
      { text, ...opt },
      { ...opt, quoted: this }
    );
  }

  async send(jid, text, opt = {}) {
    const recipient = jid.endsWith("@s.whatsapp.net") ? jid : this.jid;
    return this.client.sendMessage(recipient, { text, ...opt });
  }

 async sendMessage(
    content,
    opt = { packname: "mask ser", author: "Mask ser" },
    type = "text"
  ) {
    switch (type.toLowerCase()) {
      case "text":
        {
          return this.client.sendMessage(
            this.jid,
            {
              text: content,
              ...opt,
            },
            { ...opt }
          );
        }
        break;
      case "image":
        {
          if (Buffer.isBuffer(content)) {
            return this.client.sendMessage(
              this.jid,
              { image: content, ...opt },
              { ...opt }
            );
          } else if (isUrl(content)) {
            return this.client.sendMessage(
              this.jid,
              { image: { url: content }, ...opt },
              { ...opt }
            );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return this.client.sendMessage(
            jid,
            { video: content, ...opt },
            { ...opt }
          );
        } else if (isUrl(content)) {
          return this.client.sendMessage(
            this.jid,
            { video: { url: content }, ...opt },
            { ...opt }
          );
        }
      }
      case "audio":
        {
          if (Buffer.isBuffer(content)) {
            return this.client.sendMessage(
              this.jid,
              { audio: content, ...opt },
              { ...opt }
            );
          } else if (isUrl(content)) {
            return this.client.sendMessage(
              this.jid,
              { audio: { url: content }, ...opt },
              { ...opt }
            );
          }
        }
        break;
      case "template":
        let optional = await generateWAMessage(jid, content, opt);
        let message = {
          viewOnceMessage: {
            message: {
              ...optional.message,
            },
          },
        };
        await this.client.relayMessage(this.jid, message, {
          messageId: optional.key.id,
        });

        break;
      case "interactive":
        const genMessage = createInteractiveMessage(content);
        await this.client.relayMessage(this.jid, genMessage.message, {
          messageId: genMessage.key.id,
        });

        break;
      case "sticker":
        {
          let { data, mime } = await getFile(content);
          if (mime == "image/webp") {
            let buff = await writeExifWebp(data, opt);
            await this.client.sendMessage(
              this.jid,
              { sticker: { url: buff }, ...opt },
              opt
            );
          } else {
            mime = await mime.split("/")[0];

            if (mime === "video") {
              await this.client.sendVideoAsSticker(this.jid, content, opt);
            } else if (mime === "image") {
              await this.client.sendImageAsSticker(this.jid, content, opt);
            }
          }
        }
        break;
    }
  }
async sendFromUrl(url, options = {}) {
    let buff = await getBuffer(url);
    let mime = await fileType.fromBuffer(buff);
    let type = mime.mime.split("/")[0];
    if (type === "audio") {
      options.mimetype = "audio/mpeg";
    }
    if (type === "application") type = "document";
    return this.client.sendMessage(
      this.jid,
      { [type]: buff, ...options },
      { ...options }
    );
  }
 async forward(jid, content, options = {}) {
    if (options.readViewOnce) {
      content = content?.ephemeralMessage?.message || content;
      const viewOnceKey = Object.keys(content)[0];
      delete content?.ignore;
      delete content?.viewOnceMessage?.message?.[viewOnceKey]?.viewOnce;
      content = { ...content?.viewOnceMessage?.message };
    }

    if (options.mentions) {
      content[getContentType(content)].contextInfo.mentionedJid =
        options.mentions;
    }

    const forwardContent = generateForwardMessageContent(content, false);
    const contentType = getContentType(forwardContent);

    const forwardOptions = {
      ptt: options.ptt,
      waveform: options.audiowave,
      seconds: options.seconds,
      fileLength: options.fileLength,
      caption: options.caption,
      contextInfo: options.contextInfo,
    };

    if (options.mentions) {
      forwardOptions.contextInfo.mentionedJid = options.mentions;
    }

    if (contentType !== "conversation") {
      forwardOptions.contextInfo =
        content?.message[contentType]?.contextInfo || {};
    }

    forwardContent[contentType].contextInfo = {
      ...forwardOptions.contextInfo,
      ...forwardContent[contentType]?.contextInfo,
    };

    const waMessage = generateWAMessageFromContent(jid, forwardContent, {
      ...forwardContent[contentType],
      ...forwardOptions,
    });
    return await this.client.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
  }

  async PresenceUpdate(status) {
    await sock.sendPresenceUpdate(status, this.jid);
  }

  async delete(key) {
    await this.client.sendMessage(this.jid, { delete: key });
  }

  async updateName(name) {
    await this.client.updateProfileName(name);
  }

  async getPP(jid) {
    return await this.client.profilePictureUrl(jid, "image");
  }

  async setPP(jid, pp) {
    const profilePicture = Buffer.isBuffer(pp) ? pp : { url: pp };
    await this.client.updateProfilePicture(jid, profilePicture);
  }

  async block(jid) {
    await this.client.updateBlockStatus(jid, "block");
  }

  async unblock(jid) {
    await this.client.updateBlockStatus(jid, "unblock");
  }

  async add(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "add");
  }

  async kick(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "remove");
  }

  async promote(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "promote");
  }

  async demote(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "demote");
  }
}

module.exports = Message;
