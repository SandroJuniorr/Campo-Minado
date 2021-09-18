// logica campo minado
// ao clicar em um quadradro verifica-se se é uma mina ou se a mina nos oito quadrados que o cercam.
// 1 - caso aja minas perde-se o jogo, 
// 2 - se hoiver apenas ao redor o quadradro tera o numero que o cercam , 
// 3 - caso esteja vazio ele mostrara outros quadradros vazios.
const field = document.getElementById("field")

function initializeGame(){
    let zonelegth = 80
    for(i = 0; i < zonelegth; i++){
     let zone = document.createElement("div");
     zone.className = "zone"
     field.appendChild(zone)



    }

}
initializeGame()