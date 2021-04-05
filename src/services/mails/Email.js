import { createTransport } from 'nodemailer';
import { renderFile } from 'pug';
// const htmlToText = require('html_to_text');

/**
 * @params - {user} - Object containg sender's details
 * 
 * @description - user Object Example = {
            from: 'mail@exmple.com,
            name: 'username',
            keyMessage: 'message to be sent',
        },
 */

class Email {
  constructor(user) {
    this.to = `JLN <${process.env.EMAIL}>`;
    this.from = user.email;
    this.name = user.name;
    this.keyMessage = user.keyMessage;
  }

  // eslint-disable-next-line class-methods-use-this
  async newTransport() {
    return createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  /**
   *
   * @param {*} subject subject of mail to be sent
   */

  async send(subject) {
    const html = renderFile(`${__dirname}/../views/contact.pug`, {
      name: this.name,
      keyMessage: this.keyMessage,
    });

    const mailOptions = {
      to: this.to,
      from: this.from,
      subject,
      html,
      text: this.keyMessage,
    };

    return (await this.newTransport()).sendMail(mailOptions);
  }
}

export default Email;
