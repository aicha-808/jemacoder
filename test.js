// / Récuperons les éléments du Dom
const form = document.querySelector("form");
const ChampPrenom = document.getElementById("pre");
const ChampNom = document.getElementById("nom");
const ChampMail = document.getElementById("mail");
const ChampTel = document.getElementById("tel");
const bsubmit = document.getElementById("submit");
const bUpdate = document.getElementById("update");
let tbody = document.querySelector("tbody");

const users = JSON.parse(localStorage.getItem("users")) || [];

const addUsers = (Prenom, Nom, Email, Telephone) => {

    users.push({
        Prenom,
        Nom,
        Email,
        Telephone
    }) 

    localStorage.setItem("users", JSON.stringify(users))
    return {Prenom, Nom, Email, Telephone}
};

// function ajouter
function craeteUser({Prenom, Nom, Email, Telephone}) {
    // créer les éléments du tableau
    let tr = document.createElement("tr");
    let tdPrenom = document.createElement("td");
    let tdNom = document.createElement("td");
    let tdMail = document.createElement("td");
    let tdTel = document.createElement("td");
    let tdActions = document.createElement("td");
    tdActions.className = "boutActions, d-flex, justify-content-evenly";
    // donner du contenu aux cellules du tableau
    tdPrenom.innerText = Prenom;
    tdNom.innerText = Nom;
    tdMail.innerText = Email;
    tdTel.innerText = Telephone;
    tdActions.innerHTML = `
    <button onclick="edit(this)" type="button" class="btn btn-warning" id="edit">Modifier</button>
    <button onclick="supprime(this)" type="button" class="btn btn-danger ms-5" id="supp">Supprimer</button>
    `
    // ajouter dans le DOM
    tr.appendChild(tdPrenom);
    tr.appendChild(tdNom);
    tr.appendChild(tdMail);
    tr.appendChild(tdTel);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);   
}

users.forEach(craeteUser); 

// // ecoutons l'envoie des données via le formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUser = addUsers(
    ChampPrenom.value,
    ChampNom.value,
    ChampMail.value,
    ChampTel.value
    );
    craeteUser(newUser);
    resetForm();
})

// // Vidons les champs de saisie aprés ajout d'un utilisateur
function resetForm() {
    ChampPrenom.value = "";
    ChampNom.value = "";
    ChampMail.value = "";
    ChampTel.value = "";
}

// gestion de l'action supprimer
function supprime(element) {
    // Accéder à la ligne parente (tr) du bouton cliqué
   let ligne = element.parentNode.parentNode;

   // Accéder  au parent (tbody) de la ligne
    tbody = ligne.parentNode;

   // Supprimer la ligne du tableau
   tbody.removeChild(ligne);
   localStorage.removeItem("users");
 }

// gestion de l'action modifier
function edit() {
    console.log("success");
    bsubmit.style.display = "none";
    bUpdate.style.display = "block";
    // 
    // var users;
    // if (localStorage.getItem("users") == null) {
    //     users = [];
    // }else{
    //     users = JSON.parse(localStorage.getItem("users"));  
    // }
    //  ChampPrenom.value = users[indice].Prenom;
    //  ChampNom.value = users[indice].Nom;
    //  ChampMail.value = users[indice].Email;
    //  ChampTel.value = users[indice].Telephone;
}

             
 