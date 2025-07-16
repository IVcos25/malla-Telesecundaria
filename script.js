// script.js (completo con todas las materias y relaciones)

const materias = [
  // PRIMER AÑO
  // Semestre I
  { nombre: "Marco Filosófico, Legal y Organizativo del Sistema Educativo Mexicano", id: "marco", abre: ["desigualdades"] },
  { nombre: "Telesecundaria en México: Desafíos para la Igualdad y la Inclusión", id: "telesecundaria", abre: ["introduccion", "pensamiento"] },
  { nombre: "Adolescencia. Crecimiento y Comportamiento", id: "crecimiento", abre: ["emocion", "neuro"] },
  { nombre: "Herramientas para la Observación y Análisis de Prácticas y Contextos Escolares", id: "herramientas", abre: ["observacion"] },
  { nombre: "Propósitos, Contenidos y Enfoques para la Planeación en Telesecundaria", id: "propositos", abre: ["planeacion", "espanol", "matematicas"] },
  { nombre: "Habilidades Profesionales para la Docencia", id: "habilidades" },
  { nombre: "Inglés. Comunicación Básica y Principios Didácticos", id: "ingles1", abre: ["ingles2"] },
  { nombre: "Saberes Digitales para una Docencia Híbrida", id: "saberes", abre: ["tecnologia"] },

  // Semestre II
  { nombre: "Desigualdades: Educativa, Socioeconómica y Política de México", id: "desigualdades", requisitos: ["marco"], abre: ["sostenibilidad"] },
  { nombre: "Introducción a la Enseñanza en la Escuela Telesecundaria", id: "introduccion", requisitos: ["telesecundaria"], abre: ["tecnologia"] },
  { nombre: "Adolescencia. Emoción y Convivencia Sana", id: "emocion", requisitos: ["crecimiento"], abre: ["procesos"] },
  { nombre: "Observación y Análisis de Prácticas y Contextos Escolares", id: "observacion", requisitos: ["herramientas"], abre: ["practica"] },
  { nombre: "Planeación y Evaluación", id: "planeacion", requisitos: ["propositos"], abre: ["biologia"] },
  { nombre: "Didáctica del Español: Lengua Materna", id: "espanol", requisitos: ["propositos"], abre: ["practicas"] },
  { nombre: "Didáctica de las Matemáticas", id: "matematicas", requisitos: ["propositos"], abre: ["problemas"] },
  { nombre: "Inglés. Conversaciones Elementales y Planeación Didáctica", id: "ingles2", requisitos: ["ingles1"], abre: ["ingles3"] },

  // SEGUNDO AÑO
  // Semestre III
  { nombre: "Neurociencias y Aprendizaje", id: "neuro", requisitos: ["crecimiento"], abre: ["diversidad"] },
  { nombre: "Adolescencia. Procesos Cognitivos", id: "procesos", requisitos: ["emocion"], abre: ["diversidad"] },
  { nombre: "Práctica Docente en el Aula", id: "practica", requisitos: ["observacion"], abre: ["mediacion", "historia", "civica"] },
  { nombre: "Didáctica de la Biología", id: "biologia", requisitos: ["planeacion"], abre: ["fisica"] },
  { nombre: "Español y Prácticas Sociales del Lenguaje", id: "practicas", requisitos: ["espanol"] },
  { nombre: "Matemáticas y Resolución de Problemas", id: "problemas", requisitos: ["matematicas"] },
  { nombre: "Inglés. Intercambio de Información e Ideas y Práctica Docente", id: "ingles3", requisitos: ["ingles2"], abre: ["ingles4"] },
  { nombre: "Tecnología y Modelos de Aprendizaje Emergente", id: "tecnologia", requisitos: ["introduccion", "saberes"] },

  // Semestre IV
  { nombre: "Educar en la Sostenibilidad para una Vida Saludable", id: "sostenibilidad", requisitos: ["desigualdades"], abre: ["proyectos", "fisica"] },
  { nombre: "Pensamiento Pedagógico", id: "pensamiento", requisitos: ["telesecundaria"], abre: ["gestion"] },
  { nombre: "Adolescencia. Atención a la Diversidad y Situaciones de Riesgo", id: "diversidad", requisitos: ["procesos", "neuro"] },
  { nombre: "Mediación Pedagógica y Trabajo Docente", id: "mediacion", requisitos: ["practica"], abre: ["innovacion", "proyectos"] },
  { nombre: "Didáctica de la Física", id: "fisica", requisitos: ["biologia"], abre: ["quimica"] },
  { nombre: "Didáctica de la Formación Cívica y Ética", id: "civica", requisitos: ["practica"], abre: ["inclusiva", "geografia"] },
  { nombre: "Didáctica de la Historia", id: "historia", requisitos: ["practica"], abre: ["inclusiva", "geografia"] },
  { nombre: "Inglés. Fortalecimiento de la Comunicación y Fundamentos de la Enseñanza", id: "ingles4", requisitos: ["ingles3"], abre: ["ingles5", "lenseñas"] },

  // TERCER AÑO
  // Semestre V
  { nombre: "Educación Inclusiva e Interculturalidad Crítica", id: "inclusiva", requisitos: ["historia", "civica"], abre: ["artes", "cognicion", "multigrado"] },
  { nombre: "Gestión del Centro Educativo", id: "gestion", requisitos: ["pensamiento"], abre: ["investigacion"] },
  { nombre: "Innovación para una Docencia Incluyente", id: "innovacion", requisitos: ["mediacion"], abre: ["proyecto", "cognicion", "educacionfisica", "practicasvinculacion"] },
  { nombre: "Didáctica de la Geografía", id: "geografia", requisitos: ["historia", "civica"] },
  { nombre: "Didáctica de la Química", id: "quimica", requisitos: ["fisica"] },
  { nombre: "Pedagogía por Proyectos", id: "proyectos", requisitos: ["sostenibilidad", "mediacion"], abre: ["artes", "multigrado"] },
  { nombre: "Inglés. Nuevas Perspectivas Globales y Enfoque Comunicativo", id: "ingles5", requisitos: ["ingles4"], abre: ["ingles6"] },
  { nombre: "Sistema Alternativo de Comunicación: Lengua de Señas Mexicana", id: "lenseñas", requisitos: ["ingles4"] },

  // Semestre VI
  { nombre: "Investigación para la Docencia", id: "investigacion", requisitos: ["gestion"], abre: ["seminario1"] },
  { nombre: "Proyecto de Intervención Docente", id: "proyecto", requisitos: ["innovacion"], abre: ["funcion", "vidaescolar", "seminario1"] },
  { nombre: "Didáctica de las Artes", id: "artes", requisitos: ["inclusiva", "proyectos"] },
  { nombre: "Análisis y Didáctica en las Alteraciones de la Cognición en el Aprendizaje", id: "cognicion", requisitos: ["inclusiva", "innovacion"] },
  { nombre: "Educación Física para una Vida Saludable", id: "educacionfisica", requisitos: ["sostenibilidad", "innovacion"] },
  { nombre: "La Enseñanza en la Escuela Multigrado", id: "multigrado", requisitos: ["inclusiva", "proyectos"] },
  { nombre: "Inglés. Comunicación Independiente y Recursos Integrales", id: "ingles6", requisitos: ["ingles5"] },
  { nombre: "Prácticas Pedagógicas. Integración en la Vinculación Telesecundaria y Comunidad", id: "practicasvinculacion", requisitos: ["innovacion"], abre: ["funcion"] },

  // CUARTO AÑO
  // Semestre VII
  { nombre: "Función y Prácticas Educativas para la Vinculación Telesecundaria y Comunidad", id: "funcion", requisitos: ["practicasvinculacion", "proyecto"], abre: ["identidad"] },
  { nombre: "Práctica Profesional y Vida Escolar en la Educación Obligatoria", id: "vidaescolar", requisitos: ["proyecto"], abre: ["servicio"] },
  { nombre: "Seminario de Titulación. Construcción del Documento de Titulación", id: "seminario1", requisitos: ["investigacion", "proyecto"], abre: ["seminario2"] },

  // Semestre VIII
  { nombre: "Innovación para la Identidad Profesional y Gestión Escolar ante los Desafíos Futuros de la Escuela Telesecundaria", id: "identidad", requisitos: ["funcion"] },
  { nombre: "Aprendizaje en el Servicio", id: "servicio", requisitos: ["vidaescolar"] },
  { nombre: "Seminario de Titulación. Finalización del Documento de Titulación", id: "seminario2", requisitos: ["seminario1"] }
];

const malla = document.getElementById("malla");
const mapaMaterias = new Map();

materias.forEach((m) => {
  const div = document.createElement("div");
  div.className = "materia bloqueada";
  div.id = m.id;
  div.textContent = m.nombre;
  div.onclick = () => aprobar(m);
  mapaMaterias.set(m.id, div);
  malla.appendChild(div);
});

function actualizarEstado() {
  materias.forEach((m) => {
    const div = mapaMaterias.get(m.id);
    const requisitosCumplidos = !m.requisitos || m.requisitos.every(r => mapaMaterias.get(r).classList.contains("aprobada"));
    if (requisitosCumplidos && !div.classList.contains("aprobada")) {
      div.classList.remove("bloqueada");
      div.classList.add("activa");
    }
  });
}

function aprobar(materia) {
  const div = mapaMaterias.get(materia.id);
  if (div.classList.contains("bloqueada")) return;
  div.classList.remove("activa");
  div.classList.add("aprobada");
  if (materia.abre) {
    materia.abre.forEach((id) => {
      const desbloquear = mapaMaterias.get(id);
      if (desbloquear) desbloquear.classList.remove("bloqueada");
    });
  }
  actualizarEstado();
}

actualizarEstado();
