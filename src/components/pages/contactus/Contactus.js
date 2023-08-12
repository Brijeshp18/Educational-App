import React, { useState } from "react";
import "./contactus.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("email is not valid"),
  message: yup.string().min(5,"message shoul be more than 5 charactre").max(100,"message should not exceed 100").required(),
});

function Contactus() {
  const [user,setuser]=useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit=(data)=>{console.log(data)
  setuser(data)}// webpage l data print chenyan
  console.log(errors)
  return (
    <div className="container">
      <div className="contactus-container">
       
        <p>{JSON.stringify(user,undefined,2)}</p>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you.Please fill out the form below or reach out
          to us using the contact details provided
        </p>
        <form className="contact-form" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              {...register("message")}
            ></textarea>
            <p>{errors.message?.message}</p>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
