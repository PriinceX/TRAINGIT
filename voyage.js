function choix(){window.location="choix.html"}

function valid(){
   var mail= document.getElementById("mail");
   var prenom=  document.getElementById("prenom");
   var nom=  document.getElementById("nom");
   var date=  document.getElementById("date");
   var mois=  document.getElementById("mois");
   var annee= document.getElementById("annee");
    if(mail.value!="" && prenom.value!="" && nom.value!="" && date.value!="" && mois.value!="Mois" && annee.value!=""){
        localStorage.setItem("mail",mail.value );
        localStorage.setItem("prenom",prenom.value );
        localStorage.setItem("nom",nom.value );
        localStorage.setItem("date",date.value );
        localStorage.setItem("mois",mois.value );
        localStorage.setItem("annee",annee.value );
        window.location="Paiement.html";
    }else{
        mail.style.border="1px solid red";
        prenom.style.border="1px solid red";
        nom.style.border="1px solid red";
        date.style.border="1px solid red";
        mois.style.border="1px solid red";
        annee.style.border="1px solid red";
    }
}

function panier1(){
	Swal.fire({
		position: 'bottom-end',
		icon: 'info',
		title: 'votre panier est vide',
		showConfirmButton: false,
		timer : 3600,
	})
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
/*var btn = document.getElementById("myBtn");*/

var btn = document.querySelector(".menu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

/*btn.onclick = */ function btn1() {
	document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal

/*span.onclick =*/ function span1() {
	document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}


function verifmail(){
  var mail= document.getElementById("mail");
  if(mail.value==""){
    mail.style.border="1px solid red";
  }else{
    mail.style.border="1px solid gray";
  }
}

function verifprenom(){
  var prenom=  document.getElementById("prenom");
  if(prenom.value==""){
    prenom.style.border="1px solid red";
  }else{
    prenom.style.border="1px solid gray";
  }
}

function verifnom(){
  var nom=  document.getElementById("nom");
  if(nom.value==""){
    nom.style.border="1px solid red";
  }else{
    nom.style.border="1px solid gray";
  }
}

function verifdate(){
  var date=  document.getElementById("date");
  if(date.value==""){
    date.style.border="1px solid red";
  }else{
    date.style.border="1px solid gray";
  }
}

function verifmois(){
  var mois=  document.getElementById("mois");
  if(mois.value=="mois"){
    mois.style.border="1px solid red";
  }else{
    mois.style.border="1px solid gray";
  }
}

function verifannee(){
  var annee= document.getElementById("annee");
  if(annee.value==""){
    annee.style.border="1px solid red";
  }else{
    annee.style.border="1px solid gray";
  }
}

