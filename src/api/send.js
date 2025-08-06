// api/send.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request, response) {
  const { name, email, message } = request.body;

  try {
    const data = await resend.emails.send({
      from: 'Seu Nome <contato@seudominioverificado.com>',
      to: ['contato@playnostakes.com'],
      subject: `Nova mensagem de ${name}`,
      reply_to: email,
      html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`,
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error });
  }
}