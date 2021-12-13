


document.getElementById("idPrimer-numero").addEventListener("keyup",asignarValorUno);

function asignarValorUno () {
    a = parseFloat(document.getElementById("idPrimer-numero").value); 
}

document.getElementById("idSuma").addEventListener("click",()=>calcular("suma"))
document.getElementById("idResta").addEventListener("click",()=>calcular('resta'))
document.getElementById("idMultiplicacion").addEventListener("click",()=>calcular('multiplicacion'))
document.getElementById("idDivision").addEventListener("click",()=>calcular('division'))
document.getElementById("IdIgual").addEventListener("click",()=>calcular('mostrar'))

var ResultadoOP = 0;
var primerav =1;
var op1,op2;
var symbolo,sResultado,msResultado;

var calcular = (operacion) =>{
     op1 = op2;
     op2 = operacion;
     if (operacion == "mostrar"){
         a=0;
     }
    if (isNaNI(a)) {
        document.getElementById("idResultado").value = 'Err';
    }else{
    calculara (op1,a);
    }    
}

var calculara = (operaciona,numa) =>{
console.log(a);
   switch (operaciona)
        {
    case 'suma':
         ResultadoOP = ResultadoOP + numa;
         symbolo = "+";
         break;
    case "resta":  
         ResultadoOP = ResultadoOP - numa;
         symbolo = "-";
         break;
    case "multiplicacion": 
        ResultadoOP = numa * ResultadoOP;
        symbolo = "*";
         break;
    case "division":  
         ResultadoOP=ResultadoOP/numa;
         symbolo = "/";
         break;
    case "mostrar":
        document.getElementById("idResultado").value = ResultadoOP;
        msResultado ="";
        primerav =1;
        ResultadoOP=0;
        a = 0;
        }

   sResultado = parseInt(ResultadoOP);
   msResultado = msResultado + symbolo + a ;
    if (primerav){
        console.log("primerea");
        console.log(a);
        ResultadoOP = a;
        primerav = 0;
        msResultado = a;
        console.log(msResultado);
    }
   document.getElementById("idPrimer-numero").value = "";
   document.getElementById("idResultado").value =msResultado + "=" +ResultadoOP;
}


var isNaNI = (uno) => ( isNaN(uno))?true:false;








