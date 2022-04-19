
window.onscroll = function () { myFunction() };

var header = document.getElementById("header");

var sticky = header.offsetTop;




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


    this.classList.toggle("active");
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

function calcular () {
   

  var gas = document.getElementById("gas")
  var gwei = document.getElementById("gwei")
  var resultado = document.getElementById("result")
  console.log(`GAS:${gas.value} // GWEI ${gwei.value}`)
  var result = (this.gas.value * this.gwei.value * 2 * 1e-9).toFixed(5)
  return resultado.innerHTML = `Taxa de transação: ${result}BNB`
}