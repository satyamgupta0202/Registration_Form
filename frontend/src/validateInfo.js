export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "User's name is Required";
  }

  if (!values.email.trim()) {
    errors.email = "User's email is Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "User's email is Invalid";
  }

  if (!values.age.trim()) {
    errors.age = "User's age is Required";
  } else if (+values.age < 18 || +values.age > 65) {
    errors.age = "age should be in range 18-65";
  }

  return errors;
}
