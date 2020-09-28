import * as jwt from "jsonwebtoken";
import { key } from "./../../../config.private";
import * as express from "express";

export function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"];
  console.log("Token: ", token);
  if (!token) {
    return res.status(403).send({ mensaje: "No existe token" });
  }

  jwt.verify(token, key.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ mensaje: "No esta autorizado" });
    }

    console.log("Datos verificados: ", decoded);
    req.userId = decoded.id;
    next();
  });
}
