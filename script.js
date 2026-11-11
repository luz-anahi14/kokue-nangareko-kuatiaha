// KOKUE ÑANGAREKO KUATIAHA - Español / Guaraní

let idioma = localStorage.getItem("idiomaKokue") || "es";

const traducciones = {
    "Otro": "Ambue",

    // Cultivos
    "Poroto": "Kumanda",
    "Maíz": "Avati",
    "Mandioca": "Mandi'o",
    "Maní": "Manduvi",
    "Zanahoria": "Saraoria",
    "Lechuga": "Lechuga",
    "Tomate": "Tomate",

    // Familias de cultivos
    "Leguminosa": "Leguminosa",
    "Gramínea": "Gramínea",
    "Euforbiácea": "Euforbiácea",
    "Solanácea": "Solanácea",
    "Asterácea": "Asterácea",
    "Apiácea": "Apiácea",

    // Menú e inicio
    "Idioma": "Ñe'ẽ",
    "Inicio": "Ñepyrũ",
    "Mi kokue": "Che kokue",
    "Calendario": "Arapapaha",
    "Mis avisos": "Che marandukuéra",
    "Sistema comunitario de gestión y planificación de cultivos.": "Kokue ñangareko ha ñemitỹ ñemohenda atyguápe.",
    "¡Bienvenido a tu kokue!": "¡Eg̃uahẽporãite nde kokuépe!",
    "Elegí qué necesitás consultar hoy.": "Eiporavo mba'épa reikuaase ko árape.",

    "MI KOKUE": "CHE KOKUE",
    "Registrá y consultá tus cultivos.": "Ehai ha ehecha ne ñemitỹnguéra.",
    "CALENDARIO": "ARAPAPAHA",
    "Consultá las épocas de siembra.": "Ehecha araka'épa iporã oñeñemitỹ.",
    "MIS AVISOS": "CHE MARANDUKUERA",
    "Revisá tus recordatorios.": "Ehecha umi ne mandu'arã.",

    // Mi kokue
    "Registrá tus cultivos y acompañá su crecimiento.": "Ehai ne ñemitỹnguéra ha ejesareko okakuaa aja.",
    "Mis cultivos actuales": "Che ñemitỹnguéra ko'ág̃agua",
    "Registrar un cultivo": "Ehai peteĩ ñemitỹ",
    "¿Qué vas a cultivar?": "¿Mba'épa reñemitỹta?",
    "Seleccioná un cultivo": "Eiporavo peteĩ ñemitỹ",
    "Otro (escribir cultivo)": "Ambue (ehai ñemitỹ réra)",
    "Escribí el nombre del cultivo:": "Ehai ñemitỹ réra:",
    "¿En qué parcela?": "¿Mba'e kokue vorepýpe?",
    "Fecha de siembra:": "Ñemitỹ ára:",
    "¿En qué etapa se encuentra?": "¿Mba'e ñemongu'épepa oĩ?",
    "Seleccioná una etapa": "Eiporavo peteĩ ñemongu'e",
    "Preparación del suelo": "Yvy ñembosako'i",
    "Siembra": "Ñemitỹ",
    "Germinación": "Ñeheñói",
    "Crecimiento": "Kakuaa",
    "Floración": "Potyñera",
    "Cosecha": "Ñemono'õ",
    "Guardar cultivo": "Ñemitỹ ñongatu",
    "Mis cultivos registrados": "Che ñemitỹnguéra ojehaíva",
    "Identificá cada cultivo por su color.": "Ehechakuaa ñemitỹnguéra sa'y rupive.",
    "Otras herramientas": "Ambue tembiporu",

    // Herramientas
    "🌦️ Clima y recomendaciones": "🌦️ Arapytu ha ñemoñe’ẽ",
    "🔄 Rotación de cultivos": "🔄 Ñemitỹ jere",

    // Calendario
    "Calendario agrícola": "Ñemitỹ arapapaha",
    "Consultá los períodos orientativos para sembrar.": "Ehecha umi ára oñemoñe’ẽva ñemitỹ hag̃ua.",
    "¿Qué querés sembrar?": "¿Mba'épa reñemitỹse?",
    "Seleccioná una opción": "Eiporavo peteĩva",
    "Seleccioná un cultivo:": "Eiporavo peteĩ ñemitỹ:",
    "Consultar": "Eporandu",
    "Primero registrá un cultivo en Mi kokue.": "Ehai raẽ peteĩ ñemitỹ 'Che kokuépe'.",
    "Todavía no tenemos información del calendario para este cultivo.": "Ndaipóri gueteri marandu ko ñemitỹ g̃uarã.",
    "Consultá las recomendaciones agrícolas de tu región antes de sembrar.": "Ehecha umi ñemoñe'ẽ ñemitỹ rehegua nde jerekuégue mboyve reñemitỹ.",
    "Período orientativo:": "Ára iporãva ñemitỹ hag̃ua:",
    "Recomendación:": "Ñemoñe’ẽ:",
    "La época puede variar según la zona y las condiciones climáticas.": "Ko ára ikatu iñambue tenda ha ára reko rupive.",

    // Clima
    "Consultar el clima": "Eporandu arapytu rehe",
    "También podés consultar las condiciones climáticas y recomendaciones.": "Ikatu avei rehecha arapytu reko ha umi ñemoñe’ẽ.",
    "Ver clima y recomendaciones": "Ehecha arapytu ha ñemoñe’ẽ",
    "Importante": "Mandu'arã",
    "Los períodos son orientativos. La época adecuada puede variar según la región, la variedad y las condiciones del suelo y del clima.": "Ko'ã ára ha'e ñemoñe'ẽnte. Pe ára iporãvéva ikatu iñambue tenda, ñemitỹichagua, yvy ha arapytu rehe.",
    "Clima y recomendaciones": "Arapytu ha ñemoñe’ẽ",
    "Información y consejos sencillos para cuidar tus cultivos.": "Marandu ha ñe’ẽmondo ndahasýiva oñangareko hag̃ua ne ñemitỹre.",
    "Condiciones climáticas": "Arapytu reko",
    "Datos de demostración": "Techaukarã marandu",
    "Temperatura": "Hakukue",
    "Humedad": "Yvytu'ỹ",
    "Condición": "Teko",
    "Parcialmente nublado": "Araipa ha arai sa'i",
    "Recomendaciones": "Ñemoñe’ẽ",
    "Cuidado del suelo": "Yvy ñangareko",
    "Prepará el terreno y verificá que tenga un buen drenaje.": "Embosako'i yvy ha ehecha osyry porãpa chugui y.",
    "Riego": "Y japo",
    "Controlá la humedad del suelo antes de regar.": "Ehecha yvy hykue mboyve reñohẽ y.",
    "Seguimiento": "Ñema’ẽ",
    "Observá el crecimiento de tus cultivos y revisá si presentan cambios.": "Ema’ẽ mba’éichapa okakuaa ne ñemitỹ ha ehecha oñemoambuépa.",
    "Volver a Mi kokue": "Ejevy che kokuépe",

    // Rotación de cultivos
    "Rotación de cultivos": "Ñemitỹ jere",
    "Planificá qué cultivar en tu parcela la próxima temporada.": "Ehecha mba'épa reñemitỹta ne yvy pehẽngue ára upepeguápe.",
    "¿Qué cultivaste anteriormente?": "¿Mba'épa reñemitỹ ra'e mboyve?",
    "Seleccioná el cultivo anterior:": "Eiporavo pe ñemitỹ mboyvegua.",
    "Ver alternativas": "Ehecha ambue jeporavorã",
    "¿Por qué rotar los cultivos?": "¿Mba'érepa iporã ñamijere ñemitỹnguéra?",
    "La rotación permite alternar diferentes tipos de cultivos y ayuda a cuidar el suelo y reducir problemas asociados con la repetición de una misma familia vegetal.": "Ñemitỹ jere rupive ikatu ñambohasa ambueichagua ñemitỹ ha péicha ñañangareko yvýre ha ñamboguejy apañuãi oúva peteĩchagua ñemitỹ jey-jeygui.",
    "Seleccioná el cultivo anterior.": "Eiporavo pe ñemitỹ mboyvegua.",
    "No hay alternativas registradas para este cultivo.": "Ndaipóri gueteri ambue jeporavorã ko ñemitỹme g̃uarã.",
    "Alternativas después de ": "Ambue jeporavorã ko mboyvegua rire:",
    "Familia del cultivo anterior:": "Ñemitỹ mboyvegua aty:",
    "Algunas alternativas para evaluar:": "Ambue jeporavorã ikatu rehecháva:",
    "Estas son sugerencias generales. Antes de decidir, verificá las condiciones del suelo, las enfermedades presentes y las recomendaciones agronómicas locales.": "Ko’ãva ha’e ñemoñe’ẽ opavave g̃uarã. Reñembojoja mboyve, ehecha yvy reko, mba’asy oĩva ha umi kokue moakãgataha ñe’ẽ ne jerekuégpe.",

    // Avisos
    "Revisá los recordatorios para cuidar tus cultivos.": "Ehecha umi mandu'arã reñangareko hag̃ua ne ñemitỹre.",
    "Mis recordatorios": "Che mandu'arã",
    "No tenés avisos por el momento.": "Ndaipóri marandu ko'ág̃a.",
    "Cuando registres un cultivo, aparecerán aquí tus recordatorios.": "Rehai vove peteĩ ñemitỹ, ne mandu'arã ojehechaukáta ko'ápe.",
    "Seguimiento de ": "Ñema’ẽ: ",
    "Recordá preparar y revisar el terreno.": "Nemandu’áke embosako’i ha rehecha hag̃ua yvy.",
    "Realizá el seguimiento de la siembra.": "Ejesareko ñemitỹ rehe.",
    "Observá los primeros brotes y controlá la humedad.": "Ema’ẽ umi hoky ypy rehe ha ehecha yvy hykue.",
    "Revisá el crecimiento y el estado de las plantas.": "Ehecha mba’éichapa okakuaa ha mba’éichapa oĩ umi ñemitỹ.",
    "Observá la floración y revisá posibles plagas.": "Ema’ẽ potyñeráre ha ehecha oĩpa bicho térã mba'asy.",
    "Verificá si el cultivo está listo para cosechar.": "Ehecha oĩmapa ñemono’õrã.",
    "Revisá el estado de tu cultivo.": "Ehecha mba'éichapa oĩ ne ñemitỹ.",

    // Mensajes y acciones
    "Ejemplo: Parcela 1": "Techapyrã: Kokue vore 1",
    "Ejemplo: Zapallo": "Techapyrã: Kurapepẽ",
    "Completá todos los campos.": "Emyenyhẽpaite umi tenda ojejeruréva.",
    "La fecha de siembra no puede ser futura.": "Ñemitỹ ára ndaikatúi ohasa ko ára",
    "¡Cultivo registrado correctamente!": "¡Ñemitỹ oñeñongatu porãma!",
    "Todavía no hay cultivos registrados.": "Ndaipóri gueteri ñemitỹ ojehaíva.",
    "Parcela:": "Kokue vore:",
    "Etapa:": "Ñemitỹ ñemongu'e:",
    "Actualizar etapa": "Embohekopyahu ñemongu'e",
    "Eliminar": "Eipe'a",
    "Este cultivo ya se encuentra en la etapa de cosecha.": "Ko ñemitỹ og̃uahẽma koga'ópe.",
    "La etapa del cultivo fue actualizada.": "Ñemitỹ ñemongu'e oñembohekopyahúma.",
    "¿Estás seguro de eliminar este cultivo?": "¿Añetehápepa reipe'ase ko ñemitỹ?",
    "Todavía no registraste cultivos.": "Nerehai gueteri ñemitỹ."
};

