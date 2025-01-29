import clsx from "clsx";
import css from "./AuthBar.module.css";

function AuthBar() {
  return (
    <ul className={css.authBtnsList}>
      <li>
        <button type="button" className={clsx(css.logInBtn, css.btn)}>
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#log-in"></use>
          </svg>
          Log in
        </button>
      </li>
      <li>
        <button type="button" className={clsx(css.registerBtn, css.btn)}>
          Registration
        </button>
      </li>
    </ul>
  );
}

export default AuthBar;
