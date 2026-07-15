import styles from "./RSVP.module.css";
import { FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function RSVP() {
  return (
    <ScrollReveal>
    <section className={styles.rsvp} id="rsvp">

      <div className={styles.card}>

        <p className={styles.subtitle}>
          We'd Love To See You
        </p>

        <h2>Celebrate With Us</h2>

        <p className={styles.text}>
          Your presence, prayers, and blessings
          are the greatest gift we could ask for.
        </p>

        <div className={styles.buttons}>

          <a
href="https://wa.me/917034998008?text=Hello%20Shebin!%20I%20am%20delighted%20to%20accept%20your%20invitation%20and%20look%20forward%20to%20celebrating%20your%20Reception.%20See%20you%20on%206%20September!"target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            <FaWhatsapp />
            RSVP on WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/place/MERUZILA+CONVENTION+CENTER/@11.3905317,75.8832788,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6676f2bbafc37:0x961982a6b28edf1c!8m2!3d11.3905317!4d75.8832788!16s%2Fg%2F11q2y0zxy0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className={styles.location}
          >
            <FaLocationDot />
            Get Directions
          </a>

        </div>

        <p className={styles.hashtag}>
          #AmanShReception
        </p>

      </div>
    </section>
    </ScrollReveal>
  );
}

export default RSVP;