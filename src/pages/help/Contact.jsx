import { Form, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact-us">
      <h3>Contact Us</h3>
      <p>
        If you have any questions, concerns, or feedback, we’re here to help!
        Please use the form below to get in touch with us, and one of our
        support team members will get back to you as soon as possible.
      </p>
      <Form method="post" action="/help/contact">
        <label>
          <span>Email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message: </span>
          <textarea type="text" name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && <p>{data}</p>}
      </Form>
    </div>
  );
};
export default Contact;

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const message = data.get("message");
  const submissionData = {
    email,
    message,
  };
  console.log(
    `Received message from ${submissionData.email}: ${submissionData.message}`
  );

  if (submissionData.message.length < 10) {
    return new Response("Message is too short. Please provide more details.");
  }

  return new Response("Message received. We'll get back to you soon!");
};
