const express = require('express')
const cors = require('cors');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
const app = express()
const port = 3010

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
        user: 'artsiomsadouski@gmail.com',
        pass: 'medvedi4ek',
    },
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendMessage', async function (req, res)  {
let {email, name, message} = req.body
// send mail with defined transport object
let info = await transporter.sendMail({
    from: 'Portfolio', // sender address
    to: "artsiomsadouski@gmail.com", // list of receivers
    subject: "Message from portfolio page", // Subject line
    //text: "Hello world?", // plain text body
    html: `<b>Hello world?</b>
    <div>email: ${email}</div>
    <div>name: ${name}</div>
    <div>message: ${message}</div>`

})
    res.send('yoyoyo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})