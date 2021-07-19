var humor = "bravo";


function muda_humor(){
    if (humor == "bravo"){
        const imagem1= document.getElementById("imagem_bravo");
        const texto1= document.getElementById("texto_bravo");
        imagem1.classList.remove("visivel");
        imagem1.classList.add("escondido");
        texto1.classList.remove("visivel");
        texto1.classList.add("escondido");
        const imagem2= document.getElementById("imagem_surpreso");
        const texto2= document.getElementById("texto_surpreso");
        imagem2.classList.remove("escondido");
        imagem2.classList.add("visivel");
        texto2.classList.remove("escondido");
        texto2.classList.add("visivel");
        humor= "surpreso";
    }
    else if(humor=="surpreso"){
        const imagem1= document.getElementById("imagem_surpreso");
        const texto1= document.getElementById("texto_surpreso");
        imagem1.classList.remove("visivel");
        imagem1.classList.add("escondido");
        texto1.classList.remove("visivel");
        texto1.classList.add("escondido");
        const imagem2= document.getElementById("imagem_feliz");
        const texto2= document.getElementById("texto_feliz");
        imagem2.classList.remove("escondido");
        imagem2.classList.add("visivel");
        texto2.classList.remove("escondido");
        texto2.classList.add("visivel");
        humor ="feliz";
    }
    else if(humor=="feliz"){
        const imagem1= document.getElementById("imagem_feliz");
        const texto1= document.getElementById("texto_feliz");
        imagem1.classList.remove("visivel");
        imagem1.classList.add("escondido");
        texto1.classList.remove("visivel");
        texto1.classList.add("escondido");
        const imagem2= document.getElementById("imagem_desconfiado");
        const texto2= document.getElementById("texto_desconfiado");
        imagem2.classList.remove("escondido");
        imagem2.classList.add("visivel");
        texto2.classList.remove("escondido");
        texto2.classList.add("visivel");
        humor ="desconfiado";
    }
    else{
        const imagem1= document.getElementById("imagem_desconfiado");
        const texto1= document.getElementById("texto_desconfiado");
        imagem1.classList.remove("visivel");
        imagem1.classList.add("escondido");
        texto1.classList.remove("visivel");
        texto1.classList.add("escondido");
        const imagem2= document.getElementById("imagem_bravo");
        const texto2= document.getElementById("texto_bravo");
        imagem2.classList.remove("escondido");
        imagem2.classList.add("visivel");
        texto2.classList.remove("escondido");
        texto2.classList.add("visivel");
        humor ="bravo";
    
    }
}

