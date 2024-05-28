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
const { getBuffer } = require("./functions");
const { serialize } = require("./serialize");
const {
  generateWAMessageFromContent,
  generateWAMessage,
} = require("@whiskeysockets/baileys");


class Message extends Base {
  constructor(client, data) {
    super(client);
    if (data) {
      this.patch(data);
    }
  }

  patch(data) {
    this.id = data.key?.id;
    this.jid = this.chat = data.key?.remoteJid;
    this.fromMe = data.key?.fromMe;
     this.user = decodeJid(this.client.user.id);
    this.sender = jidNormalizedUser(
      (this.fromMe && this.client.user.id) ||
        this.participant ||
        data.key.participant ||
        this.chat ||
        ""
    );
    this.pushName = data.pushName || this.client.user.name || "";
    this.message = this.text =
      data.message?.extendedTextMessage?.text ||
      data.message?.imageMessage?.caption ||
      data.message?.videoMessage?.caption ||
      data.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
      data.message?.buttonsResponseMessage?.selectedButtonId ||
      data.message?.templateButtonReplyMessage?.selectedId ||
      data.message?.editedMessage?.message?.protocolMessage?.editedMessage
        ?.conversation ||
      data.message?.conversation;
    this.data = data;
    this.type = getContentType(data.message);
    this.msg = data.message[this.type];
    this.reply_message = this.quoted = this.msg?.contextInfo?.quotedMessage
      ? new ReplyMessage(this.client, {
          chat: this.chat,
          msg: this.msg,
          ...this.msg.contextInfo,
        })
      : false;
    this.mention = this.msg?.contextInfo?.mentionedJid || false;
    this.isGroup = this.chat.endsWith("@g.us");
    this.isPm = this.chat.endsWith("@s.whatsapp.net");
    this.isBot = this.id.startsWith("BAE5") && this.id.length === 16;
    const sudo = config.SUDO.split(",") || config.SUDO + ",0";
    this.isSudo = [jidNormalizedUser(this.client.user.id), ...sudo]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(this.sender);
    const contextInfo = data.message.extendedTextMessage?.contextInfo;
    this.mention = contextInfo?.mentionedJid || false;   
  
  return super.patch(data);
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
