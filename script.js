// ==========================================
// VARIABLES Y DATOS
// ==========================================

let cultivos = JSON.parse(localStorage.getItem("cultivos")) || [];

const etapas = [
"Preparación del suelo",
"Siembra",
"Germinación",
"Crecimiento",
"Floración",
"Cosecha"
];

// ==========================================
// FAMILIAS Y COLORES DE CULTIVOS
// ==========================================

const familias = {
"Poroto": "Leguminosa",
"Maní": "Leguminosa",
"Maíz": "Gramínea",
"Mandioca": "Euforbiácea",
"Tomate": "Solanácea",
"Lechuga": "Asterácea",
"Zanahoria": "Apiácea"
};

const colores = {
"Leguminosa": "color-verde",
"Gramínea": "color-amarillo",
"Euforbiácea": "color-naranja",
"Solanácea": "color-rojo",
"Asterácea": "color-azul",
"Apiácea": "color-morado"
};

function obtenerColor(nombre) {
const familia = familias[nombre];
return colores[familia] || "color-gris";
}

// ==========================================
// CAMBIAR DE SECCION
// ==========================================

function mostrarSeccion(nombre, boton) {


const secciones = document.querySelectorAll(".seccion");

secciones.forEach(function(seccion) {
    seccion.classList.add("oculto");
});

const seccionSeleccionada = document.getElementById(nombre);

if (seccionSeleccionada) {
    seccionSeleccionada.classList.remove("oculto");
}

const botones = document.querySelectorAll(".menu button");

botones.forEach(function(elemento) {
    elemento.classList.remove("activo");
});

if (boton) {
    boton.classList.add("activo");
} else {
    botones.forEach(function(elemento) {
        if (
            elemento.getAttribute("onclick") &&
            elemento.getAttribute("onclick").includes("'" + nombre + "'")
        ) {
            elemento.classList.add("activo");
        }
    });
}

actualizarPantalla();


}

window.mostrarSeccion = mostrarSeccion;

// ==========================================
// CULTIVOS PERSONALIZADOS
// ==========================================

const selectorCultivo = document.getElementById("nombreCultivo");
const campoOtroCultivo = document.getElementById("campoOtroCultivo");
const inputOtroCultivo = document.getElementById("otroCultivo");

selectorCultivo.addEventListener("change", function() {


if (this.value === "Otro") {

    campoOtroCultivo.classList.remove("oculto");
    inputOtroCultivo.required = true;

} else {

    campoOtroCultivo.classList.add("oculto");
    inputOtroCultivo.required = false;
    inputOtroCultivo.value = "";

}


});

// ==========================================
// GUARDAR CULTIVOS
// ==========================================

document.getElementById("formCultivo").addEventListener("submit", function(evento) {


evento.preventDefault();

let nombre = selectorCultivo.value;

if (nombre === "Otro") {
    nombre = inputOtroCultivo.value.trim();
}

nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

const parcela = document.getElementById("parcela").value.trim();
const fecha = document.getElementById("fechaSiembra").value;
const etapa = document.getElementById("etapaCultivo").value;

if (!nombre || !parcela || !fecha || !etapa) {
    alert("Completá todos los campos.");
    return;
}

const fechaSeleccionada = new Date(fecha + "T00:00:00");
const hoy = new Date();
hoy.setHours(0, 0, 0, 0);

if (fechaSeleccionada > hoy) {
    alert("La fecha de siembra no puede ser futura.");
    return;
}

const nuevoCultivo = {
    id: Date.now(),
    nombre: nombre,
    parcela: parcela,
    fecha: fecha,
    etapa: etapa
};

cultivos.push(nuevoCultivo);

guardarDatos();

this.reset();

campoOtroCultivo.classList.add("oculto");
inputOtroCultivo.required = false;

alert("¡Cultivo registrado correctamente!");

actualizarPantalla();


});

// ==========================================
// GUARDAR EN EL NAVEGADOR
// ==========================================

function guardarDatos() {
localStorage.setItem("cultivos", JSON.stringify(cultivos));
}

// ==========================================
// MOSTRAR CULTIVOS
// ==========================================

function mostrarCultivos() {


const lista = document.getElementById("listaCultivos");

if (!lista) return;

if (cultivos.length === 0) {
    lista.innerHTML = "<p>Todavía no hay cultivos registrados.</p>";
    return;
}

lista.innerHTML = "";

cultivos.forEach(function(cultivo) {

    const elemento = document.createElement("div");

    elemento.className = "cultivo-item " + obtenerColor(cultivo.nombre);

    elemento.innerHTML = `
        <h3>🌱 ${escaparHTML(cultivo.nombre)}</h3>

        <p><strong>Parcela:</strong> ${escaparHTML(cultivo.parcela)}</p>

        <p><strong>Fecha de siembra:</strong> ${escaparHTML(cultivo.fecha)}</p>

        <p><strong>Etapa:</strong> ${escaparHTML(cultivo.etapa)}</p>

        <div class="acciones">

            <button class="btn-editar"
                onclick="avanzarEtapa(${cultivo.id})">
                Actualizar etapa
            </button>

            <button class="btn-eliminar"
                onclick="eliminarCultivo(${cultivo.id})">
                Eliminar
            </button>

        </div>
    `;

    lista.appendChild(elemento);

});


}

