// FUNDO DO JOGO
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var criarMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criarMoscaTempo = 1500
}
else if(nivel === 'dificil'){
    criarMoscaTempo = 1000
}
else if (nivel === 'chucknorris'){
    criarMoscaTempo = 750
}


function ajustaPalco(){
   altura = window.innerHeight
   largura = window.innerWidth

    console.log(altura, largura)
}

    //POSIÇÕES ALEATORIAS

ajustaPalco()
    var cronometro = setInterval(function()
    {
        tempo -=1
        if(tempo < 0)
        {
           clearInterval(cronometro)
           clearInterval(criaMosca)
           window.location.href ='win.html'
        }
        else{
        document.getElementById('cronometro').innerHTML = tempo
    }} , 1000
    )

    function posicaoRandomica(){
    // MOSCAS
   var posicaoX = Math.floor(Math.random()* largura) - 90
   var posicaoY = Math.floor(Math.random()* altura) - 90

        // REMOVER A MOSCA ANTERIOR (CASO EXISTA)
        if(document.getElementById('mosca')){
    document.getElementById('mosca').remove()  
        
        if(vidas > 3){
            window.location.href = 'gameover.html'
        }
            else{
            document.getElementById('v' + vidas).src = "../img/coracao_vazio.png"
            vidas++
        }
}

   posicaoX = posicaoX < 0 ? 0 : posicaoX
   posicaoY = posicaoY <0 ? 0 : posicaoY
    console.log (posicaoX, posicaoY)
    //CRIANDO ELEMENTOS HTML
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    document.body.appendChild(mosca)
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX +'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }
    

}

    // TAMANHOS ALEATORIOS

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
        return 'mosca1'
        case 1:
        return 'mosca2'
        case 2:
        return 'mosca3'
    }

}

        // LADOS ALEATORIOS

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
        return 'ladoA'
        case 1:
        return 'ladoB'
    }

}
