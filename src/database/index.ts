import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin";
import {} from "../database/index";

import * as env from "dotenv";

env.config();

interface IFibaseConfig {
  api_key: string;
  credential: {
    admin: {
      type: string;
      project_id: string;
      private_key: string;
      private_key_id: string;
      client_email: string;
      client_id: string;
      auth_uri: string;
      token_uri: string;
      auth_provider_x509_cert_url: string;
      client_X509_cert_url: string;
    };
  };
}

initializeApp();
export const firebaseConfig: IFibaseConfig = {
  api_key: process.env.FIREBASE_ADMIN_CREDENTIAL || "",
  credential: {
    admin: JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIAL || "{}"),
  },
};

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: firebaseConfig.credential.admin.client_id,
    privateKey: firebaseConfig.credential.admin.private_key_id,
    projectId: firebaseConfig.credential.admin.project_id,
  }),
  databaseURL: process.env.FIREBASE_ADMIN_CREDENTIAL,
});
