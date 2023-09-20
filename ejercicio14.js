let miNumero = "17";

let edad = Numero(miNumero);
console.log( edad );

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if( edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}
if( isNaN(edad)){
    console.log( "No es un número" );
}
else{
    let resultado = (edad >= 18)? "Pueded votar" : "Muy joven para votar";
    console.log( resultado );
}
