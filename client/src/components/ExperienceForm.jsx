import React, { useState } from "react";
import axios from "../api/axios";

function ExperienceForm() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/experiences", form);
    setForm({
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company"
      />
      <input
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">Add Experience</button>
    </form>
  );
}

export default ExperienceForm;