function traducirTexto(texto) {
    return idioma === "gn" ? (traducciones[texto] || texto) : texto;
}

// Actualizar los nombres visibles del selector de cultivos en Mi kokue
function actualizarOpcionesCultivo() {
    const selector = document.getElementById("nombreCultivo");

    if (!selector) return;

    Array.from(selector.options).forEach(opcion => {
        // Se conserva el valor original para que el sistema siga guardando
        // los nombres de los cultivos en español.
        if (opcion.value) {
            opcion.textContent = traducirTexto(opcion.value);
        }
    });
}

// Cambiar el idioma de la interfaz
function aplicarIdioma() {
    document.documentElement.lang = idioma === "gn" ? "gn" : "es";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const clave = el.getAttribute("data-i18n");
        el.textContent = traducirTexto(clave);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const clave = el.getAttribute("data-i18n-placeholder");
        el.placeholder = traducirTexto(clave);
    });

    const selector = document.getElementById("selectorIdioma");

    if (selector) {
        selector.value = idioma;
    }

    actualizarOpcionesCultivo();
    actualizarPantalla();
}

// Selector de idioma
const selectorIdioma = document.getElementById("selectorIdioma");

if (selectorIdioma) {
    selectorIdioma.addEventListener("change", function () {
        idioma = this.value;
        localStorage.setItem("idiomaKokue", idioma);
        aplicarIdioma();
    });
}

