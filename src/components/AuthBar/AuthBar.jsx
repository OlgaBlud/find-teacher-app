import clsx from "clsx";
import css from "./AuthBar.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useState } from "react";

function AuthBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const openModal = (name) => {
    setModalIsOpen(true);
    setModalType(name);
  };
  const closeModal = () => setModalIsOpen(false);
  return (
    <>
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
      <ModalWindow isOpen={modalIsOpen} onClose={closeModal} name={modalType} />
    </>
  );
}

export default AuthBar;
