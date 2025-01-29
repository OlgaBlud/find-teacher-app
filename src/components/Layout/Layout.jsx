import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
function Layout() {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
      {/* add Modal windows  */}
    </>
  );
}

export default Layout;
