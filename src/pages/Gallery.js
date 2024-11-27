import React from "react";
import styles from "./gallery.module.scss";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
export const Gallery = () => {
    const gallery1 = [
        "/gallery/gallery1/g1.jpg",
        "/gallery/gallery1/g2.jpg",
        "/gallery/gallery1/g3.jpg",
        "/gallery/gallery1/g4.jpg",
        "/gallery/gallery1/g5.jpg",
        "/gallery/gallery1/g6.jpg",
        "/gallery/gallery1/g7.jpg",
        "/gallery/gallery1/g8.jpg",
        "/gallery/gallery1/g9.jpg",
        "/gallery/gallery1/g10.jpg",
        "/gallery/gallery1/g11.jpg",
        "/gallery/gallery1/g12.jpg",
        "/gallery/gallery1/g13.jpg",
    ];
    const gallery2 = [
        "/gallery/gallery2/g1.jpg",
        "/gallery/gallery2/g2.jpg",
        "/gallery/gallery2/g3.jpg",
        "/gallery/gallery2/g4.jpg",
        "/gallery/gallery2/g5.jpg",
        "/gallery/gallery2/g6.jpg",
        "/gallery/gallery2/g7.jpg",
        "/gallery/gallery2/g8.jpg",
        "/gallery/gallery2/g9.jpg",
        "/gallery/gallery2/g10.jpg",
        "/gallery/gallery2/g11.jpg",
        "/gallery/gallery2/g12.jpg",
        "/gallery/gallery2/g13.jpg",
        "/gallery/gallery2/g14.jpg",
        "/gallery/gallery2/g15.jpg",
        "/gallery/gallery2/g16.jpg",
        "/gallery/gallery2/g17.jpg",
        "/gallery/gallery2/g18.jpg",
        "/gallery/gallery2/g19.jpg",
        "/gallery/gallery2/g20.jpg",
        "/gallery/gallery2/g21.jpg",
        "/gallery/gallery2/g22.jpg",
        "/gallery/gallery2/g23.jpg",
        "/gallery/gallery2/g24.jpg",
        "/gallery/gallery2/g25.jpg",
        "/gallery/gallery2/g26.jpg",
        "/gallery/gallery2/g27.jpg",
        "/gallery/gallery2/g28.jpg",
        "/gallery/gallery2/g29.jpg",
        "/gallery/gallery2/g30.jpg",
        "/gallery/gallery2/g31.jpg",
    ];
    return (
        <>
            <div className={styles.gallery}>
                <h1>Gallery</h1>
            </div>
            <div>
                <div className={styles.color}>
                    <div className={`container ${styles.gallery1}`}>
                        <p>Our Recent Food Distributions During Nav Durga</p>
                        <LightGallery
                            speed={500}
                            // plugins={[lgZoom]}
                            elementClassNames={styles.slide}
                        >
                            {gallery1.map((src, index) => (
                                <a href={src} key={index}>
                                    <img alt={`Bhandara`} src={src} />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </div>
                <div className={styles.color}>
                    <div className={`container ${styles.gallery1}`}>
                        <p>Child day care Centre with Angan and Anchal</p>
                        <LightGallery
                            speed={500}
                            // plugins={[lgZoom]}
                            elementClassNames={styles.slide}
                        >
                            {gallery1.map((src, index) => (
                                <a href={src} key={index}>
                                    <img alt={`Bhandara`} src={src} />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </div>
                <div className={styles.color}>
                    <div className={`container ${styles.gallery2}`}>
                        <div>
                            <LightGallery
                                speed={500}
                                // plugins={[lgZoom]}
                                elementClassNames={styles.slide}
                            >
                                {gallery2.map((src, index) => (
                                    <a href={src} key={index}>
                                        <img alt={`Bhandara`} src={src} />
                                    </a>
                                ))}
                            </LightGallery>
                        </div>
                        <div>
                            <p>IMAGE GALLERY</p>
                            <div>
                                <img src="/donate.jpg" alt="" />
                                <div>
                                    <p>
                                        Amrita Chander Jankalyan Charitable
                                        Trust
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
