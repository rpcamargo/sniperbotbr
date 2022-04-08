// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
// Get the header
var header = document.getElementById("header");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position



function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

}

var acc = document.getElementsByClassName("perguntas-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function modal() {
  var modal = document.getElementById("modal");
  var fecharModal = document.getElementById("fecharModal");
  modal.style.display = "block";
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none"
    console.log("fechou")
  })
}

function copiarTexto() {  
  var textoCopiado = document.querySelector("#comprar-wallet").innerHTML;
  var checkTextoCopiado = document.querySelector("#alert-copy")
  var img = document.querySelector(".comprar--text-img-item")

  var textoLimpo = textoCopiado.split(" ").join("");
  navigator.clipboard.writeText(textoLimpo);

  
  checkTextoCopiado.style.display = "inline-block";
  img.style.display = "none"
  if (checkTextoCopiado.style.display = "inline-block") {
    setTimeout(() => {
      img.style.display = "block"
      checkTextoCopiado.style.display = 'none';
    }, 300);
  }

}

function abrirMenu() {
  var menu = document.getElementById("menu-mobile");
  
    if (menu.style.display === "inline") {
      menu.style.display = "none"
      
    } else {
      console.log("entrou nao if")
      menu.style.display = "inline"
    }
    menu.addEventListener("click", () => {
      menu.style.display = "none"
    })
}