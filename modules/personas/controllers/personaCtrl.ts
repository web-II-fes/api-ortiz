import { personaSchema } from "../schemas/persona";

export function getMayores(personas) {
  return new Promise((resolve, reject) => {
    let arrPersona = personas.filter((persona) => persona.edad > 40);

    if (arrPersona.length) {
      resolve(arrPersona);
    } else {
      let err = "No hay personas mayores de 40";
      reject(err);
    }
  });
}

export async function getMenores(personas) {
  let arrPersona = personas.filter((persona) => persona.edad > 40);

  if (arrPersona.length) {
    return arrPersona;
  } else {
    let err = "No hay personas mayores de 40";
    throw err;
  }
}
