function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector('#cabeca');
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos" || valor=="Gemeos" || valor=="gemêos" || valor=="Gemêos"){
        texto.innerHTML = "Gemeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="escorpiao" || valor=="Escorpiao" || valor=="escorpião" || valor=="Escorpião"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="peixes" || valor=="Peixes" || valor=="peixe" || valor=="Peixe"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="aquario" || valor=="Aquario" || valor=="aquário" || valor=="Aquário"){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    } 

    else if(valor=="aries"|| valor=="Aries" || valor=="áries" || valor=="Áries"){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
      
    else if(valor=="cancer" || valor=="Cancer" || valor=="cancêr" || valor=="Cancêr"){
        texto.innerHTML = "Cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
      
    else if(valor=="capricornio" || valor=="Capricornio" || valor=="capricórnio" || valor=="Capricórnio"){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
      
    else if(valor=="leao" || valor=="Leao" || valor=="leão" || valor=="Leão"){
        texto.innerHTML = "Leao";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
      
    else if(valor=="libra" || valor=="Libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
   
      
    else if(valor=="sagitario" || valor=="Sagitario" || valor=="sagitário" || valor=="Sagitário"){
        texto.innerHTML = "Sagitario";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
    }
      
    else if(valor=="touro" || valor=="Touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="virgem" || valor=="Virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}