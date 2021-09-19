// logica campo minado
// ao clicar em um quadradro verifica-se se é uma mina ou se a mina nos oito quadrados que o cercam.
// 1 - caso aja minas perde-se o jogo, 
// 2 - se hoiver apenas ao redor o quadradro tera o numero que o cercam , 
// 3 - caso esteja vazio ele mostrara outros quadradros vazios.
const field = document.getElementById("field")
let rowLegth = 10
let zonelegth = 80
let mina = 10 
let minafield = []
let zonesRigth = []
let zonesLefts = []



initializeGame()



// função para iniciar o jogo
function initializeGame(){
    // criação do campo minado com as zonas(quadrados)
    for(i = 0; i < zonelegth; i++){
     let zone = document.createElement("div");
     zone.className = "zone";
     zone.id = i;
     field.appendChild(zone);
     minafield[i]= 0;
    
    }
    // adicionando as minas
    creatMinas ();
    creatarrays()
    minasnear();
    


}

function creatMinas (){
    //  bsuca um numero aleatori e coloca a class mina e o evento para detonar a bomba
    let arr = []
    for(i=0; i < mina; i++){
       
       let randomNumber = Math.round(Math.random() * zonelegth)
       
       if (arr.indexOf(randomNumber) === -1){
       let element = document.getElementById(randomNumber)
       element.classList.add("mina")
       element.addEventListener("click" , gameOver)
       minafield[randomNumber] = -1
       
    }else{
        i--}
       arr.push(randomNumber)
       
    
    }
}

function gameOver (){
    let minas = document.querySelectorAll("div.mina")
    minas.forEach(element => {
       element.className = "detona"
        
    });



}

function creatarrays (){
    let lastzonerow = (rowLegth - 1);
    let lastzone = (zonelegth - 1);
    let lastzoneRigth = (zonelegth - rowLegth)
    for(i = lastzonerow; i <= lastzone; (i = i + rowLegth)){
        zonesRigth.push(i)
        if( minafield[i] !== -1){
            minafield[i] = "R"
            }
    
    }
    for(i = 0; i <= lastzoneRigth; (i = i + rowLegth)){
        zonesLefts.push(i)
        if( minafield[i] !== -1){
        minafield[i]= "L"
        }

    }
    

    

}
function minasnear() {
    minafield.forEach(element => {
        if(element !== -1 && "L" && "R"){

            

        }
        
    });

}