// Datos de cultivos
let cultivos = JSON.parse(localStorage.getItem("cultivos")) || [];

const etapas = [
    "Preparación del suelo",
    "Siembra",
    "Germinación",
    "Crecimiento",
    "Floración",
    "Cosecha"
];

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
    return colores[familias[nombre]] || "color-gris";
}

// Navegación entre secciones
function mostrarSeccion(nombre, boton) {
    document.querySelectorAll(".seccion").forEach(s => {
        s.classList.add("oculto");
    });

    const elegida = document.getElementById(nombre);

    if (elegida) {
        elegida.classList.remove("oculto");
    }

    document.querySelectorAll(".menu button").forEach(b => {
        b.classList.remove("activo");
    });

    if (boton) {
        boton.classList.add("activo");
    } else {
        document.querySelectorAll(".menu button").forEach(b => {
            if (b.getAttribute("onclick")?.includes("'" + nombre + "'")) {
                b.classList.add("activo");
            }
        });
    }

    actualizarPantalla();
}

window.mostrarSeccion = mostrarSeccion;

// Formulario de cultivos
const selectorCultivo = document.getElementById("nombreCultivo");
const campoOtroCultivo = document.getElementById("campoOtroCultivo");
const inputOtroCultivo = document.getElementById("otroCultivo");

