function fatorial(n) {
    let fatorial = 1
    for ( let cont = n; cont > 1; cont--) {
        fatorial *= cont
    }
    return fatorial
    
}
console.log (fatorial(5))