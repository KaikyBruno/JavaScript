function calculedelta () {
    var textdelta = window.document.getElementById ("delta")
    var textbaskaramenos = window.document.getElementById ("baskaramenos")
    var textbaskaramais = window.document.getElementById ("baskaramais")
    var textna = window.document.getElementById ("a")
    var textnb = window.document.getElementById ("b")
    var textnc = window.document.getElementById ("c")
    var na = Number((textna.value))
    var nb = Number((textnb.value))
    var nc = Number((textnc.value))
    var respdelta = (nb**2) -4 * na * nc
    var raiz = Math.sqrt (respdelta) 
    var respbaskaramenos = (-nb - raiz) / (2 * na)
    var respbaskaramais = -(nb + raiz) / (2 * na)

    if (respdelta = 0) {
        alert = `[ERRO!!!]  O seu delta é negativo`
    } else  {
        textdelta.innerHTML = `O seu delta foi: ${respdelta}`
        textbaskaramenos.innerHTML = `A sua raiz de - foi: ${respbaskaramenos}`
        textbaskaramais.innerHTML = `A sua raiz de + foi: ${respbaskaramais}`
    }
}