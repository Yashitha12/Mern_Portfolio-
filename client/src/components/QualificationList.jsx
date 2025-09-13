import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function QualificationList() {
  const [qualifications, setQualifications] = useState([]);
  useEffect(() => {
    axios.get("/qualifications").then((res) => setQualifications(res.data));
  }, []);
  return (
    <div>
      <h2>Qualifications</h2>
      <ul>
        {qualifications.map((q) => (
          <li key={q._id}>
            {q.degree} from {q.institution} ({q.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QualificationList;
