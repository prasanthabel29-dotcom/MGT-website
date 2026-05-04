import React, { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    console.log(form);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "60px auto", padding: "20px" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;