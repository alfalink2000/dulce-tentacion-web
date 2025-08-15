import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.hero} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Dulce Tentación</span>
          <span className={styles.titleShadow}>Dulce Tentación</span>
        </h1>
        <p className={styles.subtitle}>
          Arte repostero hecho con{" "}
          <span className={styles.highlight}>amor</span>, uno por uno, para ti.
        </p>
        <button className={styles.ctaButton}>
          Ver Catálogo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.buttonIcon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.scrollIndicator}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
