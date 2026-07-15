import styles from "./Venue.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { weddingData } from "../../constants/weddingData";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

function Venue() {
  return (
    <ScrollReveal>
      <section className={styles.venue} id="venue">
        <div className={styles.container}>
          <p className={styles.subtitle}>
            Wedding Venue
          </p>

          <h2>
            {weddingData.venue.name}
          </h2>

          <p className={styles.address}>
            {weddingData.venue.address}
          </p>

          <div className={styles.map}>
            <iframe
              title="Meruzila Convention Center"
              src="https://maps.google.com/maps?output=embed&q=Meruzila+Convention+Center,+Poonoor+Narikkuni+Road,+Elettil,+Kizhakkoth,+Kerala+673572"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
  href="https://www.google.com/maps/place/MERUZILA+CONVENTION+CENTER/@11.3905317,75.8832788,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6676f2bbafc37:0x961982a6b28edf1c!8m2!3d11.3905317!4d75.8832788!16s%2Fg%2F11q2y0zxy0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.button}
>
  <FaLocationDot />
  Get Directions
</a>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Venue;