if (selectorCultivo) {
    selectorCultivo.addEventListener("change", function () {
        const mostrar = this.value === "Otro";

        if (campoOtroCultivo) {
            campoOtroCultivo.classList.toggle("oculto", !mostrar);
        }

        if (inputOtroCultivo) {
            inputOtroCultivo.required = mostrar;

            if (!mostrar) {
                inputOtroCultivo.value = "";
            }
        }
    });
}

const formularioCultivo = document.getElementById("formCultivo");

if (formularioCultivo) {
    formularioCultivo.addEventListener("submit", function (evento) {
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
            alert(traducirTexto("Completá todos los campos."));
            return;
        }

        const fechaSeleccionada = new Date(fecha + "T00:00:00");
        const hoy = new Date();

        hoy.setHours(0, 0, 0, 0);

        if (fechaSeleccionada > hoy) {
            alert(traducirTexto("La fecha de siembra no puede ser futura."));
            return;
        }

        cultivos.push({
            id: Date.now(),
            nombre,
            parcela,
            fecha,
            etapa
        });

        guardarDatos();

        this.reset();

        if (campoOtroCultivo) {
            campoOtroCultivo.classList.add("oculto");
        }

        if (inputOtroCultivo) {
            inputOtroCultivo.required = false;
        }

        alert(traducirTexto("¡Cultivo registrado correctamente!"));

        actualizarPantalla();
    });
}

