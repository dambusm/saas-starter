import nodemailer from 'nodemailer';
import postmarkTransport from 'nodemailer-postmark-transport';

export class EmailManager {
  transport: ReturnType<typeof nodemailer.createTransport>;
  constructor(postmarkServerApiToken: string) {
    this.transport = nodemailer.createTransport(
      postmarkTransport({
        auth: {
          apiKey: postmarkServerApiToken,
        },
      })
    );
  }

  sendEmail(
    to: string,
    from: {
      name: string;
      email: string;
    },
    subject: string,
    bodyText: string,
    bodyHtml?: string
  ) {
    return this.transport.sendMail({
      from: `"${from.name}" <${from.email}>`,
      to,
      subject,
      text: bodyText,
      html: bodyHtml,
    });
  }
}
