import * as functions from "firebase-functions";
import server from "./server";

const api = functions.https.onRequest(server);
export default api;
