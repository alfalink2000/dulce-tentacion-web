import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>
              Hecho con <span className={styles.highlight}>amor</span> y{" "}
              <span className={styles.highlightSecondary}>mantequilla</span>
            </h2>
            <div className={styles.divider}></div>
            <p className={styles.description}>
              En <strong>Dulce Tentación</strong>, cada producto es elaborado
              artesanalmente con ingredientes frescos, orgánicos y seleccionados
              con el mayor cuidado. Desde la primera cucharada, notarás la
              diferencia:{" "}
              <span className={styles.emphasized}>sabor auténtico</span>,{" "}
              <span className={styles.emphasized}>textura perfecta</span> y{" "}
              <span className={styles.emphasized}>pasión</span> en cada bocado.
            </p>

            <div className={styles.detailsContainer}>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.detailTitle}>Horario</h3>
                  <p className={styles.detailText}>
                    Lunes a Sábado: 8:00 AM - 8:00 PM
                  </p>
                  <p className={styles.detailText}>Domingo: Cerrado</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.detailTitle}>Ubicación</h3>
                  <p className={styles.detailText}>Calle del Postre 123</p>
                  <p className={styles.detailText}>Ciudad Dulce</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageGallery}>
            <div className={styles.imageMain}>
              <img
                src="https://images.unsplash.com/photo-1558312651-b5e6e4b9d6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Pastelería Dulce Tentación"
                className={styles.image}
              />
            </div>
            <div className={styles.imageSecondary}>
              <img
                src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Ingredientes frescos"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
