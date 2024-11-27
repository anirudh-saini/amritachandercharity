import React from "react";
import styles from "./readmore.module.scss";

export const Readmore = () => {
    const data = [
        {
            img: "read/r1.jpg",
            para: "The trust plans to help rural primary schools by donating books, educational supplies, multimedia equipment’s and other resources.",
            heading: "Education for underprivileged children",
            link: "#",
        },
        {
            img: "read/r2.jpg",
            para: "Our organization aims to improve the access to quality healthcare services for the poor and marginalized communities.",
            heading: "Medical Camps",
            link: "#",
        },
        {
            img: "read/r3.jpg",
            para: "We are working on community food distribution such as distributing food packets to the poor and needy people.",
            heading: "Food distribution",
            link: "#",
        },
        {
            img: "read/r4.jpg",
            para: "Our organization aims to support multiple orphanage homes with financial needs and providing a safe environment for children.",
            heading: "Support Orphanage",
            link: "#",
        },
        {
            img: "read/r5.jpg",
            para: "Our organization seeks to bring a positive impact in each and every aspect of the old aged people as they have often been neglected.",
            heading: "Old Age Homes",
            link: "#",
        },
    ];

    return (
        <div className={`container ${styles.container}`}>
            {data.map((item, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.content}>
                        <div className={styles.img}>
                            <img src={item.img} alt={item.heading} />
                        </div>
                        <div className={styles.para}>
                            <h3>{item.heading}</h3>
                            <p>{item.para}</p>
                        </div>
                    </div>
                    {/* <div className={styles.link}>
            <a href={item.link}>Read More</a>
          </div> */}
                </div>
            ))}
        </div>
    );
};
