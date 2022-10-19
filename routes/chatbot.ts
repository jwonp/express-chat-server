import { makeClient } from "../funcs/makeClient";
const chatbotExpress = require("express");
const chatbotRouter = chatbotExpress.Router();

chatbotRouter.post("/connect", (req: any, res: any) => {
  const token = req.body.token;
  const login = req.body.login;
  const client = makeClient(token, login);
  console.log(client);
});
interface clientSet {
  client: any;
  channel: string;
  password: string;
}

module.exports = chatbotRouter;
export {};
