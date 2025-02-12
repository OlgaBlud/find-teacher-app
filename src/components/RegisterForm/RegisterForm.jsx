import { useForm } from "react-hook-form";
import * as yup from "yup";
import css from "./RegisterForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";

function RegisterForm() {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    dispatch(signUp(data));
  };
  return (
    <>
      <h2 className={css.formTitle}>Registration</h2>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={css.input}
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        <p className={css.errorMsg}>{errors.name?.message}</p>
        <input
          className={css.input}
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <p className={css.errorMsg}>{errors.email?.message}</p>
        <input
          className={css.input}
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className={css.errorMsg}>{errors.password?.message}</p>
        <button className={css.formBtn} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
