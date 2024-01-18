function carregar (){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora sao ${hora}:${min}:${seg}.`
    if (hora >=0 && hora <12){
        img.src = 'dia.png'
        document.body.style.background = '#FED87D'
    } else if (hora >=12 && hora <=18){
        img.src = 'tarde.png'
        document.body.style.background = '#FF9702'
        //
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#042040'
    }


}


