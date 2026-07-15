import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.crescent}>
        ☾
      </div>

      <h2 className={styles.names}>
        <span>Shebin</span>
<span className={styles.and}>✦</span>
        <span>Amana</span>
      </h2>

      <p className={styles.verse}>
        With love, gratitude and prayers,
        <br />
        we look forward to celebrating with you.
      </p>

      <div className={styles.divider}></div>

      <h3>#AmanShReception</h3>

      <div className={styles.bottom}>
        06 • 09 • 2026
      </div>

    </footer>
  );
}

export default Footer;