import React, { useState } from "react";
import axios from "../api/axios";

function QualificationForm() {
  const [form, setForm] = useState({ degree: "", institution: "", year: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/qualifications", form);
    setForm({ degree: "", institution: "", year: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="degree"
        value={form.degree}
        onChange={handleChange}
        placeholder="Degree"
      />
      <input
        name="institution"
        value={form.institution}
        onChange={handleChange}
        placeholder="Institution"
      />
      <input
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Year"
      />
      <button type="submit">Add Qualification</button>
    </form>
  );
}

export default QualificationForm;
