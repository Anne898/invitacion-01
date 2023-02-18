let sound = true;
let fondo = document.getElementById("MusicaFondo");


function MusicaFondo() {
    fondo.src = "images/cancion.mp3";

    if (sound) {
        fondo.volume = 0.7;
        fondo.play();
        sound = false;

    }

    else {

        fondo.pause();
        sound = true;


    }

}
