
var primerav =1;
var ResultadoOP = 0;
document.getElementById("idPrimer-numero").addEventListener("keyup",asignarValorUno);

function asignarValorUno () {
    if (primerav){
    a = parseFloat(document.getElementById("idPrimer-numero").value);
    }else{
    b = parseFloat(document.getElementById("idPrimer-numero").value);
    }
}

document.getElementById("idSuma").addEventListener("click",()=>calcular("suma"))
document.getElementById("idResta").addEventListener("click",()=>calcular('resta'))
document.getElementById("idMultiplicacion").addEventListener("click",()=>calcular('multiplicacion'))
document.getElementById("idDivision").addEventListener("click",()=>calcular('division'))
document.getElementById("IdIgual").addEventListener("click",()=>calcular('mostrar'))

var op1,op2;
var symbolo,sResultado,msResultado;

var calcular = (operacion) =>{
    document.getElementById("idPrimer-numero").value = "";
    opeeje = op1;
    op1 = operacion;
if (primerav == 1){
    display (false);    
    }else{  calculara (opeeje,b); }  
}

var calculara = (operaciona,numa) =>{
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
        }
   if (op1 == "mostrar"){ 
    display(true); 
   }else{
   display(false);
   }
}

var display = (rst) =>{
    if (primerav){
        document.getElementById("idResultado").value =a;
        ResultadoOP = msResultado = a;
        primerav =0;
        }else{
            if(rst==true){
                a = b = opeeje = op1 = msResultado="";
                document.getElementById("idResultado").value =ResultadoOP;
                ResultadoOP="";
                primerav =1;
            }else{
                msResultado= msResultado +symbolo +b;
                document.getElementById("idResultado").value =msResultado + "=" + ResultadoOP;
            }
        }
}
var isNaNI = (uno) => ( isNaN(uno))?true:false;








