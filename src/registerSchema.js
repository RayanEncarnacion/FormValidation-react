import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[a-z A-Z]+$/, "Name can not be empty or contain numbers.")
    .required("Your name is required!"),
  email: yup.string().trim().email().required("Email must be valid."),
  password: yup
    .string()
    .trim()
    .min(4)
    .max(16)
    .required("Passwords must be the same."),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must be the same."),
});
