import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { application } from "../../services/application";

function CreateApplication() {
  const [form, setForm] = useState({
    applicantName: "",
    applicantEmail: "",
    linkdIn: "",
    gitHubURL: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    application(form)
      .then(({ data }) => {
        // data = { post: { _id: 123 } }
        // data._id -> undefined
        // what do i need to get from data, in order to get back 123
        // data.post._id
        // assuming returning -> post
        // assuming returning -> { post: post }
        navigate(`/:id/application/${data.job._id}`);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  return (
    <div>
      <h1>Apply</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Applicant Name
          <input
            type="text"
            name="applicantName"
            onChange={handleChange}
            value={form.applicantName}
          />
        </label>
        <br />
        <label>
          Applicant Email
          <input
            type="text"
            name="applicantEmail"
            onChange={handleChange}
            value={form.applicantEmail}
          />
        </label>
        <br />
        <label>
          LinkdIn
          <input
            type="linkdIn"
            name="description"
            onChange={handleChange}
            value={form.linkdIn}
          />
        </label>
        <br />
        <label>
          Git Hub
          <input
            type="text"
            name="gitHubURL"
            onChange={handleChange}
            value={form.gitHubURL}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateApplication;
