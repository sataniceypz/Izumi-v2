/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

"use strict";
const fileType = require("file-type");
const config = require("../config");
const {
  isUrl,
  getBuffer,
  writeExifImg,
  writeExifVid,
  writeExifWebp,
  tiny,
  parseJid,
  getRandom,
  isNumber,
  decodeJid,
} = require(".");
const fs = require("fs");
const util = require("util")
const { connected } = require("process");
const {
  generateForwardMessageContent,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  generateWAMessage,
  getContentType,
  generateWAMessageContent,
} = require("@whiskeysockets/baileys");
class Base {
  constructor(client, msg) {
    Object.defineProperty(this, "client", { value: client });
    Object.defineProperty(this, "m", { value: msg });
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }

  _patch(data) {
    return data;
  }
}

class Video extends Base {
  constructor(client, data, msg) {
    super(client);
    if (data) this._patch(data, msg);
  }

  _patch(data, msg) {
    this.isGroup = data.isGroup;
    this.id = data.key.id === undefined ? undefined : data.key.id;
    this.jid = data.key.remoteJid;
    this.pushName = data.pushName;
    this.participant = data.sender;
    this.sudo = config.SUDO.split(",").includes(this.participant.split("@")[0]);
    this.caption = data.body;
    this.fromMe = data.key.fromMe;
    this.timestamp =
      typeof data.messageTimestamp === "object"
        ? data.messageTimestamp.low
        : data.messageTimestamp;
    this.key = data.key;
    this.message = data.message.videoMessage;
    if (data.quoted) {
      this.reply_message = data.quoted;
    } else {
      this.reply_message = false;
    }

    return super._patch(data);
  }
}

class Image extends Base {
  constructor(client, data, msg) {
    super(client);
    if (data) this._patch(data, msg);
  }

