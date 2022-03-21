import { Router } from "express";

import * as admin from "firebase-admin";
//import {firebaseConfig} from "./database/index";

const db = admin.firestore();
const routes = Router();

const userColection = "users";

interface IUser {
  name: string;
  email: string;
}

routes.post("/users", async (request, response) => {
  const user: IUser = {
    name: request.body["name"],
    email: request.body["email"],
  };

  try {
    const newDoc = await db.collection(userColection).add(user);

    response.status(200).json(`${newDoc.id}`);
  } catch (error) {
    response.status(400).send(`Erro: ${error}`);
  }
});

export default routes;