// Guardar datos
function guardarDatos() {
    localStorage.setItem("cultivos", JSON.stringify(cultivos));
}

// Evitar que los textos ingresados rompan el HTML
function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

// Mostrar cultivos registrados
function mostrarCultivos() {
    const lista = document.getElementById("listaCultivos");

    if (!lista) return;

    if (!cultivos.length) {
        lista.innerHTML = `<p>${traducirTexto("Todavía no hay cultivos registrados.")}</p>`;
        return;
    }

    lista.innerHTML = "";

    cultivos.forEach(c => {
        const el = document.createElement("div");

        el.className = "cultivo-item " + obtenerColor(c.nombre);

        el.innerHTML = `
            <h3>${escaparHTML(traducirTexto(c.nombre))}</h3>

            <p>
                <strong>${traducirTexto("Parcela:")}</strong>
                ${escaparHTML(c.parcela)}
            </p>

            <p>
                <strong>${traducirTexto("Fecha de siembra:")}</strong>
                ${escaparHTML(c.fecha)}
            </p>

            <p>
                <strong>${traducirTexto("Etapa:")}</strong>
                ${traducirTexto(c.etapa)}
            </p>

            <div class="acciones">
                <button class="btn-editar" onclick="avanzarEtapa(${c.id})">
                    ${traducirTexto("Actualizar etapa")}
                </button>

                <button class="btn-eliminar" onclick="eliminarCultivo(${c.id})">
                    ${traducirTexto("Eliminar")}
                </button>
            </div>
        `;

        lista.appendChild(el);
    });
}

// Actualizar etapa de un cultivo
function avanzarEtapa(id) {
    const c = cultivos.find(x => x.id === id);

    if (!c) return;

    const pos = etapas.indexOf(c.etapa);

    if (pos === -1 || pos === etapas.length - 1) {
        alert(traducirTexto("Este cultivo ya se encuentra en la etapa de cosecha."));
        return;
    }

    c.etapa = etapas[pos + 1];

    guardarDatos();
    actualizarPantalla();

    alert(traducirTexto("La etapa del cultivo fue actualizada."));
}

window.avanzarEtapa = avanzarEtapa;

// Eliminar cultivo
function eliminarCultivo(id) {
    if (!confirm(traducirTexto("¿Estás seguro de eliminar este cultivo?"))) {
        return;
    }

    cultivos = cultivos.filter(x => x.id !== id);

    guardarDatos();
    actualizarPantalla();
}

window.eliminarCultivo = eliminarCultivo;

// Resumen de cultivos en Inicio
function actualizarInicio() {
    const resumen = document.getElementById("resumenCultivos");

    if (!resumen) return;

    if (!cultivos.length) {
        resumen.innerHTML = `<p>${traducirTexto("Todavía no registraste cultivos.")}</p>`;
        return;
    }

    resumen.innerHTML = "";

    cultivos.forEach(c => {
        const el = document.createElement("div");

        el.className = "cultivo-item " + obtenerColor(c.nombre);

        el.innerHTML = `
            <strong>${escaparHTML(traducirTexto(c.nombre))}</strong>

            <p>
                ${traducirTexto("Parcela:")}
                ${escaparHTML(c.parcela)}
            </p>

            <p>
                ${traducirTexto("Etapa:")}
                ${traducirTexto(c.etapa)}
            </p>
        `;

        resumen.appendChild(el);
    });
}

