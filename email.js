const nodemailer = require('nodemailer')
require('dotenv').config()
const {google} = require('googleapis')


const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET, process.env.REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

async function sendEmail(correo,link) {
    try{

        const mailOptions = {
            from: 'Chambeando <peruchambeando@gmail.com>',
            to: correo,
            subject: 'Cambia tu contraseña con este link',
            text: link,
            html: `<h1>${link}</h1>`,
        }

        const ACCESS_TOKEN = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth:
            {
                type:'Oauth2',
            user: 'peruchambeando@gmail.com',
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN
                }
    })

        const result = await transport.sendMail(mailOptions)
        return result
    }
    catch(err){
        console.log(err)
    }
}

module.exports.sendEmail = sendEmail
