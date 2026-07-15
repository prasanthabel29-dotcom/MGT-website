import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./servicesdetails.module.css";
import { servicesList } from "./servicesData";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.show);
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const service = servicesList.find((s) => s.id === parseInt(id, 10));

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          ← Back
        </button>
      </div>

      <div ref={cardRef} className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={service.image} alt={service.title} />
        </div>

        <div className={styles.content}>
          <h1>{service.title}</h1>
          <p>{service.desc}</p>

          <ul>
            {service.points.map((p, i) => (
              <li key={i}>✓ {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