// ==========================================
// EVITAR INSERTAR HTML DESDE TEXTO DEL USUARIO
// ==========================================

function escaparHTML(texto) {


return String(texto).replace(/[&<>"']/g, function(caracter) {

    const equivalencias = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

    return equivalencias[caracter];

});


}

// ==========================================
// ACTUALIZAR ETAPA DEL CULTIVO
// ==========================================

function avanzarEtapa(id) {


const cultivo = cultivos.find(function(item) {
    return item.id === id;
});

if (!cultivo) return;

const posicion = etapas.indexOf(cultivo.etapa);

if (posicion === -1 || posicion === etapas.length - 1) {
    alert("Este cultivo ya se encuentra en la etapa de cosecha.");
    return;
}

cultivo.etapa = etapas[posicion + 1];

guardarDatos();

actualizarPantalla();

alert("La etapa del cultivo fue actualizada.");


}

window.avanzarEtapa = avanzarEtapa;

// ==========================================
// ELIMINAR CULTIVO
// ==========================================

function eliminarCultivo(id) {


const confirmar = confirm("¿Estás seguro de eliminar este cultivo?");

if (!confirmar) return;

cultivos = cultivos.filter(function(item) {
    return item.id !== id;
});

guardarDatos();

actualizarPantalla();


}

window.eliminarCultivo = eliminarCultivo;

// ==========================================
// ACTUALIZAR PANTALLA DE INICIO
// ==========================================

function actualizarInicio() {


const total = document.getElementById("totalCultivos");
const avisos = document.getElementById("totalAvisos");
const resumen = document.getElementById("resumenCultivos");

if (total) {
    total.textContent = cultivos.length;
}

if (avisos) {
    avisos.textContent = generarAvisos().length;
}

if (!resumen) return;

if (cultivos.length === 0) {
    resumen.innerHTML = "<p>Todavía no registraste cultivos.</p>";
    return;
}

resumen.innerHTML = "";

cultivos.forEach(function(cultivo) {

    const elemento = document.createElement("div");

    elemento.className = "cultivo-item " + obtenerColor(cultivo.nombre);

    elemento.innerHTML = `
        <strong>🌱 ${escaparHTML(cultivo.nombre)}</strong>
        <p>Parcela: ${escaparHTML(cultivo.parcela)}</p>
        <p>Etapa: ${escaparHTML(cultivo.etapa)}</p>
    `;

    resumen.appendChild(elemento);

});

}

// ==========================================
// CALENDARIO AGRICOLA
// ==========================================

const calendario = {


"Poroto": {
    meses: "Septiembre a diciembre",
    consejo: "Verificá la humedad del suelo y evitá sembrar si se esperan lluvias excesivas."
},

"Maíz": {
    meses: "Agosto a diciembre",
    consejo: "Elegí una variedad adecuada para la región y prepará correctamente el terreno."
},

"Mandioca": {
    meses: "Septiembre a noviembre",
    consejo: "Utilizá ramas sanas y un suelo con buen drenaje."
},

"Tomate": {
    meses: "Febrero a abril y julio a septiembre",
    consejo: "Controlá la humedad y observá las hojas para detectar posibles enfermedades."
},

"Lechuga": {
    meses: "Marzo a septiembre",
    consejo: "Preferí condiciones frescas y mantené una humedad adecuada."
},

"Zanahoria": {
    meses: "Marzo a septiembre",
    consejo: "Prepará un suelo suelto para favorecer el desarrollo de las raíces."
},

"Maní": {
    meses: "Septiembre a noviembre",
    consejo: "Considerá la humedad del suelo y las condiciones de la temporada."
}


};

// ==========================================
// ACTUALIZAR OPCIONES DEL CALENDARIO
// ==========================================

function actualizarOpcionesCalendario() {

const selector = document.getElementById("cultivoCalendario");

const seleccionAnterior = selector.value;

selector.innerHTML = `
    <option value="">Seleccioná una opción</option>
`;

const nombres = [...new Set(cultivos.map(function(cultivo) {
    return cultivo.nombre;
}))];

nombres.forEach(function(nombre) {

    const opcion = document.createElement("option");

    opcion.value = nombre;
    opcion.textContent = nombre;

    selector.appendChild(opcion);

});

if (nombres.includes(seleccionAnterior)) {
    selector.value = seleccionAnterior;
}


}

// ==========================================
// CONSULTAR CALENDARIO
// ==========================================

