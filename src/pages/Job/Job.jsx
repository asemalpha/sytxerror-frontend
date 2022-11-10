import "./Job.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Job() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_SERVER_URL || "http://localhost:5005/job")
      .then((result) => {
        setData(result.data.Job);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Getting data....</div>;
  }
  if (isError) {
    return <div>Ooops</div>;
  }

  return (
    <div>
      <h1>Jobs</h1>
      <div>
        {data.map((Job) => {
          return (
            <article
              key={Job.slug}
              onClick={() => {
                navigate(`/job/${Job._id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              {Job.title}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Job;
