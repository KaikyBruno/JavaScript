function tabuada () {
    let textn1 = document.getElementById ("n1")
    let resp = document.getElementById ('resp')
    
    
    
    if (textn1.value.length == 0) {
        window.alert ("[ERRO] Digite um número.")
    } else {
        resp.style.display = 'block'
        
        let n1 = Number(textn1.value)
        resp.innerHTML = ''
        for (let cont = 0; cont <= 10; cont++){
            let elemento = document.createElement ('option')
            elemento.text = `${n1} x ${cont} = ${n1*cont}`
            resp.appendChild (elemento)
        }
    }
}