  _patch(data, msg) {
    this.isGroup = data.isGroup;
    this.id = data.key.id === undefined ? undefined : data.key.id;
    this.jid = data.key.remoteJid;
    this.pushName = data.pushName;
    this.participant = data.sender;
    this.sudo = config.SUDO.split(",").includes(this.participant.split("@")[0]);
    this.caption = data.body;
    this.fromMe = data.key.fromMe;
    this.timestamp =
      typeof data.messageTimestamp === "object"
        ? data.messageTimestamp.low
        : data.messageTimestamp;
    this.key = data.key;
    this.message = data.message.imageMessage;
    if (data.quoted) {
      this.reply_message = data.quoted;
    } else {
      this.reply_message = false;
    }

    return super._patch(data);
  }
  async reply(text, opt = { withTag: true }) {
    return this.client.sendMessage(
      this.jid,
      {
        text: require("util").format(text),
        ...opt,
      },
      { ...opt, quoted: this.data }
    );
  }
}
class Message extends Base {
  constructor(client, data, msg) {
    super(client, data);
    if (data) this._patch(data, msg);
  }
  _patch(data, msg) {
    this.user = decodeJid(this.client.user.id);
    this.key = data.key;
    this.isGroup = data.isGroup;
    this.prefix = data.prefix;
    this.id = data.key.id === undefined ? undefined : data.key.id;
    this.jid = data.key.remoteJid;
    this.message = { key: data.key, message: data.message };
    this.pushName = data.pushName;
    this.participant = data.sender;
    this.sudo = config.SUDO.split(",").includes(this.participant.split("@")[0]);
    this.text = data.body;
    this.fromMe = data.key.fromMe;
    this.message = msg.message;
    this.timestamp =
      typeof data.messageTimestamp === "object"
        ? data.messageTimestamp.low
        : data.messageTimestamp;

    if (
      data.message.hasOwnProperty("extendedTextMessage") &&
      data.message.extendedTextMessage.hasOwnProperty("contextInfo") === true &&
      data.message.extendedTextMessage.contextInfo.hasOwnProperty(
        "mentionedJid"
      )
    ) {
      this.mention = data.message.extendedTextMessage.contextInfo.mentionedJid;
    } else {
      this.mention = false;
    }

    if (
      data.message.hasOwnProperty("extendedTextMessage") &&
      data.message.extendedTextMessage.hasOwnProperty("contextInfo") === true &&
      data.message.extendedTextMessage.contextInfo.hasOwnProperty(
        "quotedMessage"
      )
    ) {
      this.reply_message = new ReplyMessage(
        this.client,
        data.message.extendedTextMessage.contextInfo,
        data
      );
      this.reply_message.type = data.quoted.type || "extendedTextMessage";
      this.reply_message.mtype = data.quoted.mtype;
      this.reply_message.mimetype = data.quoted.text.mimetype || "text/plain";
      this.reply_message.key = data.quoted.key;
      this.reply_message.message = data.quoted.message;
    } else {
      this.reply_message = false;
    }

    return super._patch(data);
  }
  async log() {
    console.log(this.data);
  }
  async sendFile(content, options = {}) {
    let { data } = await this.client.getFile(content);
    let type = await fileType.fromBuffer(data);
    return this.client.sendMessage(
      this.jid,
      { [type.mime.split("/")[0]]: data, ...options },
      { ...options }
    );
  }
  async downloadMediaMessage() {
    let buff = await this.m.download();
    let type = await fileType.fromBuffer(buff);
    await fs.promises.writeFile(new Date() + type.ext, buff);
    return new Date() + type.ext;
  }
  async reply(text, opt = {}) {
    return this.client.sendMessage(
      this.jid,
      {
        text: require("util").format(text),
        ...opt,
      },
      { ...opt, quoted: this }
    );
  }
  async send(jid, text, opt = {}) {
    return this.client.sendMessage(
      jid,
      {
        text: require("util").format(text),
        ...opt,
      },
      { ...opt }
    );
  }
  async sendMessage(
    content,
    opt = { packname: "Xasena", author: "X-electra" },
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
            this.jid,
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
        let optional = await generateWAMessage(this.jid, content, opt);
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
      case "sticker":
        {
          let { data, mime } = await this.client.getFile(content);
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
              await this.client.sendImageAsSticker(this.jid, content, opt);
            } else if (mime === "image") {
              await this.client.sendImageAsSticker(this.jid, content, opt);
            }
          }
        }
        break;
    }
  }

  async forward(jid, message, options = {}) {
    let m = generateWAMessageFromContent(jid, message, {
      ...options,
      userJid: this.client.user.id,
    });
    await this.client.relayMessage(jid, m.message, {
      messageId: m.key.id,
      ...options,
    });
    return m;
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
    if (Buffer.isBuffer(pp)) {
      await this.client.updateProfilePicture(jid, pp);
    } else {
      await this.client.updateProfilePicture(jid, { url: pp });
    }
  }
  /**
   *
   * @param {string} jid
   * @returns
   */
  async block(jid) {
    await this.client.updateBlockStatus(jid, "block");
  }
  /**
   *
   * @param {string} jid
   * @returns
   */
  async unblock(jid) {
    await this.client.updateBlockStatus(jid, "unblock");
  }
  /**
   *
   * @param {array} jid
   * @returns
   */
  async forwardMessage(jid, content, options = {}) {
		let externalAdReply, text = false;
		const isBuffer = Buffer.isBuffer(content);
		const IsMediaUrl = isBuffer ? false : (typeof content != "object") ? this.isMediaURL(content.trim()) : false;
		const messageObj = (!isBuffer && !IsMediaUrl) ? (content?.message || content?.viewOnceMessageV2 || content?.reply_message?.viewOnceMessageV2) ? false : ((!content?.mime && !content?.client?.mime && !content?.reply_message?.mime) || content?.client?.mime == 'text') ? true : false : false;
		content = content?.message?.conversation ?
			content.message.conversation :
			content?.message?.extendedTextMessage ?
			content.message.extendedTextMessage.text :
			content?.reply_message?.extendedTextMessage ?
			content.reply_message.extendedTextMessage.text :
			content?.extendedTextMessage ?
			content.extendedTextMessage.text :
			content?.reply_message?.conversation ?
			content.reply_message.conversation :
			content?.conversation ?
			content.conversation :
			content?.message ?
			await this.client.save(content) :
			(typeof content == 'string') ?
			content :
			isBuffer ?
			content :
		    getContentType(content) ?
			await this.client.save({message: content}) :
			messageObj ?
			content :
			content?.viewOnceMessageV2 ?
			await this.client.save(content.viewOnceMessageV2) :
			content?.reply_message?.viewOnceMessageV2 ?
			await this.client.save(content.reply_message.viewOnceMessageV2) :
			content?.reply_message?.msg ?
			await this.client.save({
				message: {
					[content.reply_message.type]: content.reply_message.msg
				}
			}) :
			(content?.msg && content?.type) ?
			await this.client.save({
				message: {
					[content.type]: content.msg
				}
			}) :
			await this.client.save({
				message: content
			})
		if (!IsMediaUrl && typeof content == 'string' && (!options.forwardType || options.forwardType == 'text')) text = content;
		//LinkPreview
		if (options.linkPreview) {
			externalAdReply = {
				title: options.linkPreview.title,
				body: options.linkPreview.body,
				renderLargerThumbnail: options.linkPreview.renderLargerThumbnail || false,
				showAdAttribution: options.linkPreview.showAdAttribution,
				mediaType: options.linkPreview.mediaType,
				thumbnailUrl: options.linkPreview.thumbnailUrl,
				previewType: options.linkPreview.previewType,
				containsAutoReply: options.linkPreview.containsAutoReply,
				thumbnail: options.linkPreview.thumbnail,
				mediaUrl: options.linkPreview.mediaUrl || options.linkPreview.mediaurl,
				sourceUrl: options.linkPreview.sourceUrl || options.linkPreview.sourceurl
			}
		}
		const opt = {
			mimetype: (options.mimetype || options.mime),
			jpegThumbnail: options.jpegThumbnail,
			mentions: options.mentions,
			fileName: (options.fileName || options.filename || options.name),
			fileLength: (options.fileLength || options.filesize || options.size),
			caption: options.caption,
			headerType: options.headerType,
			ptt: options.ptt,
			gifPlayback: (options.gifPlayback || options.gif),
			viewOnce: (options.viewOnce || options.vv),
			seconds: (options.seconds || options.duration),
			waveform: (options.waveform || options.wave),
			contextInfo: {}
		}
		if (!content?.buff && messageObj && (typeof content != 'string') && (!options.forwardType || options.forwardType != 'text')) {
			content = content?.reply_message?.i ? content.reply_message : content;
		 const msg = await generateWAMessageFromContent(jid, content, {
				quoted: (options.quoted && options.quoted?.message && options.quoted?.key)?options.quoted:null
			});
			const keys = Object.keys(msg.message)[0];
			msg.message[keys].contextInfo = msg.message[keys].contextInfo || {};
			if (options.contextInfo?.mentionedJid) msg.message[keys].contextInfomentionedJid = Array.isArray(options.contextInfo.mentionedJid) ? options.contextInfo.mentionedJid : [options.contextInfo.mentionedJid];
			if (options.contextInfo?.forwardingScore) msg.message[keys].contextInfo.forwardingScore = options.contextInfo.forwardingScore;
			if (options.contextInfo?.isForwarded) msg.message[keys].contextInfo.isForwarded = options.contextInfo.isForwarded;
			if (externalAdReply) msg.message[keys].contextInfo.externalAdReply = externalAdReply;
			return await this.client.relayMessage(jid, msg.message, {})
		} else if (!text && (!options.forwardType || options.forwardType != 'text')) {
			let buff = content,
				mimetype = false,
				model = false;
			if (!isBuffer && typeof content == 'object') {
				buff = content.buff;
				mimetype = content.mime;
				model = content.type;
			} else if (IsMediaUrl) {
				buff = await getBuffer(buff.trim())
			} else if (!isBuffer) {
				buff = {
					url: buff.trim()
				}
			}
			let mime = Buffer.isBuffer(buff) ? await (await require("file-type").fromBuffer(buff)).mime : opt.mimetype ? opt.mimetype : undefined;
			let type = (mime && mime.split('/')[1]) == 'webp' ? 'sticker' : (mime && mime.split('/')[0]) == 'video' ? 'video' : (mime && mime.split('/')[0]) == 'audio' ? 'audio' : 'image';
			type = (options.forwardType || model || type).toLowerCase().trim();
			if (type == "sticker") {
				opt.quoted = (options.quoted && options.quoted?.message && options.quoted?.key)?options.quoted:null;
				if (options.contextInfo?.mentionedJid) opt.contextInfo.mentionedJid = Array.isArray(options.contextInfo.mentionedJid) ? options.contextInfo.mentionedJid : [options.contextInfo.mentionedJid];
				if (options.contextInfo?.forwardingScore) opt.contextInfo.forwardingScore = options.contextInfo.forwardingScore;
				if (options.contextInfo?.isForwarded) opt.contextInfo.isForwarded = options.contextInfo.isForwarded;
				if (externalAdReply) opt.contextInfo.externalAdReply = externalAdReply;
				return await this.sendSticker(jid, buff, {
					packname: options.packname,
					author: options.author,
					...opt
				});
			} else {
				const option = {
					contextInfo: {}
				}
				for (let key in opt) {
					if (opt[key] != undefined) {
						if (!Array.isArray(opt[key]) || !opt[key].includes(undefined)) {
							option[key] = opt[key]
						}
					}
					if (opt.seconds) option.seconds = [opt.seconds];
					if (opt.waveform) option.waveform = opt.waveform;
				}
				if ((type == 'audio') && option.waveform) {
					option.mimetype = "audio/ogg; codecs=opus";
					option.ptt = false;
				}
				if (!option.mimetype) option.mimetype = mimetype || mime;
				if (options.contextInfo?.mentionedJid) option.contextInfo.mentionedJid = Array.isArray(options.contextInfo.mentionedJid) ? options.contextInfo.mentionedJid : [options.contextInfo.mentionedJid];
				if (options.contextInfo?.forwardingScore) option.contextInfo.forwardingScore = options.contextInfo.forwardingScore;
				if (options.contextInfo?.isForwarded) option.contextInfo.isForwarded = options.contextInfo.isForwarded;
				if (externalAdReply) option.contextInfo.externalAdReply = externalAdReply;
				return await this.client.sendMessage(jid, {
					[type]: buff,
					...option,
					ephemeralExpiration: WA_DEFAULT_EPHEMERAL
				}, {
					quoted: (options.quoted && options.quoted?.message && options.quoted?.key)?options.quoted:null
				})
			}
		} else {
			if (options.linkPreview) opt.contextInfo.externalAdReply = externalAdReply;
			if (opt.contextInfo.externalAdReply && Object.keys(opt.contextInfo.externalAdReply).length != 0) {
				opt.contextInfo.externalAdReply.previewType = "PHOTO"
				opt.contextInfo.externalAdReply.containsAutoReply = true
			}
			return await this.client.sendMessage(jid, {
				text: util.format(content),
				...opt,
				ephemeralExpiration: WA_DEFAULT_EPHEMERAL
			}, {
				quoted: (options.quoted && options.quoted?.message && options.quoted?.key)?options.quoted:null
			})
		}
                                         }
  async add(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "add");
  }
  /**
   *
   * @param {array} jid
   * @returns
   */
  async kick(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "remove");
  }

  /**
   *
   * @param {array} jid
   * @returns
   */
  async promote(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "promote");
  }
  /**
   *
   * @param {array} jid
   * @returns
   */
  async demote(jid) {
    return await this.client.groupParticipantsUpdate(this.jid, jid, "demote");
  }
}

