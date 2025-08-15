import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Dulce Tentación</h3>
          <p className={styles.footerDescription}>
            Arte repostero hecho con amor, uno por uno, para ti.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <FaFacebook className={styles.icon} />
            </a>
            <a
              href="https://wa.me/1234567890"
              aria-label="WhatsApp"
              className={styles.socialLink}
            >
              <FaWhatsapp className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Horario</h4>
          <ul className={styles.footerList}>
            <li>Lunes - Viernes: 8:00 AM - 8:00 PM</li>
            <li>Sábado: 9:00 AM - 6:00 PM</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <ul className={styles.footerList}>
            <li>
              <FaMapMarkerAlt className={styles.listIcon} />
              Calle del Postre 123, Ciudad Dulce
            </li>
            <li>
              <FaPhone className={styles.listIcon} />
              +1 (234) 567-890
            </li>
            <li>
              <FaEnvelope className={styles.listIcon} />
              hola@dulcetentacion.com
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Newsletter</h4>
          <p className={styles.newsletterText}>
            Suscríbete para recibir novedades y promociones especiales.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Dulce Tentación. Todos los derechos
          reservados.
        </p>
        <p className={styles.madeWith}>
          Hecho con <span className={styles.heart}>♥</span> y mucho azúcar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
