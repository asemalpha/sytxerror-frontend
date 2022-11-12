import "./Job.css";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleJob } from "../../services/job.service";

function Job() {
  const [job, setJob] = useState();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getSingleJob(id)
      .then(({ result }) => {
        setJob(result.data.id);
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
        {job.map((job) => {
          return (
            <div
              key={job._id}
              onClick={() => {
                navigate(`/job/${job._id}`);
              }}
            >
              {job.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Job;
