import express from 'express';
import bodyParser from 'body-parser';
import sendMail from './mailer';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        await sendMail(to, subject, text);
        res.status(200).json({ success: true, message: 'Email sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
