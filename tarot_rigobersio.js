// proyecto personal

// Arcanos mayores del tarot de Marsella


const arcanosMayores = [
  '0_El Loco',
  '1_El Mago',
  '2_La Sacerdotisa',
  '3_La Emperatriz',
  '4_El Emperador',
  '5_El Sumo Sacerdote',
  '6_Los Enamorados',
  '7_El Carro',
  '8_La Justicia',
  '9_El Ermitaño',
  '10_La Rueda de la Fortuna',
  '11_La Fuerza',
  '12_El Colgado',
  '13_La Muerte',
  '14_La Templanza',
  '15_El Diablo',
  '16_La Torre',
  '17_La Estrella',
  '18_La Luna',
  '19_El Sol',
  '20_El Juicio',
  '21_El Mundo',
];


const arcanosMayores = {
  "El Loco": {
    numero: 0,
    nombre: "El Loco",
    descripcion: {
      pasado: "Incertidumbre, locura y cambios radicales.",
      presente: "Falta de control y responsabilidad, actitud impulsiva.",
      futuro: "Riesgos, aventuras y nuevas experiencias."
    },
    descripcionInvertida: {
      pasado: "Falta de dirección, locura desenfrenada.",
      presente: "Peligro de locura y falta de autocontrol.",
      futuro: "Riesgos innecesarios y falta de planificación."
    }
  },
  "El Mago": {
    numero: 1,
    nombre: "El Mago",
    descripcion: {
      pasado: "Habilidad y destreza en resolver problemas.",
      presente: "Creatividad y habilidades para lograr metas.",
      futuro: "Éxito en proyectos y nuevos comienzos."
    },
    descripcionInvertida: {
      pasado: "Falta de habilidades y engaño.",
      presente: "Fraude y manipulación, falta de confianza.",
      futuro: "Fracaso y obstáculos en proyectos."
    }
  },
  "La Sacerdotisa": {
    numero: 2,
    nombre: "La Sacerdotisa",
    descripcion: {
      pasado: "Intuición y sabiduría en decisiones importantes.",
      presente: "Misterios y secretos por descubrir.",
      futuro: "Misterios y conocimientos ocultos revelados."
    },
    descripcionInvertida: {
      pasado: "Falta de intuición y sabiduría, error en decisiones importantes.",
      presente: "Falta de perspicacia y confusión en situaciones difíciles.",
      futuro: "Secretos oscuros revelados, peligro de engaño y manipulación."
    }
  },
  "La Emperatriz": {
    numero: 3,
    nombre: "La Emperatriz",
    descripcion: {
      pasado: "Crecimiento y abundancia en lo material y espiritual.",
      presente: "Fertilidad y armonía en las relaciones personales.",
      futuro: "Prosperidad en todos los aspectos de la vida."
    },
    descripcionInvertida: {
      pasado: "Falta de crecimiento y abundancia, estancamiento.",
      presente: "Problemas en las relaciones personales, falta de armonía.",
      futuro: "Fracaso en proyectos y obstáculos en el camino."
    }
  },
El_Emperador: {
numero: 4,
nombre: "El Emperador",
descripcion: {
pasado: "Fuerza y liderazgo en la toma de decisiones.",
presente: "Control y estabilidad en la vida.",
futuro: "Éxito en los proyectos y en la vida profesional."
},
descripcionInvertida: {
pasado: "Falta de liderazgo y autoridad, toma de decisiones débil.",
presente: "Falta de control y estabilidad en la vida.",
futuro: "Fracaso en proyectos y obstáculos en el camino."
}
},
El_Sumo_Sacerdote: {
numero: 5,
nombre: "El Sumo Sacerdote",
descripcion: {
pasado: "Aprendizaje y enseñanza de los valores tradicionales.",
presente: "Conexión con lo divino y la espiritualidad.",
futuro: "Guía espiritual y sabiduría en decisiones importantes."
},
descripcionInvertida: {
pasado: "Falta de conexión con los valores tradicionales, rebeldía.",
presente: "Bloqueo espiritual y falta de guía.",
futuro: "Engaño y manipulación en decisiones importantes."
}
},
Los_Enamorados: {
numero: 6,
nombre: "Los Enamorados",
descripcion: {
pasado: "Elección importante en el amor y en la vida.",
presente: "Amor y pasión, elección difícil.",
futuro: "Unión y equilibrio en el amor y en la vida."
},
descripcionInvertida: {
pasado: "Elección equivocada en el amor, conflictos y desamor.",
presente: "Indecisión y falta de compromiso en el amor.",
futuro: "Separación y desequilibrio en el amor y en la vida."
}
},
El_Carro: {
numero: 7,
nombre: "El Carro",
descripcion: {
pasado: "Victoria y éxito gracias al esfuerzo y la determinación.",
presente: "Avance y progreso gracias a la acción decidida.",
futuro: "Superación de obstáculos y logro de metas importantes."
},
descripcionInvertida: {
pasado: "Falta de determinación y dirección en la vida.",
presente: "Estancamiento y dificultades para avanzar.",
futuro: "Fracaso y falta de logros importantes."
}
},
La_Justicia: {
numero: 8,
nombre: "La Justicia",
descripcion: {
pasado: "Equilibrio y armonía en la vida.",
presente: "Justicia y equidad en las decisiones importantes.",
futuro: "Recuperación de lo justo y equilibrado."
},
descripcionInvertida: {
pasado: "Injusticia y desequilibrio en la vida.",
presente: "Falta de equidad y de justicia en las decisiones importantes.",
futuro: "Castigo por acciones injustas y deshonestas."
}
},
El_Ermitaño: {
numero: 9,
nombre: "El Ermitaño",
descripcion: {
pasado: "Búsqueda de la sabiduría y la introspección.",
presente: "Retiro y soledad para encontrar respuestas importantes.",
futuro: "Iluminación y entendimiento gracias a la introspección."
},
descripcionInvertida: {
pasado: "Soledad y aislamiento innecesario.",
presente: "Aislamiento y falta de contacto con los demás.",
futuro: "Confusión y desorientación debido a la falta de introspección."
}
},
La_Rueda_de_la_Fortuna: {
numero: 10,
nombre: "La Rueda de la Fortuna",
descripcion: {
pasado: "Ciclos de altibajos y cambios inesperados en la vida.",
presente: "Posibilidad de cambios positivos y de suerte.",
futuro: "Transformación y mejora gracias a la suerte y al cambio."
},
descripcionInvertida: {
pasado: "Ciclos de altibajos y de cambios negativos.",
presente: "Falta de cambios positivos y de suerte.",
futuro: "Resistencia al cambio y estancamiento."
}
},
La_Fuerza: {
numero: 11,
nombre: "La Fuerza",
descripcion: {
pasado: "Fuerza interior y dominio de las emociones.",
presente: "Coraje y fortaleza ante situaciones difíciles.",
futuro: "Éxito y dominio gracias a la fortaleza interior."
},
descripcionInvertida: {
pasado: "Falta de control emocional y debilidad interior.",
presente: "Miedo y falta de coraje para enfrentar situaciones difíciles.",
futuro: "Fracaso y falta de logros debido a la debilidad interior."
}
},
El_Colgado: {
numero: 12,
nombre: "El Colgado",
descripcion: {
pasado: "Sacrificio, renuncia y sufrimiento por una causa mayor.",
presente: "Estancamiento, falta de avance y dificultades.",
futuro: "Cambio de perspectiva, nueva visión del mundo y liberación."
},
descripcionInvertida: {
pasado: "Falta de sacrificio y renuncia.",
presente: "Resistencia al cambio y aferramiento al pasado.",
futuro: "Imposibilidad de deshacerse de situaciones o personas tóxicas."
}
},
La_Muerte: {
numero: 13,
nombre: "La Muerte",
descripcion: {
pasado: "Final de un ciclo, cambio importante, liberación de lo que no sirve.",
presente: "Transformación, renovación, cambio profundo.",
futuro: "Renacimiento, nueva oportunidad, cambio positivo."
},
descripcionInvertida: {
pasado: "Estancamiento, temor al cambio, resistencia al final de un ciclo.",
presente: "Bloqueo, depresión, dificultad para emprender cambios.",
futuro: "Miedo al cambio, resistencia al renacimiento, dificultades para superar crisis."
}
},
La_Templanza: {
numero: 14,
nombre: "La Templanza",
descripcion: {
pasado: "Equilibrio, armonía moderación.",
presente: "Paz interior, serenidad, paciencia",
futuro: "Acción, reconciliación, unidad."
},
descripcionInvertida: {
pasado: "Desarmonía, desequilibrio, extremismo.",
presente: "Impaciencia, falta de moderación, exceso de emociones.",
futuro: "Falta de armonía, dificultades para reconciliación y equilibrio interno."
}
},
El_Diablo: {
numero: 15,
nombre: "El Diablo",
descripcion: {
pasado: "Falta de control y tentaciones peligrosas",
presente: "Obsesiones, adicciones y dependencias.",
futuro: "Atracción por lo prohibido y peligroso.",
},
descripcionInvertida: {
pasado: "Superación de adicciones y malas influencias.",
presente: "Posibilidad de liberarse de las ataduras y caer en la tentación",
futuro: "Riesgo de engaños y consecuencias negativas",
}
},
La_Torre: {
numero: 16,
nombre: "La Torre",
descripcion: {
pasado: "Crisis y conflictos que cambian la vida",
presente: "Destrucción de estructuras y caída de certezas.",
futuro: "Sacrificio y dolor que llevan a la renovación."
},
descripcionInvertida: {
pasado: "Posibilidad de superar crisis y obstáculos.",
presente: "Evitación del cambio y resistencia al desmoronamiento.",
futuro: "Posible caída más intensa y dolorosa."
}
},
La_Estrella: {
numero: 17,
nombre: "La Estrella",
descripcion: {
pasado: "Esperanza y visión de un futuro mejor.",
presente: "Inacción y fortaleza interior.",
futuro: "Nuevas oportunidades y crecimiento espiritual."
},
descripcionInvertida: {
pasado: "Falta de esperanza y dirección en la vida.",
presente: "Desorientación y falta de inspiración.",
futuro: "Falta de oportunidades y espiritualidad."
}
},
La_Luna: {
numero: 18,
nombre: "La Luna",
descripcion: {
pasado: "Incertidumbre y emociones ocultas.",
presente: "Miedos e incertidumbres que deben ser enfrentados.",
futuro: "Mayor autoconocimiento y superación de miedos."
},
descripcionInvertida: {
pasado: "Miedos e inseguridades han estado gobernando tu vida.",
presente: "Engaños y falta de claridad emocional.",
futuro: "El enfrentamiento de miedos y la superación de obstáculos."
}
},
El_Sol: {
numero: 19,
nombre: "El Sol",
descripcion: {
pasado: "Alegría y satisfacción.",
presente: "Felicidad y éxito.",
futuro: "Logros y prosperidad."
},
descripcionInvertida: {
pasado: "Falta de alegría y satisfacción en el pasado.",
presente: "Falta de confianza y éxito en este momento.",
futuro: "Dificultades en la consecución de logros y prosperidad."
}
},
El_Juicio: {
numero: 20,
nombre: "El Juicio",
descripcion: {
pasado: "Cambio de vida y renovación espiritual.",
presente: "Necesidad de tomar una decisión importante.",
futuro: "Renovación y transformación personal."
},
descripcionInvertida: {
pasado: "Miedo al cambio y falta de renovación espiritual.",
presente: "Falta de decisión y falta de claridad en el camino a seguir.",
futuro: "Resistencia al cambio y estancamiento personal."
}
},
El_Mundo: {
numero: 21,
nombre: "El Mundo",
descripcion: {
pasado: "Cierre de ciclos y culminación de proyectos importantes.",
presente: "Éxito y satisfacción personal.",
futuro: "Logros y éxito en el ámbito personal y profesional."
},
descripcionInvertida: {
pasado: "Falta de culminación de proyectos y sensación de estancamiento.",
presente: "Falta de éxito y de sensación de logro personal.",
futuro: "Dificultades para alcanzar metas personales y profesionales."
}
}
}
