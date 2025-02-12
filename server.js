// server.js
require('dotenv').config(); // Pour charger les variables d'environnement depuis un fichier .env (optionnel)
const express = require('express');
const axios = require('axios');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Port d'écoute
const PORT = process.env.PORT || 3000;

// Votre clé secrète reCAPTCHA (à stocker en variable d'environnement)
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || 'VOTRE_CLÉ_SECRÈTE_ICI'; // Remplacez par votre clé secrète

// Endpoint pour valider le token reCAPTCHA
app.post('/verify-recaptcha', async (req, res) => {
  try {
    // Récupérer le token envoyé par le client
    const { recaptchaToken } = req.body;
    if (!recaptchaToken) {
      return res.status(400).json({ success: false, message: "Token manquant" });
    }

    // Construire le corps de la requête pour créer une évaluation
    const requestBody = {
      event: {
        token: recaptchaToken,
        expectedAction: "LOGIN",  // Doit correspondre à l'action utilisée côté client
        siteKey: "6Le6T9QqAAAAAF1KrhvuqcUsk9u6qxxG9OSRaE1x"
      }
    };

    // URL de l'API reCAPTCHA Enterprise
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/drivemenow-450218/assessments?key=${RECAPTCHA_SECRET_KEY}`;

    // Envoyer la requête POST à l'API
    const response = await axios.post(url, requestBody);
    const assessment = response.data;

    // Vérifier l'action et le score (score > 0.5 par exemple)
    if (assessment.tokenProperties && assessment.tokenProperties.action === "LOGIN" &&
        assessment.riskAnalysis && assessment.riskAnalysis.score > 0.5) {
      res.json({ success: true, message: "reCAPTCHA validé.", assessment });
    } else {
      res.status(403).json({ success: false, message: "Échec de la validation reCAPTCHA.", assessment });
    }
  } catch (error) {
    console.error("Erreur lors de la validation reCAPTCHA :", error.response ? error.response.data : error.message);
    res.status(500).json({ success: false, message: "Erreur serveur lors de la validation reCAPTCHA." });
  }
});

// Exemple d'endpoint d'authentification qui utilise la vérification reCAPTCHA
app.post('/login', async (req, res) => {
  // Supposons que le client envoie : email, password, recaptchaToken, etc.
  const { email, password, recaptchaToken } = req.body;
  // 1. Vérifier le reCAPTCHA avant de continuer l'authentification
  try {
    const recaptchaResponse = await axios.post(
      `https://recaptchaenterprise.googleapis.com/v1/projects/drivemenow-450218/assessments?key=${RECAPTCHA_SECRET_KEY}`,
      {
        event: {
          token: recaptchaToken,
          expectedAction: "LOGIN",
          siteKey: "6Le6T9QqAAAAAF1KrhvuqcUsk9u6qxxG9OSRaE1x"
        }
      }
    );
    const assessment = recaptchaResponse.data;
    if (!(assessment.tokenProperties && assessment.tokenProperties.action === "LOGIN" &&
         assessment.riskAnalysis && assessment.riskAnalysis.score > 0.5)) {
      return res.status(403).json({ success: false, message: "reCAPTCHA non validé." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Erreur lors de la vérification reCAPTCHA." });
  }

  // 2. Poursuivre la logique d'authentification (vérification email/mot de passe dans la base de données)
  // ...
  res.json({ success: true, message: "Authentification réussie." });
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
