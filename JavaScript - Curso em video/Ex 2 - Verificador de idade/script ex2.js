function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade <18){
                //Crianca
                img.setAttribute('src','hcrianca.png')
            } else if (idade<60){
                //jovem
                img.setAttribute('src','hjovem.png')
            } else {
                //idoso
                img.setAttribute('src','hvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade <18){
                //Crianca
                img.setAttribute('src','mcrianca.png')
            } else if (idade<60){
                //jovem
                img.setAttribute('src','mjovem.png')
            } else {
                //idoso
                img.setAttribute('src','mvelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero ${genero} com idade ${idade} de anos`
        res.appendChild(img)
    }
}
    