
function modifier(){
    window.location="index.html";
}

window.onload=function(){
var depart =localStorage.getItem("depart");
var arrive= localStorage.getItem("arrive");
// document.getElementById("text1").innerHTML=depart;
// document.getElementById("text2").innerHTML=arrive;
// document.querySelector(".text1").innerHTML=depart;
// document.querySelector(".text2").innerHTML=arrive;
$("p.text1").html(depart);
$("p.text2").html(arrive);


}

function choix1(){
	localStorage.setItem('pre','125,34€')
	localStorage.setItem('sec','105,23€')
	window.location="choix.html"
}

function choix2(){
	localStorage.setItem('pre','100,24€')
	localStorage.setItem('sec','85,34€')
	window.location="choix.html"
}

function choix3(){
	localStorage.setItem('pre','119,11€')
	localStorage.setItem('sec','100,13€')
	window.location="choix.html"
}

function choix4(){
	localStorage.setItem('pre','109,78€')
	localStorage.setItem('sec','99,34€')
	window.location="choix.html"
}

function choix5(){
	localStorage.setItem('pre','133,28€')
	localStorage.setItem('sec','110,45€')
	window.location="choix.html"
}

function choix6(){
	localStorage.setItem('pre','115,58€')
	localStorage.setItem('sec','89,65€')
	window.location="choix.html"
}



function panier(){
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
