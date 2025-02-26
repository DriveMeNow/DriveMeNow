// server.js
require('dotenv').config(); // Pour charger les variables d'environnement depuis un fichier .env
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(bodyParser.json());

// Définissez votre clé API SendGrid dans les variables d'environnement
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Endpoint pour envoyer le code OTP
app.post('/send-otp', async (req, res) => {
  const { email, otp } = req.body; // Le client doit envoyer l'email et le code OTP généré
  
  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email et OTP sont requis.' });
  }
  
  // Préparez l'e-mail
  const msg = {
    to: email, // L'e-mail du destinataire
    from: 'candidatlibre.assistance@gmail.com', // L'adresse vérifiée dans SendGrid (vérifiez votre configuration SendGrid)
    subject: 'Votre code à usage unique',
    text: `Bonjour,

Voici votre code à usage unique : ${otp}

Utilisez ce code pour finaliser votre authentification sur DriveMeNow.

Cordialement,
L’équipe DriveMeNow`,
    html: `<p>Bonjour,</p>
<p>Voici votre code à usage unique : <strong>${otp}</strong></p>
<p>Utilisez ce code pour finaliser votre authentification sur <strong>DriveMeNow</strong>.</p>
<p>Cordialement,<br>L’équipe DriveMeNow</p>`
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: 'E-mail envoyé avec succès.' });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'e-mail." });
  }
});

// Exemple d'endpoint de test pour l'envoi d'OTP
app.post('/test-otp', (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  res.json({ otp });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
