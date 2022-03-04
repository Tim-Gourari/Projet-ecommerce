let email = "tim-bastien@gmail.com";
let password = "viaformation";

function btn() {
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
 if (mail == email && pass == password) {
    window.open("./assets/pages/acceuil.html")
} else {
    alert('Email ou mot de passe incorect');
    return false;
}   
}
