let n1 = [ 2,3 ,6 ]


console.log (`O vetor tem ${n1.length} posições`)
console.log (`O vetor tem os números ${n1}`)
console.log (`O vetor em ordem decrecente fica ${n1.sort()}`)
let pos = n1.indexOF(6)
console.log (`O valor 6 está na ${pos}`)

/*for (let cont = 0; cont < n1.length; cont++) {
    console.log (`A posição ${cont} tem o valor ${n1[cont]}`)
}*/

for (let cont in n1){
    console.log (`A posição ${cont} tem o valor ${n1[cont]}`)
}