import type { NextApiRequest, NextApiResponse } from 'next'
import * as admin from 'firebase-admin';


async function verifyIdToken(token: string) {
  console.log("verifying token");

  try {


    admin.initializeApp({
      credential: admin.credential.cert({
        privateKey: process.env.private_key,
        projectId: process.env.project_id,
        clientEmail: process.env.client_email,
      }),
      projectId: process.env.private_id,
      databaseURL: `https://${process.env.NEXT_PUBLIC_projectId}.firebaseio.com'`
    });
  } catch (error) {
    console.log("already initialized");
  }
  console.log("admin is here");
  const data = await admin.auth().verifyIdToken(token);
  console.log("userData ", data)
  if (data) {
    return true;
  }
  return false;


  // return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token: any = req.query.token;

    const user = await verifyIdToken(token);
    if (user) {
      res.status(200).send(true)
      res.end()

    } else {
      res.status(200).send(false);
      res.end();
    }
  } catch (error) {
    console.log("Error occured ", error);
    res.status(200).send(false);
    res.end();
  }
}