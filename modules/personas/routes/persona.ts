import * as express from "express";
import { personaSchema } from "./../schemas/persona";

const router = express.Router();

//Callbacks
router.get("/persona", (req, res, next) => {
  console.log("Entra a personas");
  personaSchema.find((err, persona) => {
    if (err) return;
    console.log("Viene persona GET: ", persona);
    res.send(persona);
  });
});

router.post("/persona", (req, res) => {
  console.log("Viene persona POST: ", req.body);
  const persona = new personaSchema(req.body);

  persona.save(function (err, persona) {
    if (err) {
      console.log("Error: ", err);
    }
    res.json(persona);
  });
});

router.put("/persona/:_id", (req, res, next) => {
  personaSchema.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, persona) => {
      if (err) {
        return err;
      }

      return res.send(persona);
    }
  );
});

router.delete("/persona/:_id", (req, res, next) => {
  console.log("Viene del DELETE");
  personaSchema.findByIdAndRemove(req.params._id, (err, persona) => {
    if (err) {
      console.log("Error: ", err);
    }
    console.log("Persona Borrada: ", persona);
    res.json(persona);
  });
});

/*   getPersona()
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .catch((err) => {
      console.log("Error: ", err);
    }); */

/* Promises */

/* function getPersona() {
  return new Promise((resolve, reject) => {
    let persona = personaSchema.find({ nombre: "Ignacio" }).exce();
    if (persona) {
      resolve(persona);
    } else {
      reject(console.log("No se encontro persona"));
    }
  });
} */

/* Async y Await */

export = router;
