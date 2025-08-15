import { useState } from "react";
import styles from "./FeaturedProducts.module.css";

const products = [
  {
    id: 1,
    name: "Pastel de Chocolate Belga",
    price: "$45",
    description:
      "Elaborado con chocolate belga premium y decorado con frutos rojos",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
    tags: ["Nuevo", "Popular"],
  },
  {
    id: 2,
    name: "Cupcakes de Vainilla Orgánica",
    price: "$3 c/u",
    description:
      "Hechos con vainilla de Madagascar y frosting de crema de mantequilla",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Orgánico"],
  },
  {
    id: 3,
    name: "Tarta de Frutas Frescas",
    price: "$38",
    description: "Mezcla de frutas de temporada sobre crema pastelera casera",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    tags: ["Fresco", "Vegetariano"],
  },
  {
    id: 4,
    name: "Galletas de Mantequilla Artesanales",
    price: "$2.5 c/u",
    description: "Crujientes galletas con trozos de chocolate belga",
    img: "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tags: ["Pack x12"],
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className={styles.section} id="productos">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Nuestros{" "}
            <span className={styles.highlight}>Productos Destacados</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Delicias horneadas con ingredientes premium y mucho amor
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={styles.imageContainer}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImage}
                />
                {product.tags && (
                  <div className={styles.tagsContainer}>
                    {product.tags.map((tag, index) => (
                      <span key={index} className={styles.productTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div
                  className={`${styles.productOverlay} ${
                    hoveredProduct === product.id ? styles.visible : ""
                  }`}
                >
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                  <button className={styles.productButton}>
                    Añadir al carrito
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.cartIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
