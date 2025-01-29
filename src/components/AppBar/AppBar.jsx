import { NavLink } from "react-router";
import Navigation from "../Navigation/Navigation";
import AuthBar from "../AuthBar/AuthBar";
import css from "./AppBar.module.css";

function AppBar() {
  return (
    <>
      <NavLink to="/" className={css.logoLink}>
        <svg className={css.icon} width={28} height={28}>
          <use href="/sprite.svg#ukraine"></use>
        </svg>
        LearnLingo
      </NavLink>
      <Navigation />
      <AuthBar />
      {/* add UserBar for logged in users */}
    </>
  );
}

export default AppBar;
