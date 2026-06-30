import React, {
  useEffect,
  useState,
} from "react";
import { API_BASE_URL } from "../../config/api";

export default function AdminContacts() {

  const [contacts, setContacts] =
    useState([]);

  useEffect(() => {

    fetch(
      `${API_BASE_URL}/api/contacts`
    )
      .then((res) => res.json())
      .then((data) =>
        setContacts(Array.isArray(data) ? data : [])
      );

  }, []);

  const deleteContact =
    async (id) => {

      await fetch(
        `${API_BASE_URL}/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      setContacts((prev) =>
        prev.filter(
          (c) => c.id !== id
        )
      );
    };

  return (

    <div>

      <h2>
        All Contacts
      </h2>

      <table
        border="1"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Message</th>

            <th>Resume</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {contacts.map((c) => (

            <tr key={c.id}>

              <td>{c.id}</td>

              <td>{c.name}</td>

              <td>{c.email}</td>

              <td>{c.phone || "—"}</td>

              <td>{c.message}</td>

              {/* RESUME */}

              <td>

                {c.resume ? (

                  <a
                    href={`${API_BASE_URL}/uploads/${c.resume}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume
                  </a>

                ) : (

                  "No Resume"

                )}

              </td>

              {/* DELETE */}

              <td>

                <button
                  onClick={() =>
                    deleteContact(c.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}