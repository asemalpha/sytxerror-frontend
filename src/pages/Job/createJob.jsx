import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createJob } from "../../services/job.service";

function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    seniority: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    createJob(form)
      .then(({ data }) => {
        // data = { post: { _id: 123 } }
        // data._id -> undefined
        // what do i need to get from data, in order to get back 123
        // data.post._id
        // assuming returning -> post
        // assuming returning -> { post: post }
        navigate(`/job/${data.post._id}`);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  return (
    <div>
      <h1>Post a job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </label>
        <br />
        <label>
          Location
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={form.location}
          />
        </label>
        <br />
        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
        </label>
        <br />
        <label>
          Seniority
          <input
            type="text"
            name="seniority"
            onChange={handleChange}
            value={form.seniority}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateJob;