// Calendario agrícola
const calendario = {
    "Poroto": {
        meses: "Septiembre a diciembre",
        mesesGn: "Jasyporundy guive jasypakõi peve",
        consejo: "Verificá la humedad del suelo y evitá sembrar si se esperan lluvias excesivas.",
        consejoGn: "Ehecha yvy hykue ha ani reñemitỹ ojeha'arõramo ama tuichaitereíva."
    },

    "Maíz": {
        meses: "Agosto a diciembre",
        mesesGn: "Jasypoapy guive jasypakõi peve",
        consejo: "Elegí una variedad adecuada para la región y prepará correctamente el terreno.",
        consejoGn: "Eiporavo peteĩ avati iporãva ne tendápe g̃uarã ha embosako'i porã yvy."
    },

    "Mandioca": {
        meses: "Septiembre a noviembre",
        mesesGn: "Jasyporundy guive jasypateĩ peve",
        consejo: "Utilizá ramas sanas y un suelo con buen drenaje.",
        consejoGn: "Eiporu hakã hesãiva ha yvy y osyry porãhápe."
    },

    "Tomate": {
        meses: "Febrero a abril y julio a septiembre",
        mesesGn: "Jasykõi guive jasyrundy peve ha jasypokõi guive jasyporundy peve",
        consejo: "Controlá la humedad y observá las hojas para detectar posibles enfermedades.",
        consejoGn: "Ejesareko yvy hykue rehe ha ema’ẽ umi rogue rehe ani hag̃ua ou mba'asy."
    },

    "Lechuga": {
        meses: "Marzo a septiembre",
        mesesGn: "Jasyapy guive jasyporundy peve",
        consejo: "Preferí condiciones frescas y mantené una humedad adecuada.",
        consejoGn: "Eiporavo peteĩ tenda ipiro'ysãva ha eñangareko yvy hykue rehe."
    },

    "Zanahoria": {
        meses: "Marzo a septiembre",
        mesesGn: "Jasyapy guive jasyporundy peve",
        consejo: "Prepará un suelo suelto para favorecer el desarrollo de las raíces.",
        consejoGn: "Embosako'i yvy hu'ũva ikatu hag̃ua okakuaa porã hapo."
    },

    "Maní": {
        meses: "Septiembre a noviembre",
        mesesGn: "Jasyporundy guive jasypateĩ peve",
        consejo: "Considerá la humedad del suelo y las condiciones de la temporada.",
        consejoGn: "Ejesareko yvy hykue ha ára reko rehe."
    }
};

// Actualizar opciones del selector del calendario
function actualizarOpcionesCalendario() {
    const selector = document.getElementById("cultivoCalendario");

    if (!selector) return;

    const base = [
        "Poroto",
        "Maíz",
        "Mandioca",
        "Tomate",
        "Lechuga",
        "Zanahoria",
        "Maní"
    ];

    const personalizados = [
        ...new Set(
            cultivos
                .map(c => c.nombre)
                .filter(n => !base.includes(n))
        )
    ];

    const anterior = selector.value;

    const opciones = [...base, ...personalizados];

    selector.innerHTML =
        `<option value="">${traducirTexto("Seleccioná una opción")}</option>` +
        opciones.map(n => `
            <option value="${escaparHTML(n)}">
                ${escaparHTML(traducirTexto(n))}
            </option>
        `).join("");

    if (opciones.includes(anterior)) {
        selector.value = anterior;
    }
}

// Consultar calendario
function consultarCalendario() {
    const nombre = document.getElementById("cultivoCalendario").value;
    const resultado = document.getElementById("resultadoCalendario");

    if (!nombre) {
        resultado.innerHTML = `
            <p>${traducirTexto("Primero registrá un cultivo en Mi kokue.")}</p>
        `;
        return;
    }

    const dato = calendario[nombre];

    if (!dato) {
        resultado.innerHTML = `
            <h3>${escaparHTML(traducirTexto(nombre))}</h3>

            <p>${traducirTexto("Todavía no tenemos información del calendario para este cultivo.")}</p>

            <p>${traducirTexto("Consultá las recomendaciones agrícolas de tu región antes de sembrar.")}</p>
        `;
        return;
    }

    const meses = idioma === "gn" ? dato.mesesGn : dato.meses;
    const consejo = idioma === "gn" ? dato.consejoGn : dato.consejo;

    resultado.innerHTML = `
        <h3>${escaparHTML(traducirTexto(nombre))}</h3>

        <p>
            <strong>${traducirTexto("Período orientativo:")}</strong>
            ${meses}
        </p>

        <p>
            <strong>${traducirTexto("Recomendación:")}</strong>
            ${consejo}
        </p>

        <p>
            <em>${traducirTexto("La época puede variar según la zona y las condiciones climáticas.")}</em>
        </p>
    `;
}

