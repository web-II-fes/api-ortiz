import { Schema, model } from "mongoose";

const schemaCurso = new Schema({
  nombreCurso: { type: String, lowercase: true },
  profesor: { type: String, lowercase: true },
  ano: Number,
  estado: String,
});

export let cursoSchema = model("schemaCurso", schemaCurso, "cursos");
