import clsx from "clsx";
import css from "./AuthBar.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

function AuthBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      setModalIsOpen(false);
    }
  }, [isLoggedIn]);

  const openModal = (name) => {
    setModalIsOpen(true);
    setModalType(name);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      {isLoggedIn ? (
        <button
          type="button"
          className={clsx(css.logInBtn, css.btn)}
          onClick={handleLogOut}
        >
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#log-in"></use>
          </svg>
          Log out
        </button>
      ) : (
        <ul className={css.authBtnsList}>
          <li>
            <button
              type="button"
              className={clsx(css.logInBtn, css.btn)}
              onClick={() => openModal("login")}
            >
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#log-in"></use>
              </svg>
              Log in
            </button>
          </li>
          <li>
            <button
              type="button"
              className={clsx(css.registerBtn, css.btn)}
              onClick={() => openModal("register")}
            >
              Registration
            </button>
          </li>
        </ul>
      )}
      <ModalWindow isOpen={modalIsOpen} onClose={closeModal} name={modalType} />
    </>
  );
}

export default AuthBar;
