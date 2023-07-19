function somar () {
    var textnome = window.document.getElementById ("nome")
    var nome = (textnome.value)
    var resp = window.document.getElementById ("resp")
    var text1 = window.document.getElementById ("n1")
    var text2 = window.document.getElementById ("n2")
    var n1 = Number((text1.value))
    var n2 = Number((text2.value))
    var soma = n1 + n2
    resp.innerHTML = `${nome} sua soma deu ${soma}`
}
function diminuir () {
    var textnome = window.document.getElementById ("nome")
    var nome = (textnome.value)
    var resp = window.document.getElementById ("resp")
    var text1 = window.document.getElementById ("n1")
    var text2 = window.document.getElementById ("n2")
    var n1 = Number((text1.value))
    var n2 = Number((text2.value))
    var diminuir = n1 - n2
    resp.innerHTML = `${nome} sua substração deu ${diminuir}`
}
function multiplicação () {
    var textnome = window.document.getElementById ("nome")
    var nome = (textnome.value)
    var resp = window.document.getElementById ("resp")
    var text1 = window.document.getElementById ("n1")
    var text2 = window.document.getElementById ("n2")
    var n1 = Number((text1.value))
    var n2 = Number((text2.value))
    var multiplicação = n1 * n2
    resp.innerHTML = `${nome} sua multiplicação deu ${multiplicação}`

}
function divisão () {
    var textnome = window.document.getElementById ("nome")
    var nome = (textnome.value)
    var resp = window.document.getElementById ("resp")
    var text1 = window.document.getElementById ("n1")
    var text2 = window.document.getElementById ("n2")
    var n1 = Number((text1.value))
    var n2 = Number((text2.value))
    var divisão = n1 / n2
    resp.innerHTML = `${nome} sua divisão deu ${divisão}`
    
}