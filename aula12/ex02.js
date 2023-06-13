var agora = new Date ()
var hora = agora.getHours ()
console.log (`Agr são ${hora} horas`)
if (hora >= 12 && hora <= 18 ) {
    console.log ('Boa Tarde')
} else if (hora > 18 && hora <= 24) {
    console.log ('Boa Noite')
} else if (hora <= 4) {
    console.log ('Já está de Madrugada, hora de dormir')
} else {
    console.log ('Bom dia')
}