import css from "./HomePage.module.css";
import heroImg from "../../assets/images/face-min.png";
import heroLaptop from "../../assets/images/iMac.png";
function HomePage() {
  return (
    <div>
      <section className={css.heroSection}>
        <div className={css.descriptionWrap}>
          <h1 className={css.heroTitle}>
            Unlock your potential with the best{" "}
            <span className={css.heroTitleMarked}>language</span> tutors
          </h1>
          <p className={css.heroText}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button type="button" className={css.heroBtn}>
            Get started
          </button>
        </div>
        <div className={css.imgWrap}>
          <img className={css.heroImg} src={heroImg} alt="face-icon" />
          <img className={css.laptopImg} src={heroLaptop} alt="laptop" />
        </div>
      </section>
      {/* <section className={css.section}>Statistic</section> */}
    </div>
  );
}

export default HomePage;
