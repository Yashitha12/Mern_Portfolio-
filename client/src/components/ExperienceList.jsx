import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    axios.get("/experiences").then((res) => setExperiences(res.data));
  }, []);
  return (
    <div>
      <h2>Experiences</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp._id}>
            {exp.title} at {exp.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceList;
