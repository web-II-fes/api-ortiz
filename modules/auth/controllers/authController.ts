import { key } from "./../../../config.private";
import { userSchema } from "./../schemas/user";

import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export async function registro(usuario: any) {
  const user = new userSchema({
    username: usuario.username,
    email: usuario.email,
    password: bcrypt.hashSync(usuario.password, 8),
  });

  try {
    let newUser = user.save();
    return newUser;
  } catch (err) {
    throw err;
  }
}

export async function login(usuario: any) {
  try {
    console.log("Usuario en controller: ", usuario);
    let userLogin = await userSchema.findOne({ username: usuario.username });
    console.log("Usuario: ", userLogin);
    if (!userSchema) {
      return false;
    }

    let passwordValid = bcrypt.compareSync(
      usuario.password,
      userLogin.password
    );
    console.log("Pass: ", passwordValid);
    if (!passwordValid) {
      let msg = "Password Invalid!!!";
      return msg;
    }

    let token = jwt.sign(
      {
        usuario: userLogin.username,
        email: userLogin.email,
        rol: "Administrador",
      },
      key.secret,
      {
        expiresIn: 86400,
      }
    ); //Expira en 24hs
    console.log("Token Nuevo: ", token);

    return token;
  } catch (err) {
    throw err;
  }
}
