import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6bd46bba3ec505",
      pass: "ce686d6a7e6e59"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel D Silva <Gabriel-blz@outlook.com.br>',
            subject,
            html: body
        })
    };
}