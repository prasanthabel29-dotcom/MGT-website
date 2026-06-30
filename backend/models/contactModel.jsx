import { pool } from "../config/db.jsx";

export const createContact = async (data) => {
  const { name, email, phone, message } = data;

  const result = await pool.query(
    `INSERT INTO contacts(name,email,phone,message)
     VALUES($1,$2,$3,$4) RETURNING *`,
    [name, email, phone, message]
  );

  return result.rows[0];
};

export const getAllContacts = async () => {
  const result = await pool.query(
    "SELECT * FROM contacts ORDER BY created_at DESC"
  );
  return result.rows;
};