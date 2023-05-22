// proyecto personal

// Arcanos mayores del tarot de Marsella


var arcanosMayores__ = [
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


var arcanosMayores = {
  "El Loco": {
    numero: 0,
    nombre: "El Loco",
    descripcion: {
      pasado: "El Loco: Incertidumbre, locura y cambios radicales.",
      presente: "El Loco: Falta de control y responsabilidad, actitud impulsiva.",
      futuro: "El Loco: Riesgos, aventuras y nuevas experiencias."
    },
    descripcionInvertida: {
      pasado: "El Loco (carta invertida): Falta de dirección, locura desenfrenada.",
      presente: "El Loco (carta invertida): Peligro de locura y falta de autocontrol.",
      futuro: "El Loco (carta invertida): Riesgos innecesarios y falta de planificación."
    }
  },
  "El Mago": {
    numero: 1,
    nombre: "El Mago",
    descripcion: {
      pasado: "El Mago: Habilidad y destreza en resolver problemas.",
      presente: "El Mago: Creatividad y habilidades para lograr metas.",
      futuro: "El Mago: Éxito en proyectos y nuevos comienzos."
    },
    descripcionInvertida: {
      pasado: "El Mago (carta invertida): Falta de habilidades y engaño.",
      presente: "El Mago (carta invertida): Fraude y manipulación, falta de confianza.",
      futuro: "El Mago (carta invertida): Fracaso y obstáculos en proyectos."
    }
  },
  "La Sacerdotisa": {
    numero: 2,
    nombre: "La Sacerdotisa",
    descripcion: {
      pasado: "La Sacerdotisa: Intuición y sabiduría en decisiones importantes.",
      presente: "La Sacerdotisa: Misterios y secretos por descubrir.",
      futuro: "La Sacerdotisa: Misterios y conocimientos ocultos revelados."
    },
    descripcionInvertida: {
      pasado: "La Sacerdotisa (carta invertida): Falta de intuición y sabiduría, error en decisiones importantes.",
      presente: "La Sacerdotisa (carta invertida): Falta de perspicacia y confusión en situaciones difíciles.",
      futuro: "La Sacerdotisa (carta invertida): Secretos oscuros revelados, peligro de engaño y manipulación."
    }
  },
  "La Emperatriz": {
    numero: 3,
    nombre: "La Emperatriz",
    descripcion: {
      pasado: "La Emperatriz: Crecimiento y abundancia en lo material y espiritual.",
      presente: "La Emperatriz: Fertilidad y armonía en las relaciones personales.",
      futuro: "La Emperatriz: Prosperidad en todos los aspectos de la vida."
    },
    descripcionInvertida: {
      pasado: "La Emperatriz (carta invertida):Falta de crecimiento y abundancia, estancamiento.",
      presente: "La Emperatriz (carta invertida):Problemas en las relaciones personales, falta de armonía.",
      futuro: "La Emperatriz (carta invertida):Fracaso en proyectos y obstáculos en el camino."
    }
  },
  El_Emperador: {
    numero: 4,
    nombre: "El Emperador",
    descripcion: {
      pasado: "El Emperador: Fuerza y liderazgo en la toma de decisiones.",
      presente: "El Emperador: Control y estabilidad en la vida.",
      futuro: "El Emperador: Éxito en los proyectos y en la vida profesional."
    },
    descripcionInvertida: {
      pasado: "El Emperador (carta invertida): Falta de liderazgo y autoridad, toma de decisiones débil.",
      presente: "El Emperador (carta invertida): Falta de control y estabilidad en la vida.",
      futuro: "El Emperador (carta invertida): Fracaso en proyectos y obstáculos en el camino."
    }
  },
  El_Sumo_Sacerdote: {
    numero: 5,
    nombre: "El Sumo Sacerdote",
    descripcion: {
      pasado: "El Sumo Sacerdote: Aprendizaje y enseñanza de los valores tradicionales.",
      presente: "El Sumo Sacerdote: Conexión con lo divino y la espiritualidad.",
      futuro: "El Sumo Sacerdote: Guía espiritual y sabiduría en decisiones importantes."
    },
    descripcionInvertida: {
      pasado: "El Sumo Sacerdote (carta invertida): Falta de conexión con los valores tradicionales, rebeldía.",
      presente: "El Sumo Sacerdote (carta invertida): Bloqueo espiritual y falta de guía.",
      futuro: "El Sumo Sacerdote (carta invertida): Engaño y manipulación en decisiones importantes."
    }
  },
  Los_Enamorados: {
    numero: 6,
    nombre: "Los Enamorados",
    descripcion: {
      pasado: "Los Enamorados: Elección importante en el amor y en la vida.",
      presente: "Los Enamorados: Amor y pasión, elección difícil.",
      futuro: "Los Enamorados: Unión y equilibrio en el amor y en la vida."
    },
    descripcionInvertida: {
      pasado: "Los Enamorados (carta invertida): Elección equivocada en el amor, conflictos y desamor.",
      presente: "Los Enamorados (carta invertida): Indecisión y falta de compromiso en el amor.",
      futuro: "Los Enamorados (carta invertida): Separación y desequilibrio en el amor y en la vida."
    }
  },
  El_Carro: {
    numero: 7,
    nombre: "El Carro",
    descripcion: {
      pasado: "El Carro: Victoria y éxito gracias al esfuerzo y la determinación.",
      presente: "El Carro: Avance y progreso gracias a la acción decidida.",
      futuro: "El Carro: Superación de obstáculos y logro de metas importantes."
    },
    descripcionInvertida: {
      pasado: "El Carro (carta invertida): Falta de determinación y dirección en la vida.",
      presente: "El Carro (carta invertida): Estancamiento y dificultades para avanzar.",
      futuro: "El Carro (carta invertida): Fracaso y falta de logros importantes."
    }
  },
  La_Justicia: {
    numero: 8,
    nombre: "La Justicia",
    descripcion: {
      pasado: "La Justicia: Equilibrio y armonía en la vida.",
      presente: "La Justicia: Justicia y equidad en las decisiones importantes.",
      futuro: "La Justicia: Recuperación de lo justo y equilibrado."
    },
    descripcionInvertida: {
      pasado: "La Justicia (carta invertida): Injusticia y desequilibrio en la vida.",
      presente: "La Justicia (carta invertida): Falta de equidad y de justicia en las decisiones importantes.",
      futuro: "La Justicia (carta invertida): Castigo por acciones injustas y deshonestas."
    }
  },
  El_Ermitaño: {
    numero: 9,
    nombre: "El Ermitaño",
    descripcion: {
      pasado: "El Ermitaño: Búsqueda de la sabiduría y la introspección.",
      presente: "El Ermitaño: Retiro y soledad para encontrar respuestas importantes.",
      futuro: "El Ermitaño: Iluminación y entendimiento gracias a la introspección."
    },
    descripcionInvertida: {
      pasado: "El Ermitaño (carta invertida): Soledad y aislamiento innecesario.",
      presente: "El Ermitaño (carta invertida): Aislamiento y falta de contacto con los demás.",
      futuro: "El Ermitaño (carta invertida): Confusión y desorientación debido a la falta de introspección."
    }
  },
  La_Rueda_de_la_Fortuna: {
    numero: 10,
    nombre: "La Rueda de la Fortuna",
    descripcion: {
      pasado: "La Rueda de la Fortuna: Ciclos de altibajos y cambios inesperados en la vida.",
      presente: "La Rueda de la Fortuna: Posibilidad de cambios positivos y de suerte.",
      futuro: "La Rueda de la Fortuna: Transformación y mejora gracias a la suerte y al cambio."
    },
    descripcionInvertida: {
      pasado: "La Rueda de la Fortuna (carta invertida): Ciclos de altibajos y de cambios negativos.",
      presente: "La Rueda de la Fortuna (carta invertida): Falta de cambios positivos y de suerte.",
      futuro: "La Rueda de la Fortuna (carta invertida): Resistencia al cambio y estancamiento."
    }
  },
  La_Fuerza: {
    numero: 11,
    nombre: "La Fuerza",
    descripcion: {
      pasado: "La Fuerza: Fuerza interior y dominio de las emociones.",
      presente: "La Fuerza: Coraje y fortaleza ante situaciones difíciles.",
      futuro: "La Fuerza: Éxito y dominio gracias a la fortaleza interior."
    },
    descripcionInvertida: {
      pasado: "La Fuerza (carta invertida): Falta de control emocional y debilidad interior.",
      presente: "La Fuerza (carta invertida): Miedo y falta de coraje para enfrentar situaciones difíciles.",
      futuro: "La Fuerza (carta invertida): Fracaso y falta de logros debido a la debilidad interior."
    }
  },
  El_Colgado: {
    numero: 12,
    nombre: "El Colgado",
    descripcion: {
      pasado: "El Colgado: Sacrificio, renuncia y sufrimiento por una causa mayor.",
      presente: "El Colgado: Estancamiento, falta de avance y dificultades.",
      futuro: "El Colgado: Cambio de perspectiva, nueva visión del mundo y liberación."
    },
    descripcionInvertida: {
      pasado: "El Colgado (carta invertida): Falta de sacrificio y renuncia.",
      presente: "El Colgado (carta invertida): Resistencia al cambio y aferramiento al pasado.",
      futuro: "El Colgado (carta invertida): Imposibilidad de deshacerse de situaciones o personas tóxicas."
    }
  },
  La_Muerte: {
    numero: 13,
    nombre: "La Muerte",
    descripcion: {
      pasado: "La Muerte: Final de un ciclo, cambio importante, liberación de lo que no sirve.",
      presente: "La Muerte: Transformación, renovación, cambio profundo.",
      futuro: "La Muerte: Renacimiento, nueva oportunidad, cambio positivo."
    },
    descripcionInvertida: {
      pasado: "La Muerte (carta invertida): Estancamiento, temor al cambio, resistencia al final de un ciclo.",
      presente: "La Muerte (carta invertida): Bloqueo, depresión, dificultad para emprender cambios.",
      futuro: "La Muerte (carta invertida): Miedo al cambio, resistencia al renacimiento, dificultades para superar crisis."
    }
  },
  La_Templanza: {
    numero: 14,
    nombre: "La Templanza",
    descripcion: {
      pasado: "La Templanza: Equilibrio, armonía moderación.",
      presente: "La Templanza: Paz interior, serenidad, paciencia",
      futuro: "La Templanza: Acción, reconciliación, unidad."
    },
    descripcionInvertida: {
      pasado: "La Templanza (carta invertida): Desarmonía, desequilibrio, extremismo.",
      presente: "La Templanza (carta invertida): Impaciencia, falta de moderación, exceso de emociones.",
      futuro: "La Templanza (carta invertida): Falta de armonía, dificultades para reconciliación y equilibrio interno."
    }
  },
  El_Diablo: {
    numero: 15,
    nombre: "El Diablo",
    descripcion: {
      pasado: "El Diablo: Falta de control y tentaciones peligrosas",
      presente: "El Diablo: Obsesiones, adicciones y dependencias.",
      futuro: "El Diablo: Atracción por lo prohibido y peligroso.",
},
descripcionInvertida: {
      pasado: "El Diablo (carta invertida): Superación de adicciones y malas influencias.",
      presente: "El Diablo (carta invertida): Posibilidad de liberarse de las ataduras y caer en la tentación",
      futuro: "El Diablo (carta invertida): Riesgo de engaños y consecuencias negativas",
    }
  },
  La_Torre: {
    numero: 16,
    nombre: "La Torre",
    descripcion: {
      pasado: "La Torre: Crisis y conflictos que cambian la vida",
      presente: "La Torre: Destrucción de estructuras y caída de certezas.",
      futuro: "La Torre: Sacrificio y dolor que llevan a la renovación."
},
descripcionInvertida: {
      pasado: "La Torre (carta invertida): Posibilidad de superar crisis y obstáculos.",
      presente: "La Torre (carta invertida): Evitación del cambio y resistencia al desmoronamiento.",
      futuro: "La Torre (carta invertida): Posible caída más intensa y dolorosa."
}
},
La_Estrella: {
  numero: 17,
    nombre: "La Estrella",
    descripcion: {
      pasado: "La Estrella: Esperanza y visión de un futuro mejor.",
      presente: "La Estrella: Inacción y fortaleza interior.",
      futuro: "La Estrella: Nuevas oportunidades y crecimiento espiritual."
    },
    descripcionInvertida: {
      pasado: "La Estrella (carta invertida): Falta de esperanza y dirección en la vida.",
      presente: "La Estrella (carta invertida): Desorientación y falta de inspiración.",
      futuro: "La Estrella (carta invertida): Falta de oportunidades y espiritualidad."
    }
  },
  La_Luna: {
    numero: 18,
    nombre: "La Luna",
    descripcion: {
      pasado: "La Luna: Incertidumbre y emociones ocultas.",
      presente: "La Luna: Miedos e incertidumbres que deben ser enfrentados.",
      futuro: "La Luna: Mayor autoconocimiento y superación de miedos."
},
descripcionInvertida: {
      pasado: "La Luna (carta invertida): Miedos e inseguridades han estado gobernando tu vida.",
      presente: "La Luna (carta invertida): Engaños y falta de claridad emocional.",
      futuro: "La Luna (carta invertida): El enfrentamiento de miedos y la superación de obstáculos."
}
},
El_Sol: {
  numero: 19,
    nombre: "El Sol",
    descripcion: {
      pasado: "El Sol: Alegría y satisfacción.",
      presente: "El Sol: Felicidad y éxito.",
      futuro: "El Sol: Logros y prosperidad."
    },
    descripcionInvertida: {
  pasado: "El Sol (carta invertida): Falta de alegría y satisfacción en el pasado.",
      presente: "El Sol (carta invertida): Falta de confianza y éxito en este momento.",
      futuro: "El Sol (carta invertida): Dificultades en la consecución de logros y prosperidad."
    }
  },
  El_Juicio: {
    numero: 20,
    nombre: "El Juicio",
    descripcion: {
      pasado: "El Juicio: Cambio de vida y renovación espiritual.",
      presente: "El Juicio: Necesidad de tomar una decisión importante.",
      futuro: "El Juicio: Renovación y transformación personal."
    },
    descripcionInvertida: {
      pasado: "El Juicio (carta invertida): Miedo al cambio y falta de renovación espiritual.",
      presente: "El Juicio (carta invertida): Falta de decisión y falta de claridad en el camino a seguir.",
      futuro: "El Juicio (carta invertida): Resistencia al cambio y estancamiento personal."
}
},
El_Mundo: {
  numero: 21,
    nombre: "El Mundo",
    descripcion: {
      pasado: "El Mundo: Cierre de ciclos y culminación de proyectos importantes.",
      presente: "El Mundo: Éxito y satisfacción personal.",
      futuro: "El Mundo: Logros y éxito en el ámbito personal y profesional."
    },
    descripcionInvertida: {
      pasado: "El Mundo (carta invertida): Falta de culminación de proyectos y sensación de estancamiento.",
      presente: "El Mundo (carta invertida): Falta de éxito y de sensación de logro personal.",
      futuro: "El Mundo (carta invertida): Dificultades para alcanzar metas personales y profesionales."
    }
}
}

var keyArcanosMayores = Object.keys(arcanosMayores);

// console.log(keyArcanosMayores);
//

var indiceKeyMayorAleatorio = Math.floor(Math.random(Date.now) * 22); // keyArcanosMayores.length)
var indiceKeyMayorAleatorio2 = Math.floor(Math.random(Date.now) * 22); // keyArcanosMayores.length)
var indiceKeyMayorAleatorio3 = Math.floor(Math.random(Date.now) * 22); // keyArcanosMayores.length)



function arcanoAleatorioPasado(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcion.pasado; //pasado normal
}
function arcanoAleatorioPasadoI(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcionInvertida.pasado; //pasado normal
}
function arcanoAleatorioPresente(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcion.presente; //pasado normal
}
function arcanoAleatorioPresenteI(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcionInvertida.presente; //pasado normal
}
function arcanoAleatorioFuturo(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcion.futuro; //pasado normal
}
function arcanoAleatorioFuturoI(objeto, indiceAleatorio, keyArr) {
  return arcano = objeto[keyArr[indiceAleatorio]].descripcionInvertida.futuro; //pasado normal
}

//###


var pasado = arcanoAleatorioPasado(arcanosMayores, indiceKeyMayorAleatorio, keyArcanosMayores);
var pasadoI = arcanoAleatorioPasadoI(arcanosMayores, indiceKeyMayorAleatorio, keyArcanosMayores);
//console.log(pasadoI);
var presente = arcanoAleatorioPresente(arcanosMayores, indiceKeyMayorAleatorio2, keyArcanosMayores);
var presenteI = arcanoAleatorioPresenteI(arcanosMayores, indiceKeyMayorAleatorio2, keyArcanosMayores);

//console.log(presente);

//console.log(presenteI);

var futuro = arcanoAleatorioFuturo(arcanosMayores, indiceKeyMayorAleatorio3, keyArcanosMayores);
var futuroI = arcanoAleatorioFuturoI(arcanosMayores, indiceKeyMayorAleatorio3, keyArcanosMayores);


//##

var arrPasado = [pasadoI, pasado];
var arrPresente = [presenteI, presente];
var arrFuturo = [futuroI, futuro];

// ##



var random1 = Math.random(Date.now);
var random2 = Math.random(Date.now);
var random3 = Math.random(Date.now);

//console.log(random1, random2, random3);


var pasadoLectura;
var presenteLectura;
var futuroLectura;

while (!pasadoLectura) {
  pasadoLectura = arrPasado[Math.floor(random1 * 3)];
}

while (!presenteLectura) {
  presenteLectura= arrPresente[Math.floor(random2 * 3)];
}

while (!futuroLectura) {
  futuroLectura = arrFuturo[Math.floor(random3 * 3)];
}

console.log(`
PASADO

${pasadoLectura}

PRESENTE

${presenteLectura}

FUTURO

${futuroLectura}`);





