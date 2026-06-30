import React, { useState } from "react";
import styles from "./Contactpage.module.css";
import { API_BASE_URL } from "../../config/api";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      if (file) {
        formData.append("resume", file);
      }

      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Message + Resume Sent ✅");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setFile(null);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error ❌");
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.field}
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.field}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className={styles.field}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${styles.field} ${styles.textarea}`}
          />

          <input
            type="file"
            onChange={handleFile}
            accept=".pdf,.doc,.docx"
            className={styles.file}
          />

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
