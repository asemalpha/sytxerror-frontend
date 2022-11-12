import "./Job.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllJobs } from "../../services/job.service";

function Job() {
  const [Job, setJob] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllJobs(id)
      .then(({ response }) => {
        setJob(response.data.job);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
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
        {Job.map((job) => {
          return (
            <article
              key={Job.data._id}
              onClick={() => {
                navigate(`/job/${job._id}`);
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
