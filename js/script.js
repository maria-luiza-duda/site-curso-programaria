document.getElementById("botaoEnviar").addEventListener("click", validaFormulario) 

function validaFormulario(){
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Prontinho! Você receberá as atualizações por email.")
  }else{
    alert("Você ainda precisa preencher um campo!")
  } 
}