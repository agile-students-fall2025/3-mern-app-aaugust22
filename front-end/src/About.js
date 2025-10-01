import React, { useEffect, useState } from "react";
import axios from "axios";
import './About.css';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about")
    .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);
  

  if (!data) return <p>Loading...</p>;

  return (
    <div className="About">
      <h1>{data.title}</h1>
      {data.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
        <img 
            src={data.imageUrl} 
            alt="About me" 
            className="about-image" 
        />

    </div>
  );
}