class ReplyMessage extends Base {
  constructor(client, data, msg) {
    super(client, msg);
    if ((data, msg)) this._patch(data, msg);
  }

  _patch(data, msg) {
    this.key = data.key;
    this.id = data.stanzaId;
    this.jid = data.participant;
    this.sudo = config.SUDO.split(",").includes(data.participant.split("@")[0]);
    this.fromMe = data.fromMe;

    if (data.quotedMessage && data.quotedMessage.imageMessage) {
      this.message =
        data.quotedMessage.imageMessage.caption === null
          ? data.message.imageMessage.caption
          : "";
      this.caption =
        data.quotedMessage.imageMessage.caption === null
          ? data.message.imageMessage.caption
          : "";
      this.url = data.quotedMessage.imageMessage.url;
      this.mimetype = data.quotedMessage.imageMessage.mimetype;
      this.height = data.quotedMessage.imageMessage.height;
      this.width = data.quotedMessage.imageMessage.width;
      this.mediaKey = data.quotedMessage.imageMessage.mediaKey;
      this.image = true;
      this.video = false;
      this.sticker = false;
    } else if (data.quotedMessage && data.quotedMessage.videoMessage) {
      this.message =
        data.quotedMessage.videoMessage.caption === null
          ? data.message.videoMessage.caption
          : "";
      this.caption =
        data.quotedMessage.videoMessage.caption === null
          ? data.message.videoMessage.caption
          : "";
      this.url = data.quotedMessage.videoMessage.url;
      this.mimetype = data.quotedMessage.videoMessage.mimetype;
      this.height = data.quotedMessage.videoMessage.height;
      this.width = data.quotedMessage.videoMessage.width;
      this.mediaKey = data.quotedMessage.videoMessage.mediaKey;
      this.video = true;
    } else if (data.quotedMessage && data.quotedMessage.conversation) {
      this.message = data.quotedMessage.conversation;
      this.text = data.quotedMessage.conversation;
      this.image = false;
      this.video = false;
      this.sticker = false;
    } else if (data.quotedMessage && data.quotedMessage.stickerMessage) {
      this.sticker = { animated: data.quotedMessage.stickerMessage.isAnimated };
      this.mimetype = data.quotedMessage.stickerMessage.mimetype;
      this.message = data.quotedMessage.stickerMessage;
      this.image = false;
      this.video = false;
    } else if (data.quotedMessage && data.quotedMessage.audioMessage) {
      this.audio = data.quotedMessage.audioMessage;
      this.mimetype = data.quotedMessage.audioMessage.mimetype;
    }

    return super._patch(data);
  }
  async downloadMediaMessage() {
    let buff = await this.m.quoted.download();
    let type = await fileType.fromBuffer(buff);
    await fs.promises.writeFile("./media" + type.ext, buff);
    return "./media" + type.ext;
  }
}

class Sticker extends Base {
  constructor(client, data, msg) {
    super(client, msg);
    if ((data, msg)) this._patch(data, msg);
  }
  _patch(data, msg) {
    this.key = data.key;
    this.id = data.key.id;
    this.jid = data.key.remoteJid;
    this.isGroup = data.isGroup;
    this.participant = data.sender;
    this.message = data.message.stickerMessage;
    this.pushName = data.pushName;
    this.sudo = config.SUDO.split(",").includes(data.sender.split("@")[0]);
    this.timestamp =
      typeof data.messageTimestamp === "object"
        ? data.messageTimestamp.low
        : data.messageTimestamp;
    this.sticker = true;
    return super._patch(data);
  }
  async downloadMediaMessage() {
    let buff = await this.m.download();
    let name = new Date();
    await fs.promises.writeFile(name, buff);
    return name;
  }
}

module.exports = { Base, Image, Message, ReplyMessage, Video, Sticker };
