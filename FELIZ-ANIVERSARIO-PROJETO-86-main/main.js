

var canvas = new fabric.Canvas('canvas');
var x= document.getElementById("musica");


function novaImagem(){

    fabric.Image.fromURL("BirthdayImage.jpg",function(img){
    imagem = img;
    imagem.scaleToWidth(700);
    imagem.scaleToHeight(500);
    imagem.set({
        top:0,
        left:0
    });
    canvas.add(imagem);

    })

	
}

function playSound(){
    //é aqui que coloca o som para tocar a musica
    x.play();
}
