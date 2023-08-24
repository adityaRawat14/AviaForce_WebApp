import { transporter, mailOptions } from "@/lib/nodemailer";

export const POST = async (req, res) => {
  try {
    const dataStream = await req.body;
    const data = await new Response(dataStream).json();
    await transporter.sendMail({
      ...mailOptions,
      subject: "Aviaforce Message!",
      text: `This message is sent by ${data.name}, emailId: ${data.emailId}. Now the message is: ${data.message}`,
    });
    return new Response("Message sent successfully!", { status: 201 });
  } catch (err) {
    console.log(err.message);
    return new Response("Failed to send the email!", { status: 500 });
  }
};
