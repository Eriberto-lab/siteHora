

function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    var corDeFundo = document.getElementsByTagName('body')
    

    //logica aqui pra baixo

    if(hora >= 0 && hora<= 12){
// dia
msg.innerHTML = ` Bom dia! Agora são ${hora} horas e ${minutos}.`
img.src = 'manha.png'
document.body.style.background ='#F4D03F'
    }
    else if (hora >=12 && hora < 18){
        // tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas  e ${minutos}min.`
        img.src = 'tarde.png'
        document.body.style.background ='#DC7633'
    }
    else{
        //noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas  e ${minutos}.`
        img.src = 'noite.png'
        document.body.style.background ='#5B2C6F'
    }

}
