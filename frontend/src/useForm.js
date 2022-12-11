import { useState, useEffect } from "react";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    batch: "",
  });

  const [errors, setError] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    setIsSubmitting(true);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     // http://127.0.0.1:8000/enroll_person/
  //     console.log(values.username, values.email, values.batch);
  //     let res = fetch("http://127.0.0.1:8000/enroll_person/", {
  //       method: "POST",
  //       crossorigin: true,
  //       body: JSON.stringify({
  //         name: values.username,
  //         email: values.email,
  //         age: values.age,
  //         batch: values.batch,
  //       }),
  //     });
  //     submitForm();
  //   }
  // }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
