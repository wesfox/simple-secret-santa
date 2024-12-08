import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import cors from "cors";

import { sendEmail } from "./send-email";

export type Draw = {
  code: string;
  from: string;
  to: string;
};

const pairs: Draw[] = JSON.parse(fs.readFileSync("./pairs.json", "utf-8"));

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.options("*", cors());

export async function getCode(user: string): Promise<string | undefined> {
  const response = await fetch("pairs.json");
  let draws = (await response.json()) as Draw[];
  return draws.filter((draw) => draw.from === user)[0].code;
}

app.get("/", (req: Request, res: Response) => {
  const name = req.query.name;
  const mail = req.query.mail;
  console.log(name, mail);
  if (!(typeof name == "string") || !(typeof mail == "string")) {
    throw Error("mail or name undefined");
  }

  const code = pairs.filter((draw) => draw.from === name)[0].code;
  sendEmail(name, code, mail);
  res.send(code);

  console.log(name, mail);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
