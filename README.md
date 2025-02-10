<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livret d'Apprentissage - Candidat Libre Permis B</title>
  <!-- Font Awesome pour les icônes -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <!-- Google Maps API avec votre clé API et la bibliothèque Places -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSV-dmqFiZe4Y7B_UmD4iDJpjIYJzWGIc&libraries=places"></script>
  <style>
    /* Réinitialisation */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      height: 100%;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #000;
      color: #fff;
      line-height: 1.6;
    }
    .cover-page {
      max-width: 900px;
      background: #111;
      margin: 30px auto;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(255,255,255,0.1);
    }
    /* Titre et sous-titre */
    .title-section {
      margin-bottom: 40px;
      text-align: center;
    }
    .title-line1, .title-line2 {
      font-size: 2.2em;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    .subtitle {
      font-size: 1.2em;
      color: #ccc;
      margin-top: 20px;
      margin-bottom: 40px;
      text-align: center;
    }
    /* Formulaire et disposition des informations */
    form {
      width: 100%;
    }
    .info-section {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .candidate-info {
      flex: 1;
      min-width: 300px;
      margin-right: 20px;
    }
    .info-field {
      margin-bottom: 15px;
      text-align: left;
    }
    .info-field label {
      font-weight: bold;
      margin-right: 8px;
      color: #fff;
    }
    .info-field input[type="text"],
    .info-field input[type="email"],
    .info-field input[type="tel"],
    .info-field input[type="date"] {
      padding: 5px;
      font-size: 1em;
      border: 1px solid #555;
      border-radius: 4px;
      background-color: #222;
      color: #fff;
    }
    .info-field input::placeholder {
      color: #aaa;
    }
    /* NEPH fields : 12 petits champs alignés horizontalement */
    .neph-boxes {
      display: flex;
      flex-direction: row;
      vertical-align: middle;
    }
    .neph-box {
      width: 25px;
      height: 25px;
      border: 1px solid #777;
      text-align: center;
      line-height: 25px;
      vertical-align: middle;
      margin-right: 0;
    }
    .neph-box input {
      width: 100%;
      border: none;
      outline: none;
      text-align: center;
      font-size: 1em;
      background-color: #222;
      color: #fff;
    }
    /* Zone photo avec prévisualisation */
    .photo-placeholder {
      width: 150px;
      height: 200px;
      border: 2px dashed #555;
      border-radius: 5px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: #aaa;
      font-size: 0.9em;
    }
    .photo-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: none;
    }
    .photo-placeholder input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    /* Boutons */
    .btn {
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      background-color: #4CAF50;
      color: #fff;
      margin: 10px;
    }
    .btn.edit {
      background-color: #f0ad4e;
    }
    /* Section résumé (après validation) */
    .summary {
      display: none;
      margin-bottom: 40px;
      text-align: left;
    }
    .summary p {
      margin-bottom: 10px;
    }
    .summary label {
      font-weight: bold;
    }
    /* Footer */
    .footer {
      text-align: center;
      font-size: 1.2em;
      font-style: italic;
      border-top: 1px solid #444;
      padding-top: 20px;
      color: #ccc;
    }
    /* Responsive : adaptation pour petits écrans */
    @media (max-width: 768px) {
      .info-section {
        flex-direction: column;
      }
      .photo-placeholder {
        width: 100%;
        height: auto;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="cover-page">
    <!-- Titre et sous-titre -->
    <div class="title-section">
      <div class="title-line1">LIVRET D'APPRENTISSAGE</div>
      <div class="title-line2">Candidat Libre au Permis B</div>
      <div class="subtitle">Votre guide complet pour réussir le permis B en candidat libre.</div>
    </div>
    
    <!-- Formulaire interactif -->
    <form id="infoForm" action="#" method="post" enctype="multipart/form-data">
      <div class="info-section">
        <div class="candidate-info">
          <div class="info-field">
            <label for="nom">Nom du candidat :</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
          </div>
          <div class="info-field">
            <label for="prenom">Prénom du candidat :</label>
            <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required>
          </div>
          <div class="info-field">
            <label for="date-naissance">Date de naissance :</label>
            <input type="date" id="date-naissance" name="date_naissance" required>
          </div>
          <!-- Champ adresse avec autocomplete off pour réduire les suggestions natives -->
          <div class="info-field">
            <label for="adresse">Adresse :</label>
            <input type="text" id="adresse" name="adresse" placeholder="Votre adresse" required autocomplete="off">
          </div>
          <div class="info-field">
            <label for="code-postal">Code postal :</label>
            <input type="text" id="code-postal" name="code_postal" placeholder="Code postal" required>
          </div>
          <div class="info-field">
            <label for="commune">Commune :</label>
            <input type="text" id="commune" name="commune" placeholder="Votre commune" required>
          </div>
          <div class="info-field">
            <label for="telephone"><i class="fas fa-phone"></i> Téléphone :</label>
            <input type="tel" id="telephone" name="telephone" placeholder="Votre numéro" required>
          </div>
          <div class="info-field">
            <label for="email"><i class="fas fa-envelope"></i> Email :</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required>
          </div>
          <div class="info-field">
            <label for="responsable">Responsable de la formation :</label>
            <input type="text" id="responsable" name="responsable" placeholder="Nom du responsable" required>
          </div>
          <div class="info-field">
            <label>Numéro d'inscription NEPH :</label>
            <span class="neph-boxes">
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
              <span class="neph-box"><input type="text" name="neph[]" maxlength="1" pattern="[0-9]" required></span>
            </span>
          </div>
          <div class="info-field">
            <label for="date-debut">Date de début de formation :</label>
            <input type="date" id="date-debut" name="date_debut" required>
          </div>
        </div>
        <div class="photo-placeholder">
          <img id="photoPreview" alt="Prévisualisation de la photo">
          <input type="file" name="photo" accept="image/*" required>
        </div>
      </div>
      <div style="text-align: center;">
        <button type="submit" class="btn">Envoyer</button>
      </div>
    </form>
    
    <!-- Résumé affiché après validation (sans titre "Informations validées") -->
    <div id="summaryView" class="summary">
      <p><label>Nom :</label> <span id="sumNom"></span></p>
      <p><label>Prénom :</label> <span id="sumPrenom"></span></p>
      <p><label>Date de naissance :</label> <span id="sumDateNaissance"></span></p>
      <p><label>Adresse :</label> <span id="sumAdresse"></span></p>
      <p><label>Code postal :</label> <span id="sumCodePostal"></span></p>
      <p><label>Commune :</label> <span id="sumCommune"></span></p>
      <p><label>Téléphone :</label> <span id="sumTelephone"></span></p>
      <p><label>Email :</label> <span id="sumEmail"></span></p>
      <p><label>Responsable :</label> <span id="sumResponsable"></span></p>
      <p><label>NEPH :</label> <span id="sumNeph"></span></p>
      <p><label>Date de début :</label> <span id="sumDateDebut"></span></p>
      <p><label>Photo :</label><br>
         <img id="sumPhoto" style="max-width: 150px; border: 1px solid #ccc;">
      </p>
      <button class="btn edit" id="editBtn"><i class="fas fa-edit"></i> Modifier</button>
    </div>
    
    <div class="footer">"Prenez le volant de votre avenir et conduisez vers la liberté"</div>
  </div>
  
  <script>
    // Auto-focus pour les champs NEPH : passage automatique au suivant dès qu'un chiffre est saisi
    const nephInputs = document.querySelectorAll('.neph-box input');
    nephInputs.forEach((input, index) => {
      input.addEventListener('input', function() {
        if (this.value.length >= this.maxLength) {
          if (index + 1 < nephInputs.length) {
            nephInputs[index + 1].focus();
          }
        }
      });
    });
    
    // Fonction pour formater les dates en jj/mm/aaaa
    function formatDate(dateStr) {
      if (!dateStr) return "";
      const parts = dateStr.split("-");
      if (parts.length !== 3) return dateStr;
      return parts[2] + "/" + parts[1] + "/" + parts[0];
    }
    
    // Fonction pour collecter les données du formulaire
    function collectFormData() {
      const data = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        dateNaissance: formatDate(document.getElementById('date-naissance').value),
        adresse: document.getElementById('adresse').value,
        codePostal: document.getElementById('code-postal').value,
        commune: document.getElementById('commune').value,
        telephone: document.getElementById('telephone').value,
        email: document.getElementById('email').value,
        responsable: document.getElementById('responsable').value,
        dateDebut: formatDate(document.getElementById('date-debut').value),
        neph: Array.from(nephInputs).map(input => input.value).join(''),
        photo: document.getElementById('photoPreview').src
      };
      return data;
    }
    
    // Fonction pour afficher le résumé
    function displaySummary(data) {
      document.getElementById('sumNom').innerText = data.nom;
      document.getElementById('sumPrenom').innerText = data.prenom;
      document.getElementById('sumDateNaissance').innerText = data.dateNaissance;
      document.getElementById('sumAdresse').innerText = data.adresse;
      document.getElementById('sumCodePostal').innerText = data.codePostal;
      document.getElementById('sumCommune').innerText = data.commune;
      document.getElementById('sumTelephone').innerText = data.telephone;
      document.getElementById('sumEmail').innerText = data.email;
      document.getElementById('sumResponsable').innerText = data.responsable;
      document.getElementById('sumNeph').innerText = data.neph;
      document.getElementById('sumDateDebut').innerText = data.dateDebut;
      if (data.photo && data.photo !== "") {
        document.getElementById('sumPhoto').src = data.photo;
      }
    }
    
    // Gestion de la soumission du formulaire
    const infoForm = document.getElementById('infoForm');
    infoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = collectFormData();
      localStorage.setItem('validatedData', JSON.stringify(formData));
      infoForm.style.display = 'none';
      displaySummary(formData);
      document.getElementById('summaryView').style.display = 'block';
    });
    
    // Bouton de modification : revenir au formulaire
    document.getElementById('editBtn').addEventListener('click', function() {
      infoForm.style.display = 'block';
      document.getElementById('summaryView').style.display = 'none';
    });
    
    // Prévisualisation de la photo
    const photoInput = document.querySelector('.photo-placeholder input[type="file"]');
    const photoPreview = document.getElementById('photoPreview');
    photoInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoPreview.src = e.target.result;
          photoPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Intégration de Google Places Autocomplete pour le champ "Adresse"
    function initAutocomplete() {
      const addressInput = document.getElementById('adresse');
      const autocomplete = new google.maps.places.Autocomplete(addressInput, {
        componentRestrictions: { country: "fr" },
        fields: ["address_components", "formatted_address", "geometry", "name"]
      });
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        if (!place.address_components) return;
        let postalCode = "";
        let commune = "";
        place.address_components.forEach(component => {
          const types = component.types;
          if (types.indexOf("postal_code") !== -1) {
            postalCode = component.long_name;
          }
          if (types.indexOf("locality") !== -1) {
            commune = component.long_name;
          }
        });
        if (postalCode) {
          document.getElementById('code-postal').value = postalCode;
        }
        if (commune) {
          document.getElementById('commune').value = commune;
        }
      });
    }
    google.maps.event.addDomListener(window, 'load', initAutocomplete);
    
    // Charger les données validées depuis localStorage lors du chargement de la page
    window.addEventListener('load', function() {
      const storedData = localStorage.getItem('validatedData');
      if (storedData) {
        const data = JSON.parse(storedData);
        infoForm.style.display = 'none';
        displaySummary(data);
        document.getElementById('summaryView').style.display = 'block';
      }
    });
  </script>
</body>
</html>
