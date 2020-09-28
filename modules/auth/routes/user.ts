import * as express from "express";
import { login, registro } from "../controllers/authController";
import { verifyToken } from "./../middlewares/authJwt";
import { userSchema } from "../schemas/user";

const router = express.Router();

router.post("/registro", async (req, res) => {
  console.log("Entra registro: ", req.body);
  try {
    let newRegistro = await registro(req.body);
  } catch (err) {
    throw err;
  }
});

router.post("/login", verifyToken, async (req, res) => {
  console.log("Entra login");
  try {
    let token = await login(req.body);

    res.send({
      mensaje: "Login Exitoso",
      token: token,
    });
  } catch (err) {
    res.send({
      error: err,
    });
  }
});

export = router;
