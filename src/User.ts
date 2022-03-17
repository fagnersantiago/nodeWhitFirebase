import app, { db, userColection } from "./index";

interface IUser {
  id: string;
  firstName: string;
  nickName: string;
  email: string;
}

app.post("/user", async (request, response) => {
  try {
    const user: IUser = {
      id: request.body["id"],
      firstName: request.body["firstName"],
      nickName: request.body["nickName"],
      email: request.body["email"],
    };

    const createDoc = await db.collection(userColection).add(user);
    response.status(200).send(`created: ${createDoc.id}`);
  } catch (err) {
    response.status(400).send(err);
  }
});
