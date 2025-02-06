import { useForm } from "react-hook-form";
import css from "./LogInForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LogInForm() {
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={css.input}
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        <p className={css.errorMsg}>{errors.email?.message}</p>
        <input
          className={css.input}
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <p className={css.errorMsg}>{errors.password?.message}</p>
        <button className={css.formBtn} type="submit">
          Log In
        </button>
      </form>
    </>
  );
}

export default LogInForm;
