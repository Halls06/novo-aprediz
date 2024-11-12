function carregar(){
    var msg = window.document.getElementById('msg')
    var igm = window.document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora São ${hora} : ${min} Horas.`
    if (hora >= 0 && hora < 12){
        igm.src = 'manha.png'
        document.body.style.background = '#aa916e'
        txt.innerText = 'Bom Dia'
        
    }  else if (hora === 16 && min >= 20 && min <= 40) {
       
        igm.src = 'weed.png';
        document.body.style.background = '#016231';
        txt.innerText = 'Hora Especial';
    }
     
    
    else if (hora >= 12 && hora <= 18){
        igm.src = 'tarde.png'
        document.body.style.background = '#f1b07a'
        txt.innerText = 'Boa Tarde'
    }

    else{
        igm.src = 'noite.png'
        document.body.style.background = '#224671'
        txt.innerHTML = 'Boa Noite'
    }

}
