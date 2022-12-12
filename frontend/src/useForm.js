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
    // last mai kardena
    // values.name = "";
    // values.age = "";
    // values.email = "";
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
