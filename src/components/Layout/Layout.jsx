import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import Loader from "../Loader/Loader";
function Layout({ children }) {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <Suspense fallback={Loader}>
        <main>{children}</main>
      </Suspense>
      <footer className={css.footer}>Coded by Olga Blud</footer>
      {/* add Modal windows  */}
    </>
  );
}

export default Layout;
