import React from "react";
import styles from "./donate.module.scss";
export const Donate = () => {
    return (
        <div className={`container ${styles.donate}`}>
            <div className={styles.img}>
                <img src="donate.jpg" alt="" />
            </div>
            <div className={styles.para}>
                <div>
                    <h2>Amrita Chander Jankalyan Charitable Trust</h2>
                </div>
                <div>
                    <p>
                        Amrita Chander Jankalyan Charitable Trust, a non-profit
                        Organisation in India is working towards bringing
                        sustainable growth in the life of underprivileged
                        Children, Youth and Senior Citizen through relevant
                        education, innovation healthcare and food distribution
                        programs. Our aim is to support the deprived and
                        neglected people of the society to enable them to live
                        in dignity and security. Our objective is to bring
                        happiness to the lives of needy people by supporting
                        them in improving their livelihood with our unwavering
                        dedication and hard work.
                    </p>
                    <p>
                        We as a social service organization strongly believe in
                        the following principles:
                        <ul>
                            <li>Love and Respect for all.</li>
                            <li>Education is the key to upliftment.</li>
                            <li>This life is to help others.</li>
                        </ul>
                    </p>
                    <p>
                        Following these principles our organization aims towards
                        providing support towards the education of
                        underprivileged children, improve the lifestyle of
                        elderly people living in the old age homes and assuring
                        that their basic needs are fulfilled, we also aim to set
                        up medical camps and food distribution programs to keep
                        in check the health of the citizens.
                    </p>
                    <button>DONATE NOW</button>
                </div>
            </div>
        </div>
    );
};
