function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById ('txtano')
    var nascn = Number(nasc.value) // transformando os valores digitados em numero
    var msg = window.document.getElementById ('msg')    
    var idade = ano - nascn
    var sexo = window.document.getElementsByName('radsex')
    
    if(nascn.length == 0 || nascn>ano || !sexo[0].checked && !sexo[1].checked || nascn<0){
    window.alert(`Insira valores validos`)
         } else {
         if (idade >0 && idade<18 && sexo[0].checked){
            img.src = 'hcrianca.png'
            msg.innerHTML = `A idade do homem eh ${idade}`
        } else if (idade >=18 && idade<60 && sexo[0].checked){
            img.src = 'hjovem.png'
            msg.innerHTML = `A idade do homem eh ${idade}`
        } else if (idade >= 60 && sexo[0].checked){
            img.src = 'hvelho.png'
            msg.innerHTML = `A idade do homem eh ${idade}`
        } else if (idade>0 && idade<18 && sexo[1].checked){
            img.src = 'mcrianca.png'
            msg.innerHTML = `A idade da mulher eh ${idade}`
        } else if (idade >=18 && idade<60 && sexo[1].checked){
            img.src = 'mjovem.png'
            msg.innerHTML = `A idade da mulher eh ${idade}`
        } else if (idade >= 60 && sexo[1].checked){
            img.src = 'mvelha.png'
            msg.innerHTML = `A idade da mulher eh ${idade}`
            }
        }
}
    