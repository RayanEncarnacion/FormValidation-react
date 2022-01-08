import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "./registerSchema.js";

const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

const useCustomHook = () => {
  const [dataSent, setDataSent] = useState(false);
  const formRef = useRef();

  // Reset after 2 seconds
  if (dataSent) setTimeout(() => setDataSent(false), 2000);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = () => {
    formRef.current.reset();
    setDataSent(true);
  };

  return {
    dataSent,
    formRef,
    onSubmit,
    register,
    handleSubmit,
    errors,
    capitalize,
  };
};
export default useCustomHook;
