const nombre = "diego";
const paisNacimiento = "colombia";
const paisDomicilio = "chile";
const deporteFavorito = "futbol";

const texto = "mi nombre es:"+ nombre + ", naci en " + paisNacimiento + ".\n"
            + "actualmente vivo en " + paisDomicilio + ".\n"
            + "mi deporte favorito es el " + deporteFavorito ;

const textoTemplate = ` mi nombre es ${nombre}, naci en ${paisNacimiento}.
actualmete vivo en ${paisDomicilio}.
mi deporte favorito es el ${deporteFavorito} `;
            
console.log(texto);
console.log("***********");
console.log(textoTemplate);