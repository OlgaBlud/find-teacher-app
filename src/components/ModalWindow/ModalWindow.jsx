import LogInForm from "../LogInForm/LogInForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import css from "./ModalWindow.module.css";

function ModalWindow({ isOpen, onClose, name }) {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };
  return (
    isOpen && (
      <div className={css.modal}>
        <div className={css.modalWrapper} onClick={handleOutsideClick}>
          <div className={css.modalContent}>
            <button
              className={css.closeBtn}
              type="button"
              onClick={() => onClose()}
            >
              <svg className={css.icon} width={32} height={32}>
                <use href="/symbol-defs.svg#icon-close"></use>
              </svg>
            </button>
            {name === "login" && <LogInForm />}
            {name === "register" && <RegisterForm />}
          </div>
        </div>
      </div>
    )
  );
}

export default ModalWindow;
