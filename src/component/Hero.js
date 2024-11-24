import React from "react";
import styles from "./hero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings} className={styles.slide}>
                <div className={styles.h1}>
                    <img src="/hero/h1.png" alt="img" />
                </div>
                <div className={styles.h1}>
                    <img src="/hero/h2.jpg" alt="img" />
                </div>
                <div className={styles.h1}>
                    <img src="/hero/h3.jpg" alt="img" />
                </div>
                <div className={styles.h1}>
                    <img src="/hero/h4.jpeg" alt="img" />
                </div>
                <div className={styles.h1}>
                    <img src="/hero/h5.jpeg" alt="img" />
                </div>
            </Slider>
        </div>
    );
};
