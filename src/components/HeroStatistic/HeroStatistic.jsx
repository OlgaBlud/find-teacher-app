import css from "./HeroStatistic.module.css";

function HeroStatistic() {
  return (
    <section className={css.statisticSection}>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>
          <p className={css.statisticNumber}>32,000 +</p>
          <p className={css.statisticName}>Experienced tutors</p>
        </li>
        <li className={css.statisticItem}>
          <p className={css.statisticNumber}>300,000 +</p>
          <p className={css.statisticName}>5-star tutor reviews</p>
        </li>
        <li className={css.statisticItem}>
          <p className={css.statisticNumber}>120 +</p>
          <p className={css.statisticName}>Subjects taught</p>
        </li>
        <li className={css.statisticItem}>
          <p className={css.statisticNumber}>200 +</p>
          <p className={css.statisticName}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
}

export default HeroStatistic;
