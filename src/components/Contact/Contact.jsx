import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío a API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      message: "",
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>
              ¿Quieres un postre{" "}
              <span className={styles.highlight}>especial?</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Completa el formulario y nos pondremos en contacto contigo para
              crear el postre perfecto para tu ocasión especial.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Calle del Postre 123, Ciudad Dulce</span>
              </div>
              <div className={styles.infoItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (234) 567-890</span>
              </div>
              <div className={styles.infoItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>hola@dulcetentacion.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {submitSuccess && (
              <div className={styles.successMessage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.successIcon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                  pronto.
                </p>
              </div>
            )}

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label className={styles.label}>Tu nombre completo</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label className={styles.label}>Correo electrónico</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label className={styles.label}>Teléfono</label>
              </div>

              <div className={styles.inputGroup}>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={styles.input}
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="cumpleaños">Cumpleaños</option>
                  <option value="boda">Boda</option>
                  <option value="aniversario">Aniversario</option>
                  <option value="empresa">Evento empresarial</option>
                  <option value="otro">Otro</option>
                </select>
                <label className={styles.label}>Tipo de evento</label>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="date"
                  name="date"
                  placeholder=" "
                  value={formData.date}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <label className={styles.label}>Fecha del evento</label>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={styles.textarea}
                required
              />
              <label className={styles.label}>Cuéntanos más detalles</label>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className={styles.spinner} viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar Solicitud"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
