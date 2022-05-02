/*ADIÇÃO DA CLASSE STICKY NO HEADER AO MOVER A PAGINA*/
/*COM ISSO O HEADER SEMPRE PERMANECE NO TOPO*/
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


/*CONTROLADOR DA AÇÃO DE ABRIR E FECHAR AS PERGUNTAS*/
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

/*CONTROLA O MODAL*/
function modal() {
  var modal = document.getElementById("modal");
  var fecharModal = document.getElementById("fecharModal");
  modal.style.display = "block";
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none"
    console.log("fechou")
  })
}

/*REALIZA A AÇÃO DE COPIAR O ENDEREÇO DA CARTEIRA NO MODAL DE COMPRA*/
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

/*FUNÇÃO CONTROLADORA DO MENU RESPONSIVO*/
function abrirMenu() {
  var menu = document.getElementById("menu");
  var header = document.getElementById("header");
  
    if (menu.style.display === "inline") {
      menu.style.display = "none"
      header.style.height ="60px";
      
    } else {
      menu.style.display = "inline"
      header.style.height ="460px";
      
    }
    menu.addEventListener("click", () => {
      menu.style.display = "none"
      header.style.height ="60px";
    })
    
}

/*FUNÇÃO QUE REALIZA O CALCULO DO GAS - PAGE CALCULADORA */
function calcular () {
  var gas = document.getElementById("gas")
  var gwei = document.getElementById("gwei")
  var resultado = document.getElementById("result")
  console.log(`GAS:${gas.value} // GWEI ${gwei.value}`)
  var result = (this.gas.value * this.gwei.value * 2 * 1e-9).toFixed(5)
  return resultado.innerHTML = `Taxa de transação: ${result}BNB`
}