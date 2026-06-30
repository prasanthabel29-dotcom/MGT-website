const express = require("express");
const multer = require("multer");
const router = express.Router();

// 📁 STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// 🔥 POST CONTACT WITH FILE
router.post("/contact", upload.single("resume"), (req, res) => {
  const { name, email, message } = req.body;

  const resume = req.file ? req.file.filename : null;

  console.log(name, email, message, resume);

  // 👉 DB insert panna inga logic add pannalam

  res.json({
    success: true,
    message: "Contact + Resume uploaded",
  });
});

module.exports = router;