import { config } from "dotenv";
import sgMail from "@sendgrid/mail";

config();

const emailTemplate = (userName: string, code: string) => `
<div style="background-color:#F44;padding:10px;margin:10px;border-radius:2px;color:#FFE">
  <div style="font-size:30px;text-align:center">🎅 - Code secret Santa - 🎅</div>
  <div style="width:100%;height:2px;background-color:#ffe;margin:30px 0px"></div>
    <div style="font-size:20px;text-align:center;margin-bottom:20px">À utiliser uniquement par ${userName} : </div>
      <div style="font-size:40px;text-align:center;margin-bottom:10px">${code}</div>
</div>

`;

export const sendEmail = (userName: string, code: string, mail: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    to: mail, // Change to your recipient
    from: "fley58@gmail.com", // Change to your verified sender
    subject: "Code Secret Santa",
    text: "Votre code pour le Secret Santa est : " + code,
    html: emailTemplate(userName, code),
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
