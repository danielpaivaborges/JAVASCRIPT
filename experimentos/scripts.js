//APRENDENDO SOBRE CLOSURES
//AO DECLARAR A VARIÁVEL O CÓDIGO DA FUNÇÃO É EXECUTADO
let algumaCoisa = voceFalaAdeus();//VAI RETORNAR Adeus

function voceFalaAdeus() {
  document.write("Adeus");
  function euFaloOla() {
    document.write("<br> ola");
  }
  return euFaloOla;
}

//AGORA QUE A VARIÁVEL RECEBEU UMA FUNÇÃO ELA PODE SER EXECUTADA
algumaCoisa(); //VAI RETORNAR ola

