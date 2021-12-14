
var numNoches,numParking = 0;
document.getElementById("idTipo").addEventListener("change",asignarValores);
document.getElementById("idTamano").addEventListener("change",asignarValores);
document.getElementById("idSpa").addEventListener("click",asignarValores);
document.getElementById("idNumNoches").addEventListener("keyup",asignarValores);
document.getElementById("idNumParking").addEventListener("keyup",asignarValores);

function asignarValores () {
    tipo = document.getElementById("idTipo").value;
    uso = document.getElementById("idTamano").value;
    spa=document.getElementById("idSpa").checked;
    numNoches=parseFloat(document.getElementById("idNumNoches").value);
    numParking=parseFloat(document.getElementById("idNumParking").value);
    calcularPrecio();
}

var precio = {
   Standar: 100,
   JuniorSuite:120,
   Suite:150,
}

function calcularPrecio (){
    numNoches = (isNaN(numNoches))?0:numNoches;
    numParking = (isNaN(numParking))?0:numNoches;
   
    if (spa){
        precioS = 20;
        mensajeSpa1 = " con Spa";
        mensajeSpa2 = 10*numNoches + "Spa";
        nocheSpa= numNoches;
    }else{
        precioS = nocheSpa = 0; 
        mensajeSpa1 = " sin Spa";
        mensajeSpa2 = "";
    }
    switch (uso){
       case "individual":
            precionoche = ((precio[tipo] + precioS) - ((precio[tipo] + precioS)*0.25));
            precioT = ((precio[tipo] + precioS) - ((precio[tipo] + precioS)*0.25)) * numNoches + (10 * numParking) ;
            mensajeuso=", al 75% por uso individual: ";
            break;
        case "doble":
            precionoche = (precio[tipo] + precioS);
            precioT = (precio[tipo] + precioS) * numNoches + (10 * numParking) ;
            mensajeuso=": ";
            break;
        case "triple":
            precionoche = ((precio[tipo] + precioS) + ((precio[tipo] + precioS)*0.25));
            precioT = ((precio[tipo] + precioS) + ((precio[tipo] + precioS)*0.25)) * numNoches + (10 * numParking) ;
            mensajeuso=", al 125% por uso individual: ";
            break;
   }
   precioT = (numNoches==0)?0:precioT;
   document.getElementById("idPrecio").value =precioT + "€";
   document.getElementById("idPrecioTexto").innerHTML = numNoches +" " + "noches" + "x" +" "+ "Hab."+tipo+ mensajeSpa1 +" y "+ numParking + " noches de parking. En este caso la tarifa por noche sería: "+(precio[tipo])+"€ noche " + "+ " + nocheSpa*10 +" € spa" + mensajeuso + precionoche + "€/noche x " +numNoches+"noches "+ "(10€ parking x " +numParking +" noches) = " + precioT; 
}



