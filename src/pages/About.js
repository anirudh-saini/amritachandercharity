import React from "react";
import styles from "./about.module.scss";
import { useNavigate } from "react-router-dom";
export const About = () => {
    const navigate = useNavigate();
    const donate = () => {
        navigate("/contact-us");
    };
    return (
        <>
            <div className={styles.about}>
                <h1>About Us</h1>
            </div>
            <div className={`container ${styles.content}`}>
                <div className={styles.para}>
                    <div>
                        <h2>About Us</h2>
                    </div>
                    <div>
                        <p>
                            Amrita Chander Jankalyan Charitable Trust, a
                            non-profit Organisation in India is working towards
                            bringing sustainable growth in the life of
                            underprivileged Children, Youth and Senior Citizen
                            through relevant education, innovation healthcare
                            and food distribution programs. Our aim is to
                            support the deprived and neglected people of the
                            society to enable them to live in dignity and
                            security. Our objective is to bring happiness to the
                            lives of needy people by supporting them in
                            improving their livelihood with our unwavering
                            dedication and hard work.
                        </p>
                        <p>
                            We as a social service organization strongly believe
                            in the following principles:
                            <ol>
                                <li>Love and Respect for all.</li>
                                <li>Education is the key to upliftment.</li>
                                <li>This life is to help others.</li>
                            </ol>
                        </p>
                        <p>
                            Following these principles our organization aims
                            towards providing support towards the education of
                            underprivileged children, improve the lifestyle of
                            elderly people living in the old age homes and
                            assuring that their basic needs are fulfilled, we
                            also aim to set up medical camps and food
                            distribution programs to keep in check the health of
                            the citizens.
                        </p>
                        <button onClick={donate}>Contact Now</button>
                    </div>
                </div>
                <div>
                    <img src="/gallery/gallery2/g25.jpg" alt="vsdvdvsd" />
                </div>
            </div>
        </>
    );
};
