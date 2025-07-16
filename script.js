const materias = [
  {
    nombre: "Marco Filosófico, Legal y Organizativo del Sistema Educativo Mexicano",
    id: "marco",
    abre: ["desigualdades"]
  },
  {
    nombre: "Desigualdades: Educativa, Socioeconómica y Política de México",
    id: "desigualdades",
    requisitos: ["marco"],
    abre: ["sostenibilidad"]
  },
  {
    nombre: "Educar en la Sostenibilidad para una Vida Saludable",
    id: "sostenibilidad",
    requisitos: ["desigualdades"]
  },
  {
    nombre: "Telesecundaria en México: Desafíos para la Igualdad y la Inclusión",
    id: "telesecundaria",
    abre: ["introduccion", "pensamiento"]
  },
  {
    nombre: "Introducción a la Enseñanza en la Escuela Telesecundaria",
    id: "introduccion",
    requisitos: ["telesecundaria"],
    abre: ["tecnologia"]
  },
  {
    nombre: "Tecnología y Modelos de Aprendizaje Emergente",
    id: "tecnologia",
    requisitos: ["introduccion", "saberes"]
  },
  {
    nombre: "Saberes Digitales para una Docencia Híbrida",
    id: "saberes",
    abre: ["tecnologia"]
  },
  {
    nombre: "Adolescencia. Crecimiento y Comportamiento",
    id: "crecimiento",
    abre: ["emocion", "neuro"]
  },
  {
    nombre: "Adolescencia. Emoción y Convivencia Sana",
    id: "emocion",
    requisitos: ["crecimiento"],
    abre: ["procesos"]
  },
  {
    nombre: "Adolescencia. Procesos Cognitivos",
    id: "procesos",
    requisitos: ["emocion", "neuro"],
    abre: ["diversidad"]
  },
  {
    nombre: "Neurociencias y Aprendizaje",
    id: "neuro",
    requisitos: ["crecimiento"],
    abre: ["diversidad"]
  },
  {
    nombre: "Adolescencia. Atención a la Diversidad y Situaciones de Riesgo",
    id: "diversidad",
    requisitos: ["procesos", "neuro"]
  },
  {
    nombre: "Observación y Análisis de Prácticas y Contextos Escolares",
    id: "observacion",
    abre: ["practica"]
  },
  {
    nombre: "Práctica Docente en el Aula",
    id: "practica",
    requisitos: ["observacion"],
    abre: ["mediacion", "historia", "civica"]
  },
  {
    nombre: "Mediación Pedagógica y Trabajo Docente",
    id: "mediacion",
    requisitos: ["practica"],
    abre: ["innovacion", "proyectos"]
  },
  {
    nombre: "Innovación para una Docencia Incluyente",
    id: "innovacion",
    requisitos: ["mediacion"]
  }
  // Puedes seguir agregando las demás materias con sus conexiones
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

