import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../../services/job.service";
import { FaCogs, FaGrinHearts } from "react-icons/fa";

function SingleJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // getSingleJob(id).then((response) => {
    //   setJob(response.data.job);
    // });
    getAllJobs()
      .then(({ data }) => {
        console.log(data.job);

        setJobs(data.job);
      })
      .catch((err) => {
        console.log("err:", err);
        // setIsError(true);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }, []);

  if (!jobs) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <br />
      <br />
      {jobs.map((job) => (
        <div key={job._id}>
          <div>
            <h1>
              <FaCogs /> {job.title}
            </h1>
          </div>
          <br />
          <article key={job.id}>
            <p>
              We are looking for a {job.title} for our office in {job.location}.
              the {job.title} is responsible for {job.description} the required
              level is {job.seniority}.<br />
              Please feel free to apply to our wounderfull company.
            </p>
          </article>

          <br />
          <Link to={"job/application"}>
            <FaGrinHearts /> Apply for the {job.title} position
          </Link>
        </div>
      ))}
    </div>
  );
}
export default SingleJob;
