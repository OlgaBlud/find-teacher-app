import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import clsx from "clsx";
function Navigation() {
  return (
    <nav>
      <ul className={css.linkList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(css.navLinks, isActive && css.active)
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              clsx(css.navLinks, isActive && css.active)
            }
          >
            Teachers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              clsx(css.navLinks, isActive && css.active)
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
