import React from "react";
import styles from "./carousel.module.scss";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
import Slider from "react-slick";

const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
        className={className}
        style={{
            backgroundColor: "#344b9b",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
        }}
        onClick={onClick}
    >
        {direction === "next" ? "►" : "◄"}
    </div>
);

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 8, // Default for larger screens
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 1265,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const images = [
        "carousel/g1.jpg",
        "carousel/g2.jpg",
        "carousel/g3.jpg",
        "carousel/g4.jpg",
        "carousel/g5.jpg",
        "carousel/g6.jpg",
    ];
    return (
        <div className={styles.carousel}>
            <div className="container">
                <div className={styles.heading}>
                    <h3>Gallery</h3>
                </div>
                <div className={styles.gallery}>
                    <LightGallery
                        speed={500}
                        plugins={[lgZoom]}
                        elementClassNames={styles.slide}
                    >
                        {images.map((src, index) => (
                            <a href={src} key={index}>
                                <img alt={`Bhandara`} src={src} />
                            </a>
                        ))}
                    </LightGallery>
                </div>
                <div className={styles.autocarousel}>
                    <Slider {...settings} className={styles.cards}>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div className={styles.c1} key={i}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={`/carousel/c${i + 1}.jpeg`}
                                        alt={`Carousel ${i + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
