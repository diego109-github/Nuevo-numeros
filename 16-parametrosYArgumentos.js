// declaracion
function sumaYPorcentaje (a,b){
    let c = a+b;
    c *= 10/100;

    function multiplicaNumeros(a,b){
        return a*b;
    }

    return c+multiplicaNumeros(a,b);
}

function saludar(texto = "hola."){
    console.log(texto);
}

function mostrarTexto (texto = "texto por defecto"){
    console.log(texto);
}

// ejecucion 
saludar();
saludar("buenos dias");
mostrarTexto();
mostrarTexto("este es un texto dinamico");
