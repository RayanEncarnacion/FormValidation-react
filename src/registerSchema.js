import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[a-z A-Z]+$/, "Name can not be empty or contain numbers.")
    .required("Your name is required."),
  email: yup.string().email().required("Your email is required."),
  password: yup.string().min(4).max(16).required("Your password is required."),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Your password is required."),
});
