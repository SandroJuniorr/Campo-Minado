// logica campo minado
// ao clicar em um quadradro verifica-se se é uma mina ou se a mina nos oito quadrados que o cercam.
// 1 - caso aja minas perde-se o jogo, 
// 2 - se hoiver apenas ao redor o quadradro tera o numero que o cercam , 
// 3 - caso esteja vazio ele mostrara outros quadradros vazios.
const field = document.getElementById("field")
let rowLegth = 10
let zonelegth = 80
let mina = 10 

initializeGame()



// função para iniciar o jogo
function initializeGame(){
    // criação do campo minado com as zonas(quadrados)
    for(i = 0; i < zonelegth; i++){
     let zone = document.createElement("div");
     zone.className = "zone"
     zone.id = i
     field.appendChild(zone)
    

    }
    // adicionando as minas
    creatMinas ()
    


}

function creatMinas (){
    //  bsuca um numero aleatori e coloca a class mina e o evento para detonar a bomba
    for(i=0; i < mina; i++){
       let randomNumber = Math.round(Math.random() * zonelegth)
       let element = document.getElementById(randomNumber)
       element.className = "mina"
       element.addEventListener("click" , gameOver)
       
    }
}

function gameOver (){
    let minas = document.querySelectorAll("div.mina")
    minas.forEach(element => {
        element.className = "detona"
        
    });



}
