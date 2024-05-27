const { getContentType, jidNormalizedUser, downloadMediaMessage } = require("@whiskeysockets/baileys");
const Base = require('./Base');
const config = require('../config');
const Message = require('./Message');
const fs = require('fs');

class ReplyMessage extends Base {
    constructor(client, data) {
        super(client);
        if (data) this.patch(data);
    }

    patch(data) {
        this.id = data.stanzaId;
        this.sender = jidNormalizedUser(data.participant);
        this.fromMe = this.sender === jidNormalizedUser(this.client.user.id);
        this.chat = this.jid = data.msg.contextInfo.remoteJid || data.chat;
        this.type = getContentType(data.quotedMessage);
        this.msg = data.quotedMessage;
        this.data = { key: { remoteJid: this.chat, fromMe: this.fromMe, id: this.id, ...(this.isGroup && { participant: this.sender }) }, message: data.quotedMessage };
        this.isGroup = this.chat ? this.chat.endsWith('@g.us') : false;
        this.isPm = this.chat.endsWith('@s.whatsapp.net');
        this.isBot = this.id.startsWith('BAE5') && this.id.length === 16;
        const sudo = config.SUDO.split(',') || config.SUDO + ',0';
        this.isSudo = [jidNormalizedUser(this.client.user.id), ...sudo].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(this.sender);
        // Determine the message type (mtype) here
        this.mtype = this.type.split(';')[0];
        // Access text based on message type
        this.text = (this.msg[this.mtype]?.text || this.msg[this.mtype]?.caption || this.msg.conversation || this.msg[this.mtype]?.contentText || this.msg[this.mtype]?.selectedDisplayText || this.msg[this.mtype]?.title || false);
        if (data && this.msg.imageMessage) {
		this.image = true;
		this.video = false;
		this.audio = false;
		this.sticker = false;
		} else if (data && this.msg.videoMessage) {
		this.image = false;
		this.video = true;
		this.audio = false;
		this.sticker = false;
		} else if (data && this.msg.conversation) {
		this.image = false;
		this.sticker = false;
		this.video = false;
		this.audio = false;
		} else if (data && this.msg.audioMessage) {
		this.image = false;
		this.video = false;
		this.sticker = false;
		this.audio = true
		} else if (data && this.msg.stickerMessage) {
		this.image = false;
		this.video = false;
		this.audio = false;
		this.sticker = true
        }
        return super.patch(data);
    }
    
    async reply(text, options) {
        const message = await this.client.sendMessage(this.jid, { text }, { quoted: this.data, ...options });
        return new Message(this.client, message);
    }

    async delete() {
        return await this.client.sendMessage(this.chat, { delete: this.data.key });
    }

   async download(type = 'file') {
    const buffer = await downloadMediaMessage(this.data, "buffer");
    if (type == 'buffer') return buffer;
    const mediaType = Object.keys(this.data.message)[0];
    const mimeType = this.data.message[mediaType].mimetype;
    const fileType = mimeType ? mimeType.split('/')[1] : 'unknown';
    const filePath = `./temp/temp.${fileType}`;
    await fs.promises.writeFile(filePath, buffer);
    return filePath;
   }

}
module.exports = ReplyMessage;
