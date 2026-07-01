const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());
app.use(express.json());

/* =========================
   UPLOADS FOLDER
========================= */

app.use(
  "/uploads",
  express.static("uploads")
);

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

/* =========================
   MULTER
========================= */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
      path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
});

/* =========================
   DATABASE
========================= */

const pool = new Pool({

  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Abel@294",
  port: 5432,

});

/* =========================
   MAIL CONFIG
========================= */

const ADMIN_EMAIL =
  "contactus@majestyglobaltechnologies.com";

const transporter =
  nodemailer.createTransport({

    service: "gmail",

    auth: {
      user:
        "prasanthabel29@gmail.com",

      pass:
        "zqad wngk eflj inlv",
    },
  });

/* =========================
   ADMIN LOGIN
========================= */

app.post(
  "/api/admin/login",

  (req, res) => {

    const {
      email,
      password,
    } = req.body;

    if (
      email === "admin@gmail.com" &&
      password === "1234"
    ) {

      return res.json({
        success: true,
        token: "admin-token",
      });
    }

    res.status(401).json({
      success: false,
    });
  }
);

/* =========================
   CONTACT FORM
========================= */

app.post(
  "/api/contact",
  upload.single("resume"),

  async (req, res) => {

    try {

      const {
        name,
        email,
        phone,
        message,
      } = req.body;

      const file =
        req.file
          ? req.file.filename
          : null;

      /* =====================
         SAVE DATABASE
      ===================== */

      await pool.query(
        `
        INSERT INTO contact
        (
          name,
          email,
          phone,
          message,
          resume
        )

        VALUES ($1,$2,$3,$4,$5)
        `,
        [
          name,
          email,
          phone,
          message,
          file,
        ]
      );

      /* =====================
         ADMIN MAIL
      ===================== */

      await transporter.sendMail({

        from:
          "prasanthabel29@gmail.com",

        to:
          ADMIN_EMAIL,

        subject:
          "🚨 New Contact Form Submission",

        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: auto;
            padding: 30px;
            background: #f9fafb;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            line-height: 1.8;
          ">

            <h2 style="
              color:#2563eb;
              margin-bottom:20px;
            ">
              New Contact Received
            </h2>

            <p>
              <b>Name:</b>
              ${name}
            </p>

            <p>
              <b>Email:</b>
              ${email}
            </p>

            <p>
              <b>Phone:</b>
              ${phone}
            </p>

            <p>
              <b>Message:</b>
              ${message}
            </p>

            ${
              file
                ? `
                  <p style="margin-top:20px;">
                    <a
                      href="http://localhost:5000/uploads/${file}"
                      style="
                        color:#2563eb;
                        text-decoration:none;
                        font-weight:bold;
                      "
                    >
                      Download Resume
                    </a>
                  </p>
                `
                : `
                  <p>
                    No Resume Uploaded
                  </p>
                `
            }

          </div>
        `,
      });

      /* =====================
         AUTO REPLY USER MAIL
      ===================== */

      await transporter.sendMail({

        from:
          "prasanthabel29@gmail.com",

        to:
          email,

        subject:
          "Thank You For Contacting Us",

        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #f9fafb;
            line-height: 1.8;
          ">

            <h2 style="
              color: #2563eb;
              margin-bottom: 20px;
            ">
              Hello ${name}
            </h2>

            <p style="
              font-size: 16px;
              color: #374151;
            ">
              Thank you for your interest.
              We will reach you soon!
            </p>

            <br />

            <p style="
              font-size: 16px;
              color: #111827;
            ">
              Thanks,
              <br />
              <b>MGT Admin</b>
            </p>

          </div>
        `,
      });

      res.json({
        success: true,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
      });
    }
  }
);

/* =========================
   GET CONTACTS
========================= */

app.get(
  "/api/contacts",

  async (req, res) => {

    try {

      const result =
        await pool.query(
          `
          SELECT *
          FROM contact
          ORDER BY id DESC
          `
        );

      res.json(
        result.rows
      );

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
      });
    }
  }
);

/* =========================
   DOWNLOAD FILE
========================= */

app.get(
  "/api/download/:file",

  (req, res) => {

    const filePath =
      path.join(
        __dirname,
        "uploads",
        req.params.file
      );

    res.download(filePath);
  }
);

/* =========================
   DELETE CONTACT
========================= */

app.delete(
  "/api/contact/:id",

  async (req, res) => {

    try {

      await pool.query(
        `
        DELETE FROM contact
        WHERE id=$1
        `,
        [req.params.id]
      );

      res.json({
        success: true,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
      });
    }
  }
);

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {

  console.log(
    "Server running 🚀"
  );

  console.log(
    `http://localhost:${PORT}`
  );
}).on("error", (err) => {

  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Stop the other app or run: PORT=5001 node server.js`
    );
  } else {
    console.error(err);
  }

  process.exit(1);
});