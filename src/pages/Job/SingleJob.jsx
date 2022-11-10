import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleJob } from "../../services/job.service";

function SingleJob() {
  const [job, setJob] = useState(undefined);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    getSingleJob(id).then((response) => {
      console.log(response.data);
      setJob(response.data.job);
    });
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(job)}</div>;
}

export default SingleJob;
