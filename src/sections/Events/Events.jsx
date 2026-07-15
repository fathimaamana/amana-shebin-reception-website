import styles from "./Events.module.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Events() {
  return (
    <ScrollReveal>
    <section className={styles.events} id="events">

      <p className={styles.subtitle}>
        Our Celebration
      </p>

      <h2>
        Reception
      </h2>

      <div className={styles.card}>

        <div className={styles.crescent}>
          ☾
        </div>

        <h3>
          Sunday
        </h3>

        <p className={styles.date}>
          6 September 2026
        </p>

        <div className={styles.divider}></div>

        <div className={styles.info}>

          <div>
            <span>Time</span>
            <h4>12:00 PM onwards</h4>
          </div>

          <div>
            <span>Venue</span>
            <h4>
              Meruzilla Convention Center
            </h4>

            <p>
              Elettil Vattoli
            </p>
          </div>

        </div>

      </div>

    </section>
    </ScrollReveal>
  );
}

export default Events;