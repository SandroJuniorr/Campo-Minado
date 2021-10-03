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
     let gram = document.createElement("div");
     let ground = document.createElement("div");
     zone.className = "zone";
     gram.className = "gram"
     ground.className = "ground"
     ground.id = i;
     zone.appendChild(ground);
     zone.appendChild(gram);
     field.appendChild(zone);
     minafield[i]= 0;
    
    }
    // adicionando as minas
    creatMinas ();
    creatarrays()
    minasnear();
    


}

function creatMinas (){
    //  busca um numero aleatorio e coloca a class mina e o evento para detonar a bomba
    let arr = []
    for(i=0; i < mina; i++){
       
       let randomNumber = Math.round(Math.random() * zonelegth)
       
       if (arr.indexOf(randomNumber) === -1){
       let element = document.getElementById(randomNumber)
       let mina = document.createElement("img")
       let parent = element.parentElement
       mina.src = "./assets/12158bomb_110029.png"
       element.appendChild(mina)
       parent.classList.add("mina")
       parent.addEventListener("click" , gameOver)
       minafield[randomNumber] = -1
    //    console.log(minafield)
    }else{
        i--}
       arr.push(randomNumber)
       
    
    }
}

function gameOver (){
    let minas = document.querySelectorAll("div.mina")
   minas.forEach(element => {
    element.children[1].style.animation = "reveal 500ms forwards"
        
    });



}
//  cria arrays com as zonas das primeira e ultima coluna para depois poder criar metodods de contagem de minas prorprio para elas.
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
// procura as minas que estão proximas
function minasnear() {
    for(i = 0; i < zonelegth; i++) {
        let element = minafield[i];
        let zone = document.getElementById(i)
        let parent = zone.parentElement
        if(element == 0 ){
            
         parent.addEventListener("click" , revelzone) 
         
         if(countminas(i) == 0){
            zone.innerHTML = ""
            }else{
                zone.innerHTML = countminas(i)
            }
          
        


        }else if( element == "L"){
        parent.addEventListener("click" , revelzone) 
         if(countMinasLeft(i) == 0){
         zone.innerHTML = ""
         }else{
             zone.innerHTML = countMinasLeft(i)
         }
          
         
        }else if( element == "R"){
            parent.addEventListener("click" , revelzone) 
            if(countMinasRigth(i) == 0){
                zone.innerHTML = ""
                }else{
                    zone.innerHTML = countMinasRigth(i)
                }
                 
         
         
        
    };
    }
}
//  confere a quantidade de minas proximas
function countminas(i){
    
    let Neighbor1 = (i - (rowLegth + 1))
    let Neighbor2 = (i - (rowLegth ))
    let Neighbor3 = (i - (rowLegth - 1))
    let Neighbor4 = (i - 1)
    let Neighbor5 = (i + 1)
    let Neighbor6 = (i + (rowLegth - 1) )
    let Neighbor7 = (i + (rowLegth ))
    let Neighbor8 = (i + (rowLegth + 1))
    let neighbors = [Neighbor1,Neighbor2,Neighbor3,Neighbor4,Neighbor5,Neighbor6,Neighbor7,Neighbor8]
    let minas = []
        for (let index = 0; index < neighbors.length; index++) {
        let number = null
        let neighbor = minafield[neighbors[index]];
        
        
        if(neighbor == -1){
            number = neighbor 
              
            minas.push(number)
             
        }
        
       
       
    
    }
    return minas.length
        

        
    };

function countMinasLeft(i){
    let Neighbor1 = (i - (rowLegth ))
    let Neighbor2 = (i - (rowLegth - 1))
    let Neighbor3 = (i + 1)
    let Neighbor4 = (i + rowLegth )
    let Neighbor5 = (i + (rowLegth + 1))
    let neighbors = [Neighbor1,Neighbor2,Neighbor3,Neighbor4,Neighbor5]
    let minas = []
    for (let index = 0; index < neighbors.length; index++) {
        let number = null
        let neighbor = minafield[neighbors[index]];
        
        
        if(neighbor == -1){
            number = neighbor 
              
            minas.push(number)
             
        }
        

}
return minas.length
     

}
function countMinasRigth(i){
    let Neighbor1 = (i - (rowLegth + 1))
    let Neighbor2 = (i - rowLegth)
    let Neighbor3 = (i - 1)
    let Neighbor4 = (i + (rowLegth - 1) )
    let Neighbor5 = (i + rowLegth)
    let neighbors = [Neighbor1,Neighbor2,Neighbor3,Neighbor4,Neighbor5]
    let minas = []
    for (let index = 0; index < neighbors.length; index++) {
        let number = null
        let neighbor = minafield[neighbors[index]];
        
        
        if(neighbor == -1){
            number = neighbor 
              
            minas.push(number)
             
        }
        

}
return minas.length
     

}
function revelzone() {

    this.children[1].style.animation = "reveal 500ms forwards"
    
}



