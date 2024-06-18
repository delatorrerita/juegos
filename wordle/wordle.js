console.clear();

const totalPalabras = diccionario.length;
console.log("Total palabras", totalPalabras);

const NUMERO_RANDOM = Math.floor((Math.random() * totalPalabras));
console.log("Numero Random", NUMERO_RANDOM);

const palabraRandom = diccionario[NUMERO_RANDOM];
console.log("Adivinar", palabraRandom);
let enlace = "https://dle.rae.es/"+ palabraRandom;

let intento = 1;
let numLetra = 1;

console.log("Inicio Num Letra", numLetra);

function enviaLetra(letra) {
   console.log("Letra", letra);
   
   let item = "P" + intento + "L" + numLetra; //P1L1 ejemplo

   document.getElementById(item).innerHTML = letra;
   numLetra++; 
   numLetra = (numLetra > 5) ? 5 : numLetra; //condicional ternario

   
   //console.log("Función enviaLetra | Num Letra", numLetra);
}



function borraLetra() {
   let item = "P" + intento + "L" + numLetra;
   let queLetraBorrar = document.getElementById(item)

   if (queLetraBorrar.innerHTML == "&nbsp;") {
      
      numLetra--;
      numLetra = (numLetra == 0) ? 1 : numLetra;
      console.log("Letra vacia | Num Letra = ", numLetra);

      item = "P" + intento + "L" + numLetra;
      document.getElementById(item).innerHTML = "&nbsp;";

   } else {

      queLetraBorrar.innerHTML = "&nbsp;"
      numLetra = (numLetra > 1) ? numLetra-- : 1;
      console.log("Letra llena | Num Letra", numLetra);

   }
}

function revisaPalabra() {      
      let palabra = "";
      let i, item, letra; 

      if (numLetra !=5) {
         alert("Faltan letras en la palabra");
      } else {
         item = "P" + intento;
         document.getElementById(item).style.color = "green";

         for (i = 1; i < 6; i++) {
            item = "P" + intento + "L" + i;
            letra = document.getElementById(item).innerHTML;

            if (palabraRandom.charAt(i-1) == letra) {
               document.getElementById(item).style.backgroundColor = "lightgreen";
            } else if (palabraRandom.includes(letra)) {
               document.getElementById(item).style.backgroundColor = "beige";
            } else {
               document.getElementById(item).style.backgroundColor = "lightgrey";
               document.getElementById("btn"+letra).style.backgroundColor ="grey";
            }            
            palabra += letra;
         }
         console.log("Palabra" + intento, palabra);
         
         intento++;
         numLetra = 1;        
         if (intento == 7 || palabra==palabraRandom) {           
            document.getElementById("teclas").style.display="none";
            document.getElementById("mensaje").innerHTML = "La palabra es <b>" + palabraRandom + "</b>";
            let elemento = document.getElementById("vinculo");
            console.log("Nuevo vínculo", vinculo);
            document.getElementById("vinculo").href = enlace;

         }
      } 
}