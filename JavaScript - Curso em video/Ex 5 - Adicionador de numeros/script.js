let c = 0
let num = []


function adicionar(){


    c += 1
    let nd = window.document.getElementById('txtn')
    let tab = window.document.getElementById('tabela')
    if ((Number(nd.value)) > 100 || (Number(nd.value)) <=0){
      window.alert("Insira um numero valido")
    } else if (nd.value.length == 0){
        window.alert("Digite algum numero para adicionar!")   
    } else if(num.indexOf(Number(nd.value)) !=-1) {
          window.alert("Numero repetido!")
          } else {
            finalizou = false
            len.innerHTML = ``
            maior.innerHTML = ``
            menor.innerHTML = ``
            soma.innerHTML = ``
            med.innerHTML = ``
            num.push(Number(nd.value))
            let item = document.createElement('option')
            item.text = `O valor ${num[num.length-1]} foi adicionado.`
            item.value = `item${c}`
            tab.add(item)
            
          }
}

function finalizar(){
  if (num.length == 0){
    window.alert ("Insira algum valor para adicionar a lista")
  } else{
    let maiorNumero = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maiorNumero) {
          maiorNumero = num[i];
        }
      }
    
    let menorNumero = num[0];
    for (let i = 0; i < num.length; i++) {
          if (num[i] < menorNumero) {
            menorNumero = num[i];
          }
        }

    let som = 0
    for (let i = 0; i < num.length; i++) {
        som = som + num[i]
      }
    
    let media = som/num.length
    
        len.innerHTML = `Foram inseridos ${num.length} numeros`
        maior.innerHTML = `O maior numero e  ${maiorNumero} `
        menor.innerHTML = `O menor numero e ${menorNumero} `
        soma.innerHTML = `A soma dos numeros e ${som}`
        med.innerHTML = `A media dos numeros e ${media}` 
}
}