import "./Job.css";

import React, { useEffect, useState } from "react";

import { getAllJobs } from "../../services/job.service";

function Job() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllJobs()
      .then((data) => {
        console.log({ data });

        // setJob(result.data.id);
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

  return <div></div>;
}

export default Job;
