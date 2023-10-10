import React, { useState, useEffect, useRef } from 'react';
import styles from './customSlider.module.css';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Author One"
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author Two"
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: "Author Three"
  },
  {
    id: 4,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author Four"
  },
];

function CustomSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialContainerRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Calculate the translateX value based on the current testimonial index
    const translateX = -currentTestimonial * 100; // Assuming each testimonial is 100% wide

    // Apply the transform property to the testimonial container
    testimonialContainerRef.current.style.transform = `translateX(${translateX}%)`;
  }, [currentTestimonial]);

  useEffect(() => {
    // Autoplay functionality
    const autoplayInterval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Change the interval (in milliseconds) as desired

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className={styles['testimonial-slider']}>
      
      <div className={`${styles['testimonial-container']}`} ref={testimonialContainerRef}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`${styles['testimonial']} ${currentTestimonial !== index ? styles['hidden'] : ''}`}>
            <p className={styles.text}>{testimonial.text}</p>
            <p className={styles.author}>- {testimonial.author} -</p>
          </div>
        ))}
      </div>
      <div className={styles['t-slider-navigation']}>

      <button className={`${styles['slider-button']} ${styles['prev-button']}`} onClick={prevTestimonial}>
        &#8249;
      </button>
      <button className={`${styles['slider-button']} ${styles['next-button']}`} onClick={nextTestimonial}>
        &#8250;
      </button>

      </div>
      
    </div>
  );
}

export default CustomSlider;
