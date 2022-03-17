import * as firebase_admin from "firebase-admin";
import * as functions from "firebase-functions";
import * as express from "express";

firebase_admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(express.json());

export const db = firebase_admin.firestore();
export const userColection = "users";
export const firstApiWithFirebase = functions.https.onRequest(main);

export default app;
