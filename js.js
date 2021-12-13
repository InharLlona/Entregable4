


document.getElementById("idPrimer-numero").addEventListener("keyup",asignarValorUno);
document.getElementById("idSegundo-numero").addEventListener("keyup",asignarValorDos);

function asignarValorUno () {
    a = parseFloat(document.getElementById("idPrimer-numero").value); 
}
function asignarValorDos () {
    b =  parseFloat(document.getElementById("idSegundo-numero").value);
}

document.getElementById("idSuma").addEventListener("click",()=>suma(a,b))
document.getElementById("idResta").addEventListener("click",()=>resta(a,b))
document.getElementById("idMultiplicacion").addEventListener("click",()=>multiplicacion(a,b))
document.getElementById("idDivision").addEventListener("click",()=>division(a,b))

var suma = (uno,dos) =>  (isNaNI(uno,dos)) ?document.getElementById("idResultado").value = 'Err':document.getElementById("idResultado").value = uno + dos;
var resta = (uno,dos) => (isNaNI(uno,dos)) ?document.getElementById("idResultado").value = 'Err':document.getElementById("idResultado").value = uno - dos;
var multiplicacion = (uno,dos) => (isNaNI(uno,dos)) ?document.getElementById("idResultado").value = 'Err':document.getElementById("idResultado").value = uno * dos;
var division = (uno,dos) =>(isNaNI(uno,dos)) ?document.getElementById("idResultado").value = 'Err':document.getElementById("idResultado").value = uno / dos;

var isNaNI = (uno,dos) => ( isNaN(uno)||isNaN(dos))?true:false;
