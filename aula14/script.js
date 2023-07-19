function contar () {
    let inicio = document.getElementById ('nincio')
    let fim  = document.getElementById ('nfim')
    let passo = document.getElementById ('npasso')
    let resp = document.getElementById ('resp')

    if (inicio.value.length == 0  || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('{ERRO} Faltam dados')
    } else {
        resp.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `${c}, `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += `${c}, `
            }
        }
        
    }
}