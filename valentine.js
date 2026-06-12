
let count = 0;
let aux = 0, aux2 = 0;
let musica = new Audio("sounds/QueSorteANossa.mp3");

document.querySelector(".but").addEventListener("click", function() {
    count++;
    if (count === 1)
    {
        musica.play();
    }
    else if(count > 1)
    {
        musica.pause();
        count = 0;
    }
    
})

document.querySelector(".but_letter1").addEventListener("click", function() {

    
    aux++;
    if (aux === 1)
    {
        document.querySelector(".but_letter1").classList.add('but_letter2');
        document.querySelector(".janela").style.display = "block";
        
    }
    else if(aux > 1)
    {
        document.querySelector(".but_letter1").classList.remove('but_letter2');
        document.querySelector(".janela").style.display = "none";
        aux = 0;
    }
})

document.querySelector(".but_letter2").addEventListener("click", function() {
 
        document.querySelector(".janela").style.display = "none";
        document.querySelector(".but_letter1").classList.remove('but_letter2');
        aux = 0;
        
})

