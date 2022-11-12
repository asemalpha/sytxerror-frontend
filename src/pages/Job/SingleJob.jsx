import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleJob } from "../../services/job.service";
import { FaCogs, FaGrinHearts } from "react-icons/fa";

function SingleJob() {
  const [job, setJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    getSingleJob(id).then((response) => {
      setJob(response.data.job);
    });
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <br />
      <br />
      <div>
        <h1>
          <FaCogs /> {job.title}
        </h1>
      </div>
      <br />
      <article key={job.id}>
        <p>
          We are looking for a {job.title} for our office in {job.location}. the{" "}
          {job.title} is responsible for {job.description} the required level is{" "}
          {job.seniority}.<br />
          Please feel free to apply to our wounderfull company.
        </p>
      </article>

      <br />
      <Link to={"job/application"}>
        <FaGrinHearts /> Apply for the {job.title} position
      </Link>
    </div>
  );
}
export default SingleJob;
