
if (document.URL.includes("index.html") || document.URL.includes("historia.html")) {

    /* Lógica correspondiente a la página index.html e historia.html */
    let video = document.querySelector('video');

    for (let i = 0; i < video.tim; i++) {
        console.log(video.currentTime)

    }

    function desplegar() {
        let submenu = document.querySelector(".tema");
        submenu.classList.toggle("tema-block")
    }
    function desptemaDia() {
        let body = document.querySelector("body");
        body.classList.remove()
        body.classList.add("cuerpoPrinc")
    }
    function temaNoche() {
        let body = document.querySelector("body");
        body.classList.remove()
        body.classList.add("cuerpo_osc")
    }

    function onClickPlay() {

        video.play()
    }

    function onClickPausa() {
        video.pause();
        flag = false;
    }    

    setTimeout(() => { document.getElementById('DurVideo').innerHTML = ` Duracion video : ${ video.duration.toFixed(2) }` }, 1000);    

} else {

    /* Lógica correspondiente a la página Juego.html */
    let menu = document.querySelector('.menu');
    let flag = false;
    let contador = 0;

    function iniciar() {
        var imagenes = document.querySelectorAll('#cajaimagenes img');
        soltar = document.getElementById('soltarcaja');
        soltar2 = document.getElementById('soltarcaja2');
        soltar3 = document.getElementById('soltarcaja3');

        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener('dragstart', arrastrar, false);
        }

        /*Revisar si se puede pasar al html - NO PUDE PORQUE NO ME RECONOCE EL EVENTO, ASI QUE LO HAGO
        POR JS DIRECTAMENTE*/
        soltar.addEventListener('dragenter', function (e) {
            e.preventDefault();
        }, false);


        /*function dragEnter(event) {
            event.preventDefault();
        }*/

        soltar.addEventListener('dragover', function (e) {
            e.preventDefault();
        }, false);


        soltar.addEventListener('drop', soltado, false);


        soltar2.addEventListener('dragenter', function (e) {
            e.preventDefault();
        }, false);
        soltar2.addEventListener('dragover', function (e) {
            e.preventDefault();
        }, false);
        soltar2.addEventListener('drop', soltado, false);


        soltar3.addEventListener('dragenter', function (e) {
            e.preventDefault();
        }, false);
        soltar3.addEventListener('dragover', function (e) {
            e.preventDefault();
        }, false);
        soltar3.addEventListener('drop', soltado, false);

    }
    function arrastrar(e) {
        elemento = e.target;
        e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    }

    async function soltado(e) {
        e.preventDefault();
        console.log(e);
        let id = e.dataTransfer.getData('Text');        
        let imagen = document.getElementById(id);        
        imagen.style.display = 'none';
        e.target.innerHTML = '<img src="' + imagen.src + '" height="400px" width="270px">';
        
        contador++;

    }
    function onReiniciar() {
        window.location.reload();
    }
    iniciar()
}