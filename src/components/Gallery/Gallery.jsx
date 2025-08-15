import { useState } from "react";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    category: "Pasteles",
    color: "f4e3e0",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
    count: "28 productos",
  },
  {
    category: "Cupcakes",
    color: "e5989b",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    count: "15 variedades",
  },
  {
    category: "Galletas",
    color: "fab4a7",
    image:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    count: "12 recetas",
  },
  {
    category: "Bodas",
    color: "b5e4cd",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    count: "Diseños exclusivos",
  },
  {
    category: "Cumpleaños",
    color: "ddd0be",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
    count: "Temáticas divertidas",
  },
  {
    category: "Personalizados",
    color: "f8e9dc",
    image:
      "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80",
    count: "A tu medida",
  },
  {
    category: "Estacionales",
    color: "e8c4c0",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d8347e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    count: "Por temporada",
  },
  {
    category: "Mini Postres",
    color: "f0d9d5",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    count: "Porciones individuales",
  },
];

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className={styles.section} id="galeria">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Explora Nuestra <span className={styles.highlight}>Galería</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Descubre nuestras creaciones reposteras organizadas por categorías
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              aria-label={`Categoría: ${item.category}`}
            >
              <div
                className={`${styles.itemOverlay} ${
                  hoveredItem === index ? styles.visible : ""
                }`}
              >
                <h3 className={styles.itemTitle}>{item.category}</h3>
                <p className={styles.itemCount}>{item.count}</p>
                <button className={styles.exploreButton}>
                  Explorar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
