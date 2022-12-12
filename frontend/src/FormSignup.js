import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import axios from "axios";

function FormSignup({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState();

  const [showMessageEdit, setShowMessageEdit] = useState(false);
  const [messageEdit, setMessageEdit] = useState();

  const [showMessagePay, setShowMessagePay] = useState(false);
  const [messagePay, setMessagePay] = useState();

  function submit_enroll() {
    console.log(values);
    axios
      .post("http://127.0.0.1:8000/enroll_person/", {
        body: values,
      })
      .then((response) => {
        setShowMessage(true);
        setMessage(response.data["msg"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["msg"]);
        // alert(response.data["msg"]);
      });
  }

  function submit_edit() {
    console.log(values);
    axios
      .put("http://127.0.0.1:8000/edit_batch/", {
        body: values,
      })
      .then((response) => {
        setShowMessageEdit(true);
        setMessageEdit(response.data["msg"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["msg"]);
      });
  }

  function submit_payment() {
    console.log(values);
    axios
      .put("http://127.0.0.1:8000/make_payment/", {
        body: values,
      })
      .then((response) => {
        setShowMessagePay(true);
        setMessagePay(response.data["msg"]);
        // return <h1>{response.data["msg"]}</h1>;
        console.log(response.data["msg"]);
      });
  }

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started us with today !!!! Join today for the Yoga Classes</h1>
        {/* user name */}
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        {/*  */}

        {/* user email*/}
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/*  */}
        {/* user age */}

        <div className="form-inputs">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            className="form-input"
            placeholder="Enter your Age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className="form-inputs">
          <label for="batch">Batch Timings</label>
          <select
            id="batch"
            name="batch"
            value={values.batch}
            onChange={handleChange}
          >
            <option value="6-7 AM">6-7 AM</option>
            <option value="7-8 AM">7-8 AM</option>
            <option value="8-9 AM">8-9 AM</option>
            <option value="5-6 PM">5-6 PM</option>
          </select>
        </div>
        <div className="btn">
          <div>
            <button
              className="form-input-btn1"
              type="submit"
              name="enroll"
              onClick={submit_enroll}
            >
              Enroll
            </button>
            {showMessage && <p>{message}</p>}
          </div>
          <div>
            <button
              className="form-input-btn2"
              type="submit"
              name="edit"
              onClick={submit_edit}
            >
              Edit Batch
            </button>
            {showMessageEdit && <p>{messageEdit}</p>}
          </div>

          <div>
            <button
              className="form-input-btn3"
              type="submit"
              name="payment"
              onClick={submit_payment}
            >
              Make Payment
            </button>
            {showMessagePay && <p>{messagePay}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSignup;
