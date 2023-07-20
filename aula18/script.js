let num = []


function numeros () {
    let textnum = document.getElementById ('num')
    let resp = document.getElementById('resp')
    let finalizar = document.getElementById ('finalizar')
   
    
    if (textnum.value.length == 0 ){
        window.alert ("[ERRO] Digite um valor")
    } else if(textnum.value < 1 || textnum.value > 100) {
        window.alert ("[ERRO] Digite um número entre 1 a 100")
    } else if (num == textnum.value) {
        window.alert ("[ERRO] Esse número já existe na lista")
    } else {
        resp.style.display = 'block'
        finalizar.style.display = 'block'
        num.push(Number(textnum.value))
        let elemento = document.createElement ('option')
        elemento.text = `valor ${textnum.value} adicionado`
        resp.appendChild (elemento)
        resposta.innerHTML = ''
        textnum.value = ''
        textnum.focus ()
    } 
}

function resultado () {
    let resposta = document.getElementById ('resposta')
    let totalnum = num.length
    let maior = num [0]
    let menor = num [0]
    let soma = 0
    for (let pos in num) {
        soma += num[pos]
        if (num[pos] > maior) {
            maior = num [pos]
        } else {
            menor = num[pos]
        }
    }
    let media = soma / totalnum


    resposta.innerHTML = ''
    resposta.innerHTML += `<p>Ao todo, temos ${totalnum} números cadastrados.</p>`
    resposta.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
    resposta.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
    resposta.innerHTML += `<p>A soma entre os valores é ${soma}.</p>`
    resposta.innerHTML += `<p>A média entre os valores é ${media}.</p>`
    
}