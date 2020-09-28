import * as express from "express";
import { cursoSchema } from "../schemas/curso";

const router = express.Router();

router.get("/cursos", async (req, res) => {
  try {
    let cursos = await cursoSchema.find();
    res.send(cursos);
  } catch (err) {
    throw err;
  }
});

router.get("/cursoId/:id", async (req, res) => {
  let idCurso = req.params.id;
  try {
    let cursos = await cursoSchema.findById(idCurso);
    res.send(cursos);
  } catch (err) {
    throw err;
  }
});

router.post("/curso", async (req, res) => {
  try {
    const curso = new cursoSchema(req.body);
    let cursoNuevo = await curso.save();

    res.send(cursoNuevo);
  } catch (err) {
    throw err;
  }
});

router.put("/curso/:id", async (req, res, next) => {
  try {
    let curso = await cursoSchema.findByIdAndUpdate(req.params.id, req.body);
    res.send(curso);
  } catch (err) {
    throw err;
  }
});

router.delete("/curso/:id", async (req, res, next) => {
  try {
    let curso = await cursoSchema.findByIdAndRemove(req.params._id);
    console.log("Curso Borrado: ", curso);
  } catch (err) {
    throw err;
  }
});

export = router;
