const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // CORS модулийг импортлох

const app = express(); // `app` хувьсагчийг зөвхөн нэг удаа зарлах

const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Клиент талын URL-г зөвшөөрөх
    methods: ['GET', 'POST'], // Зөвшөөрөх HTTP аргууд
    allowedHeaders: ['Content-Type'] // Зөвшөөрөх толгой мэдээлэл
}));

// CORS тохируулах

// Body Parser тохируулах
app.use(bodyParser.json());

// Nodemailer тохируулах
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sotgonbaatar93@gmail.com', // Таны Gmail хаяг
        pass: 'rihnduutwutjboom',         // Gmail App Password
    }
});

// Имэйл илгээх API
app.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;

    const mailOptions = {
        from: 'sotgonbaatar93@gmail.com',
        to: email,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`Алдаа: ${error.message}`);
            return res.status(500).send('Имэйл илгээхэд алдаа гарлаа');
        }
        console.log(`Имэйл амжилттай илгээгдлээ: ${info.response}`);
        res.send('Имэйл амжилттай илгээгдлээ');
    });
});

// Root замд үндсэн HTML хуудсыг үзүүлэх
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Таны index.html серверийн үндсэн хавтсанд байгаа гэж үзнэ
});

// Серверээ ажиллуулах
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер ${PORT} порт дээр ажиллаж байна`);
});
// test help