window.consultarCalendario = consultarCalendario;

// Rotación de cultivos
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
        resultado.innerHTML = `
            <p>${traducirTexto("Seleccioná el cultivo anterior.")}</p>
        `;
        return;
    }

    const familia = familias[nombre];
    const opciones = alternativas[familia];

    if (!opciones) {
        resultado.innerHTML = `
            <p>${traducirTexto("No hay alternativas registradas para este cultivo.")}</p>
        `;
        return;
    }

    resultado.innerHTML = `
        <h3>
            ${traducirTexto("Alternativas después de ")}
            ${escaparHTML(traducirTexto(nombre))}
        </h3>

        <p>
            <strong>${traducirTexto("Familia del cultivo anterior:")}</strong>
            ${traducirTexto(familia)}
        </p>

        <p>${traducirTexto("Algunas alternativas para evaluar:")}</p>

        <ul>
            ${opciones.map(x => `
                <li>${escaparHTML(traducirTexto(x))}</li>
            `).join("")}
        </ul>

        <p>
            ${traducirTexto("Estas son sugerencias generales. Antes de decidir, verificá las condiciones del suelo, las enfermedades presentes y las recomendaciones agronómicas locales.")}
        </p>
    `;
}

window.consultarRotacion = consultarRotacion;

// Mensajes según la etapa del cultivo
function obtenerMensajeEtapa(c) {
    const mensajes = {
        "Preparación del suelo": "Recordá preparar y revisar el terreno.",
        "Siembra": "Realizá el seguimiento de la siembra.",
        "Germinación": "Observá los primeros brotes y controlá la humedad.",
        "Crecimiento": "Revisá el crecimiento y el estado de las plantas.",
        "Floración": "Observá la floración y revisá posibles plagas.",
        "Cosecha": "Verificá si el cultivo está listo para cosechar."
    };

    return traducirTexto(
        mensajes[c.etapa] || "Revisá el estado de tu cultivo."
    );
}

// Generar avisos
function generarAvisos() {
    return cultivos.map(c => ({
        titulo: traducirTexto("Seguimiento de ") + traducirTexto(c.nombre),
        mensaje: obtenerMensajeEtapa(c)
    }));
}

// Mostrar avisos
function mostrarNotificaciones() {
    const lista = document.getElementById("listaNotificaciones");

    if (!lista) return;

    const avisos = generarAvisos();

    if (!avisos.length) {
        lista.innerHTML = `
            <p>${traducirTexto("No tenés avisos por el momento.")}</p>

            <p>${traducirTexto("Cuando registres un cultivo, aparecerán aquí tus recordatorios.")}</p>
        `;
        return;
    }

    lista.innerHTML = "";

    avisos.forEach(a => {
        const el = document.createElement("div");

        el.className = "aviso";

        el.innerHTML = `
            <strong>${escaparHTML(a.titulo)}</strong>
            <p>${escaparHTML(a.mensaje)}</p>
        `;

        lista.appendChild(el);
    });
}

// Actualizar todas las pantallas
function actualizarPantalla() {
    mostrarCultivos();
    actualizarInicio();
    mostrarNotificaciones();
    actualizarOpcionesCalendario();
}

// Aplicar el idioma al iniciar
aplicarIdioma();

// Mostrar la pantalla de bienvenida y luego abrir el sistema
window.addEventListener("load", function () {
    const bienvenida = document.getElementById("pantallaBienvenida");

    if (bienvenida) {
        setTimeout(function () {
            bienvenida.classList.add("salir");

            setTimeout(function () {
                bienvenida.remove();
            }, 550);
        }, 1400);
    }
});
