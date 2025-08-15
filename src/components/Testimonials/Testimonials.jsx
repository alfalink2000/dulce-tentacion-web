import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    text: "El mejor pastel de cumpleaños que he probado. ¡Todo el mundo preguntó de dónde era! La presentación fue espectacular y el sabor aún mejor. Definitivamente repetiremos.",
    author: "Carla M.",
    rating: 5,
    avatar: "🍰",
  },
  {
    id: 2,
    text: "Las galletas son perfectas para regalar. Frescas, bonitas y deliciosas. Hice un pedido para mi empresa y todos quedaron encantados. El empaque también era precioso.",
    author: "Andrés R.",
    rating: 4,
    avatar: "🍪",
  },
  {
    id: 3,
    text: "Hicieron mi pastel de bodas y fue un sueño hecho realidad. Sabor y diseño impecable. Trabajaron con nosotros para crear exactamente lo que imaginamos. ¡Inolvidable!",
    author: "Lucía & Diego",
    rating: 5,
    avatar: "💍",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Lo que dicen{" "}
            <span className={styles.highlight}>nuestros clientes</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            La dulce satisfacción de quienes han probado nuestras creaciones
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={styles.testimonialCard}
              onMouseEnter={() => setActiveTestimonial(testimonial.id)}
            >
              <div className={styles.avatar}>{testimonial.avatar}</div>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.star} ${
                      i < testimonial.rating ? styles.filled : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              className={`${styles.dot} ${
                activeTestimonial === testimonial.id ? styles.active : ""
              }`}
              onClick={() => setActiveTestimonial(testimonial.id)}
              aria-label={`Mostrar testimonio ${testimonial.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
