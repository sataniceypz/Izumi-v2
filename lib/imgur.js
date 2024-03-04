module.exports = {
    upload: async(fileName)=>{
        const { ImgurClient } = require('imgur');
        const client = new ImgurClient({ clientId: "60c1814e1fa10c8" });
        const response = await client.upload({
        image: require('fs').createReadStream(fileName),
        type: 'stream',
        });
        return (response.data);
    }
          }
