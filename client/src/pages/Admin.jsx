import React from "react";
import ExperienceForm from "../components/ExperienceForm.jsx";
import QualificationForm from "../components/QualificationForm.jsx";

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ExperienceForm />
      <QualificationForm />
    </div>
  );
}

export default Admin;
