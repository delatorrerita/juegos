const PALABRA = document.getElementById('palabra');
const ERROR = document.getElementById('error');
const EDAT = document.getElementById('edad');
let palabraRandom = "";
let palabraAdivinada = "";
let intentos = 0;
let error = 0;

let abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

const facil = ['pelota','manzana','juegos','camion','rueda'];
arrayNom = 'facil';
let array = eval(arrayNom);
console.log(array)


const medio = ['esdrujula','cientifico','matematicas','extraterrestre','psicologia'];
const alto =  ['pintor','ahorcado','yunque','pizarra','framework'];

function pintarErrores() {
    ERROR.innerHTML = error + "/" + intentos ;
}

function pintarPalabra() {
    PALABRA.innerHTML = palabraAdivinada;
}

function empezar(){
    if(EDAT.value != ''){
        document.getElementById('btn-1').setAttribute('disabled','disabled');
        pintarBtn();
        let dif = EDAT.value;
        if(dif >= 0 && dif <=14){ 
            document.getElementById('dif').innerHTML = 'Fácil';
            intentos = 10;
            palabraRandom = facil[Math.floor(Math.random()*facil.length)].toUpperCase();
        }
        else if(dif >= 15 && dif <=55){
            document.getElementById('dif').innerHTML = 'Medio';
            intentos = 7;     
            palabraRandom = medio[Math.floor(Math.random()*medio.length)].toUpperCase();
        }
        else if(dif >=56){
            document.getElementById('dif').innerHTML = 'Extra'; 
            intentos = 5;    
            palabraRandom = alto[Math.floor(Math.random()*alto.length)].toUpperCase();
        }
        palabraAdivinada = "_".repeat(palabraRandom.length);

        console.log('Palabra Random', palabraRandom);

        pintarErrores();
        pintarPalabra();
    }  
}
function pintarBtn(){
    let letras = document.getElementById('letras');
    for(let letra of abc){
        letras.innerHTML += '<button class="myletra" onclick="pulsar(\''+letra+'\')" >'+letra+'</button>';    
    }
}

function pulsar(valor){
    let letra = valor;
    let palabraArray = [];

    console.log('letra pulsada ', letra);
    if (palabraRandom.includes(letra)) {
        console.log('La letra existe');

        palabraArray = palabraAdivinada.split('');

        for (i = 0; i < palabraRandom.length; i++) {
            if (palabraRandom.charAt(i)===letra) {
                palabraArray[i]=letra;                
            }
            console.log(i, palabraArray)
        }

        palabraAdivinada = palabraArray.join('');
        pintarPalabra();

    } else {
        error++;
        imagen.src = "./img/a"+error+".jpg"
        pintarErrores();
    }
    if (palabraRandom===palabraAdivinada) {
        alert("Ganaste!");
    } else if (error === intentos) {
        alert("Perdiste");
        palabra.innerHTML = 'La palabra era ' + palabraRandom;
    }
}

