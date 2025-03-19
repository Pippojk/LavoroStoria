function goTo(n){
    if(n === 1){
         console.log("1");
        window.location.replace("pdf/origini.pdf");
       
        
    }else if(n === 2){
        console.log("2");
        window.location.replace("pdf/societa.pdf");
        
        
    }else{
        console.log("3");
        window.location.replace("pdf/conquistadores.pdf");
        
    }
}


function cambia(n){
    const img = document.querySelector(".IM img");
    const h3 = document.querySelector(".IM h3");

    if(n == 1){
        img.style.display="none";
        h3.style.display="block";
    }else{
        h3.style.display = "none";
        img.style.display="block";
    }
    
}