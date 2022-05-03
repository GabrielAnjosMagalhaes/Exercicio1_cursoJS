
function carregar(){
var mensagem = document.getElementById("mensagem")
var imagem = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var frase = document.getElementById("frase")


mensagem.innerHTML=`Agora são ${hora} horas.`



if (hora>=5 && hora<=12){
//dia
imagem.src = `img/manha.jpg`
document.body.style.backgroundColor = "#107aa3ec"
frase.innerHTML="Bom dia!"
}else if(hora>12 && hora<=18){
//tarde
imagem.src = `img/tarde.jpg`
document.body.style.backgroundColor= "#974610ec"
frase.innerHTML="Boa tarde!"
}else if(hora>18 && hora<=23){
//noite 
console.log("Boa noite")
imagem.src = `img/noite.jpg`
document.body.style.backgroundColor= "#333333"
frase.innerHTML="Boa noite!"
}else{
//madrugada
imagem.src = `img/madrugada.jpg`
document.body.style.backgroundColor ="black"
frase.innerHTML = "Boa madrugada e aproveite seu café!"

}
}