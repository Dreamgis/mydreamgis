AOS.init();

// Logo animation
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 2000,
        delay: 500,
        loop: false,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}

// Smooth scrolling
function smoothScrolling (selector) {
    document.querySelectorAll(selector).forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

smoothScrolling('#index a[href^="#"]');

// Add mail fields in register form
let numFields = 0;
$(".addMail").click(function (e) {
    if (numFields < 2) {
        $(".mailGroup").append(
            `
            <div class="form-row mb-3">
                <div class="col-10">
                    <input name="mail${numFields+1}"  id="mail${numFields+1}" type="email" class="form-control" required>
                </div>
                <div class="col-2">
                    <button class="btn btn-primary btn-row rounded-circle del" type="button"><i class="fas fa-times"></i></button>
                </div>
        </div>
        `
        );
        numFields++;
    }
    $(".del").off().click(function () {
        $(this).closest('div.form-row').remove();
        numFields--;
    });
});

// Change agenda
morningDiv = `<div id="accordion">

                    <!-- Item 1 - Bienvenida -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">8:45</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse1" data-toggle="collapse">
                                            <span class="talk-title">Bienvenida</span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse1" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_FH.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Fabian Heredia</h6>
                                    <p>Saludo de bienvenida a nuestro Planeta Esri 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Item 2 - Diseño Cartografico -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">9:00</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse2" data-toggle="collapse">
                                            <span class="talk-title">Mapas que inspiran </span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse2" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_AM_GO_RR.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Andres Mesa, Gabriela Ortiz y Ruddy Rodríguez</h6>
                                    <p>
                                        La correcta visualización de los datos cartográficos parte de un proceso que pretende optimizar el uso de los elementos visuales dentro de un mapa, para ello vamos a establecer un flujo de trabajo a tener en cuenta en el proceso de crear un mapa, con el fin de tener una adecuada representación cartográfica, siendo empleada no solo por profesionales en el área de diseño.
                                        <a href="" data-toggle="modal" data-target="#videoModal1">Ver video.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Item 3 - ArcGIS for AutoCAD-->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">9:30</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse3" data-toggle="collapse">
                                            <span class="talk-title">Dinamiza Procesos SIG con ArcGIS for AutoCAD</span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse3" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_MS.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Mishell Salinas y Karen Vásquez</h6>
                                    <p>	Siempre hemos sabido que los dibujos CAD tienen limitaciones y se basan en el manejo de información visual, sin embargo, encontramos que por medio de esta extensión Esri permite la vinculación de usuarios AutoCAD con la plataforma ArcGIS, ayudando a los usuarios al fácil enriquecimiento de los dibujos CAD con servidores de ArcGIS para el consumo de servicios de mapas a través de la red, imágenes de fondo y elementos geográficos, permitiendo crear, editar y sincronizar datos propios o importados dentro de los dibujos de AutoCAD. <a href="" data-toggle="modal" data-target="#videoModal2">Ver video.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Break -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">10:00</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <span class="talk-title">Break</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Item 4 - Python -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">10:30</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse4" data-toggle="collapse">
                                            <span class="talk-title">Conoce el API de ArcGIS para Python</span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse4" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_CM_HF.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Juan Acosta y Cristian Martínez</h6>
                                    <p>Aprende sobre las funcionalidades que ofrece el API de ArcGIS para Python para automatizar tareas con scripts, publicar y compartir contenido en ArcGIS Online , y realizar análisis de datos por medio de Jupyter Notebook.<a href="" data-toggle="modal" data-target="#videoModal3"> Ver video.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Item 5 - Visual Analytics -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">11:00</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse5" data-toggle="collapse">
                                            <span class="talk-title">Visual Analytics: Elementos de juicio para representar los datos</span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse5" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_JM.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Jofre Manchola</h6>
                                    <p>La representación visual de los datos es una tarea frecuente en diferentes entornos laborales y no siempre se utiliza la mejor alternativa. En esta charla presentaré conceptos de visual analytics y elementos de juicio para la presentación apropiada de los datos; donde el punto de partida es la consideración del objetivo de la visualización, el usuario que la consumirá y las características propias de los datos. Adicionalmente, veremos alternativas de visualización, con y sin mapas, junto con algunas librerías o frameworks para desarrollarlas.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Item 6 - JavaScript -->
                    <div class="card">
                        <div class="card-header special-header">
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5 class="mb-0"><span class="talk-time">11:30</span></h5>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">
                                        <a href="#collapse6" data-toggle="collapse">
                                            <span class="talk-title">Vue, D3 y JavaScript: Visualiza datos y mapas de forma dinámica</span>
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div id="collapse6" class="collapse" data-parent="#accordion">
                            <div class="row">
                                <div class="col-lg-4 p-4">
                                    <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_MV_AR.png">
                                </div>
                                <div class="col-lg-8 card-body">
                                    <h6 class="card-subtitle text-muted mb-3">Alejandro Reyes y Marcelo Villa</h6>
                                    <p>Esta charla cubrirá la creación de una aplicación web sencilla orientada al ODS 7, el cual trata el tema de energía asequible y no contaminante para la población. El desarrollo de esta aplicación se realizará a través de la integración del framework Vue.js con el API de ArcGIS para JavaScript y la inclusión de la librería D3 para creación de gráficas. La aplicación consistirá en una galería de mapas y gráficas con relación al tema de energía en Colombia. <a href="" data-toggle="modal" data-target="#videoModal4"> Ver video.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
afternoonDiv = `<div id="accordion">

                        <!-- SpeedGeoGeeking -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">13:30</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                        <a id="speed-link" href="#speedgeo">
                                            <span class="talk-title">Speed GeoGeeking</span>
                                        </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Break -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">14:45</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                            <span class="talk-title">Break</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Item 7 - UPRA -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">15:15</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                            <a href="#collapse7" data-toggle="collapse">
                                                <span class="talk-title">Agrupación de polígonos por irradiación de datos puntuales: Un caso de éxito del procesamiento en paralelo.</span>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div id="collapse7" class="collapse" data-parent="#accordion">
                                <div class="row">
                                    <div class="col-lg-4 p-4">
                                        <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_CM_HF.png">
                                    </div>
                                    <div class="col-lg-8 card-body">
                                        <h6 class="card-subtitle text-muted mb-3">Carlos Andrés Ruiz y Carlos Mario Cano</h6>
                                        <p>Algunos de los ejercicios de geoprocesamiento que se llevan a cabo en el grupo de análisis de la UPRA requieren la construcción de nuevas herramientas, el objetivo es afrontar la alta complejidad y la gran cantidad de los datos empleados. Uno de los casos de éxito ha sido la elaboración de un script diseñado para la conformación de polígonos de fincas de café, el cual permite la agrupación de polígonos a partir de datos puntuales y utiliza el procesamiento en paralelo. En esta presentación se mostrará su funcionamiento, los pasos necesarios para su diseño y construcción y las recomendaciones necesarias para mejorar su rendimiento. <a href="" data-toggle="modal" data-target="#videoModal5"> Ver video.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Item 8 - City Engine -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">15:45</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                            <a href="#collapse8" data-toggle="collapse">
                                                <span class="talk-title">Visualiza el futuro de tu ciudad con CityEngine</span>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div id="collapse8" class="collapse" data-parent="#accordion">
                                <div class="row">
                                    <div class="col-lg-4 p-4">
                                        <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_CC_DM.png">
                                    </div>
                                    <div class="col-lg-8 card-body">
                                        <h6 class="card-subtitle text-muted mb-3">Cristian Cedeño y Dina Montaño</h6>
                                        <p>CityEngine es un software capaz de simular el impacto de obras de infraestructura o proyectos urbanísticos, permitiendo tomar decisiones si se cumplen o superan los objetivos en medidas de sostenibilidad. Esta conferencia se enfoca en uno de los objetivos de desarrollo  sostenible (ODS 11 Ciudades y comunidades Sostenibles.) aplicado en el proyecto de renovación urbana para la ciudad de Bogotá -Ciudad río- donde mostraremos la planificación y las capacidades de visualización y diseño en 3D de cityengine.<a href="" data-toggle="modal" data-target="#videoModal6"> Ver video.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Item 9 - Business Analyst e Insights -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">16:15</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                            <a href="#collapse9" data-toggle="collapse">
                                                <span class="talk-title">Business Analyst e Insights Investigación de mercado</span>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div id="collapse9" class="collapse" data-parent="#accordion">
                                <div class="row">
                                    <div class="col-lg-4 p-4">
                                        <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_DM.png">
                                    </div>
                                    <div class="col-lg-8 card-body">
                                        <h6 class="card-subtitle text-muted mb-3">Diana Montoya</h6>
                                        <p>Esta charla consiste en explicar las herramientas de Business Analyst e Insights, y cómo estas se pueden integrar con la finalidad de seleccionar la mejor ubicación para una nueva sucursal de un establecimiento, a partir de información espacial y financiera.<a href="" data-toggle="modal" data-target="#videoModal7"> Ver video.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Item 10 - Geoprocesos -->
                        <div class="card">
                            <div class="card-header special-header">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <h5 class="mb-0"><span class="talk-time">16:45</span></h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0">
                                            <a href="#collapse10" data-toggle="collapse">
                                                <span class="talk-title">Zonas de vida de Holdridge para Colombia, un logro del geoprocesamiento</span>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div id="collapse10" class="collapse" data-parent="#accordion">
                                <div class="row">
                                    <div class="col-lg-4 p-4">
                                        <img class="img-thumbnail img-fluid d-block" src="avatar/avatar_CR.png">
                                    </div>
                                    <div class="col-lg-8 card-body">
                                        <h6 class="card-subtitle text-muted mb-3">Cristian Ríos</h6>
                                        <p>¿Sabías que puedes administrar y analizar tus datos geográficos de forma eficiente? Nuestro reto es elaborar un mapa de la Clasificación Climatica de Holdridge adaptado para colombia que permita visualizar la zonificación de sus respectivas categorías o "Zonas de Vida", mediante el uso de las herramientas de Geoprocesamiento de ArcGIS.<a href="" data-toggle="modal" data-target="#videoModal5"> Ver video.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>`;
$("#afternoonBtn").click(function () {
    $("#morningBtn").removeClass("btn-schedule-active");
    $("#afternoonBtn").addClass("btn-schedule-active");
    $("#accordion").replaceWith(afternoonDiv);
    smoothScrolling("#speed-link");
});
$("#morningBtn").click(function () {
    $("#afternoonBtn").removeClass("btn-schedule-active");
    $("#morningBtn").addClass("btn-schedule-active");
    $("#accordion").replaceWith(morningDiv);
});

// Change challenge buttons classes and respective images
var challengeImgs = [
    'challenge1.png',
    'challenge2.png',
    'challenge3.png',
];

$('.btn-special').click(function () {
   $('.btn-special').removeClass('btn-active');
   $(this).addClass('btn-active');

   var btnNum = $(this).attr('id').slice(-1);

   $('.challenge-img').fadeOut(400, function () {
       $('.challenge-img').attr('src', 'img/' + challengeImgs[btnNum-1]);
   })
       .fadeIn(400);
});


// CAROUSEL
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});


// Change challenge description
$("#description2").toggle();
$("#selectChallenge").change(function(){
    $("#description1").toggle();
    $("#description2").toggle();
    console.log(55)
});



// Registration

function validate() {

    var successDiv = `<div class="modal-body d-flex flex-column justify-content-center success">
        <div class="text-center">
            <p><i class="far fa-check-circle text-success"></i> Tu registro ha sido exitoso! Te esperamos este martes 18 de septiembre en el Hotel Grand Hyatt</p>
        </div>
    </div>`;
    var failDiv1 = `<div class="modal-body d-flex flex-column justify-content-center fail">
        <div class="text-center">
            <p><i class="far fa-times-circle text-danger"></i> No se ha podido realizar el registro debido a que alguno lo de los integrantes no está registrado en la CCU. Por favor <a href="http://geoapps.esri.co/CCU2018/Registro/" target="_blank">inscríbete</a> en la CCU e intenta nuevamente.</p>
        </div>
    </div>`;
    var failDiv2 = `<div class="modal-body d-flex flex-column justify-content-center fail">
        <div class="text-center">
            <p><i class="far fa-times-circle text-danger"></i> No se ha podido realizar el registro debido a que el nombre del grupo ya ha sido tomado. Por favor escriba otro nombre e intente nuevamente.</p>
        </div>
    </div>`;
    var failDiv3 = `<div class="modal-body d-flex flex-column justify-content-center fail">
        <div class="text-center">
            <p><i class="far fa-times-circle text-danger"></i> No se ha podido realizar el registro debido a que el nombre del grupo ya ha sido tomado y alguno de los integrantes no está registrado en la CCU. Por favor escriba otro nombre, <a href="http://geoapps.esri.co/CCU2018/Registro/" target="_blank">inscríbase</a> en la CCU e intente nuevamente.</p>
        </div>
    </div>`;
    var failDiv4 = `<div class="modal-body d-flex flex-column justify-content-center fail">
        <div class="text-center">
            <p><i class="far fa-times-circle text-danger"></i> No se ha podido realizar el registro debido a que alguno lo de los integrantes ya está registrado en el challenge. Por favor sé fiel a tu equipo!</p>
        </div>
    </div>`;


    var modalBodyHeight = $("#registerModal .modal-body").css("height");

    var params = {
        "grupo": $("#username").val(),
        "reto": parseInt($("#selectChallenge").val())
    };

    var num = 1;
    for (var i = 0; i < 3; i++) {
        var input = $(`#mail${i}`).val();
        if (input !== undefined && input !== "") {
            console.log(input);
            params[`email${num}`] = input;
            num++;
        }
    }

    console.log(params);
    axios.post("http://geoapps.esri.co/RestApi/api/persona", params)
    .then(function (response) {
        console.log(response);
        var data = response.data;

        // Name is valid and all emails are registered in the CCU
        if (data["nombreValido"] && data["correosInvalidos"].length === 0 && data["correosYaInscritos"].length === 0) {
            $("#registerModal .modal-body").replaceWith(successDiv);
            $("#registerModal .success").css("height", modalBodyHeight);

        // Name is valid but users are not registered in the CCU
        } else if (data["nombreValido"] && data["correosInvalidos"].length > 0) {
            $("#registerModal .modal-body").replaceWith(failDiv1);
            $("#registerModal .fail").css("height", modalBodyHeight);

        // Users are registered in the CCU but name is not valid
        } else if (!data["nombreValido"] && data["correosInvalidos"].length === 0) {
            $("#registerModal .modal-body").replaceWith(failDiv2);
            $("#registerModal .fail").css("height", modalBodyHeight);

        // Users are already registered in Planeta Esri
        } else if (data["correosYaInscritos"].length > 0) {
            $("#registerModal .modal-body").replaceWith(failDiv4);
            $("#registerModal .fail").css("height", modalBodyHeight);

        // Users are not registered in the CCU and name is not valid
        } else {
            $("#registerModal .modal-body").replaceWith(failDiv3);
            $("#registerModal .fail").css("height", modalBodyHeight);
        }
    })
    .catch(function (error) {
        console.log(error)
    });

    return false;
}


// // Funciona
// axios.post("http://geoapps.esri.co/RestApi/api/persona", {
//     "email1": "correo2@gmail.com",
//     "grupo": "Los Macos3" ,
//     "reto": 2
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