function consultarCalendario() {


const nombre = document.getElementById("cultivoCalendario").value;

const resultado = document.getElementById("resultadoCalendario");

if (!nombre) {
    resultado.innerHTML = "<p>Primero registrá un cultivo en Mi kokue.</p>";
    return;
}

const dato = calendario[nombre];

if (!dato) {

    resultado.innerHTML = `
        <h3>🌱 ${escaparHTML(nombre)}</h3>
        <p>Todavía no tenemos información del calendario para este cultivo.</p>
        <p>Consultá las recomendaciones agrícolas de tu región antes de sembrar.</p>
    `;

    return;
}

resultado.innerHTML = `
    <h3>🌱 ${escaparHTML(nombre)}</h3>
    <p><strong>Período orientativo:</strong> ${dato.meses}</p>
    <p><strong>Recomendación:</strong> ${dato.consejo}</p>
    <p><em>La época puede variar según la zona y las condiciones climáticas.</em></p>
`;


}

window.consultarCalendario = consultarCalendario;

// ==========================================
// ROTACION DE CULTIVOS
// ==========================================

const alternativas = {


"Leguminosa": ["Maíz", "Mandioca", "Zanahoria"],
"Gramínea": ["Poroto", "Maní", "Lechuga"],
"Euforbiácea": ["Poroto", "Maíz", "Lechuga"],
"Solanácea": ["Maíz", "Poroto", "Zanahoria"],
"Asterácea": ["Maíz", "Poroto", "Mandioca"],
"Apiácea": ["Maíz", "Poroto", "Lechuga"]


};

function consultarRotacion() {


const nombre = document.getElementById("cultivoAnterior").value;

const resultado = document.getElementById("resultadoRotacion");

if (!nombre) {
    resultado.innerHTML = "<p>Seleccioná el cultivo anterior.</p>";
    return;
}

const familia = familias[nombre];

const opciones = alternativas[familia];

if (!opciones) {
    resultado.innerHTML = "<p>No hay alternativas registradas para este cultivo.</p>";
    return;
}

let lista = "";

opciones.forEach(function(cultivo) {
    lista += `<li>${escaparHTML(cultivo)}</li>`;
});

resultado.innerHTML = `
    <h3>🌱 Alternativas después de ${escaparHTML(nombre)}</h3>
    <p><strong>Familia del cultivo anterior:</strong> ${familia}</p>
    <p>Algunas alternativas para evaluar:</p>
    <ul>${lista}</ul>
    <p>
        Estas son sugerencias generales. Antes de decidir,
        verificá las condiciones del suelo, las enfermedades
        presentes y las recomendaciones agronómicas locales.
    </p>
`;


}

window.consultarRotacion = consultarRotacion;

// ==========================================
// NOTIFICACIONES
// ==========================================

function generarAvisos() {


const avisos = [];

cultivos.forEach(function(cultivo) {

    avisos.push({
        titulo: "Seguimiento de " + cultivo.nombre,
        mensaje: obtenerMensajeEtapa(cultivo)
    });

});

return avisos;


}

function obtenerMensajeEtapa(cultivo) {


const mensajes = {

    "Preparación del suelo": "Recordá preparar y revisar el terreno.",
    "Siembra": "Realizá el seguimiento de la siembra.",
    "Germinación": "Observá los primeros brotes y controlá la humedad.",
    "Crecimiento": "Revisá el crecimiento y el estado de las plantas.",
    "Floración": "Observá la floración y revisá posibles plagas.",
    "Cosecha": "Verificá si el cultivo está listo para cosechar."

};

return mensajes[cultivo.etapa] || "Revisá el estado de tu cultivo.";


}

// ==========================================
// MOSTRAR NOTIFICACIONES
// ==========================================

function mostrarNotificaciones() {


const lista = document.getElementById("listaNotificaciones");

if (!lista) return;

const avisos = generarAvisos();

if (avisos.length === 0) {

    lista.innerHTML = `
        <p>No tenés avisos por el momento.</p>
        <p>Cuando registres un cultivo, aparecerán aquí tus recordatorios.</p>
    `;

    return;
}

lista.innerHTML = "";

avisos.forEach(function(aviso) {

    const elemento = document.createElement("div");

    elemento.className = "aviso";

    elemento.innerHTML = `
        <strong>🔔 ${escaparHTML(aviso.titulo)}</strong>
        <p>${escaparHTML(aviso.mensaje)}</p>
    `;

    lista.appendChild(elemento);

});

}

// ==========================================    
// ACTUALIZAR TODA LA APLICACION
// ==========================================

function actualizarPantalla() {


mostrarCultivos();

actualizarInicio();

mostrarNotificaciones();

actualizarOpcionesCalendario();


}

// ==========================================
// INICIAR APLICACION
// ==========================================

actualizarPantalla();
