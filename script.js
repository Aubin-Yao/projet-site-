
const addToCartButtons = document.querySelectorAll('.add-to-cart');


function updateCart() {
    const cartButton = document.getElementById('cartButton');
    cartButton.textContent = `Panier (${cartCount})`;
}


addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCart();
    });
});

// Récupérer le formulaire et les éléments
const form = document.querySelector(".contact-form");
const nom = document.querySelector("#nom");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const sujet = document.querySelector("#sujet");
const message = document.querySelector("#message");
const urgent = document.querySelector("#urgent");
const fichier = document.querySelector("#fichier");
const consentement = document.querySelector("#consentement");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let errors = []; 

   
    if (nom.value.trim() === "") {
        errors.push("Le nom est requis.");
    }

    if (email.value.trim() === "" || !validateEmail(email.value)) {
        errors.push("Veuillez entrer un e-mail valide.");
    }

    if (sujet.value.trim() === "") {
        errors.push("Le sujet est requis.");
    }

    if (message.value.trim() === "") {
        errors.push("Le message est requis.");
    }

    if (!consentement.checked) {
        errors.push("Vous devez accepter les conditions d'utilisation et la politique de confidentialité.");
    }

   
    const maxFileSize = 5 * 1024 * 1024; 
    if (fichier.files[0] && fichier.files[0].size > maxFileSize) {
        errors.push("Le fichier est trop volumineux. La taille maximale autorisée est de 5 Mo.");
    }

    
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Le formulaire a été envoyé avec succès !");
    }
});


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
