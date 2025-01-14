import React from "react";
import styles from "./contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Contact = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .required("Name is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
            .required("Phone is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .required("Message is required"),
    });

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        message: "",
    };
    const api_url = process.env.REACT_APP_API_URL;
    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            console.log("API URL:", api_url);
            const response = await axios.post(`${api_url}/api/send`, values);
            if (response.status === 200) {
                alert("Form Submitted Successfully!");
                resetForm(); // Reset form fields
            } else {
                alert("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(
                error.response?.data?.message ||
                    "An unexpected error occurred. Please try again later."
            );
        } finally {
            setSubmitting(false); // Stop the loading state
        }
    };

    return (
        <>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.679984047412!2d77.2800968!3d28.632159800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac87f20d59%3A0xd82b1e71a3f08e0c!2sAmrita%20Chander%20Jankalyan%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1732732032323!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={`container ${styles.contact}`}>
                <h1>CONTACT US</h1>
                <div>
                    <div className={styles.address}>
                        <div>
                            <h2>Address</h2>
                        </div>
                        <div>
                            <div className={styles.add}>
                                <p>Branch Office</p>
                                <p>
                                    DA-8, Basement, Vikas Marg, Shakarpur, New
                                    Delhi-110092
                                </p>
                            </div>
                            <div className={styles.add}>
                                <p>Administrative Office</p>
                                <p>
                                    Sri Sai House, H-97, Sector 63, Noida, Uttar
                                    Pradesh-201301.
                                </p>
                            </div>

                            <div className={styles.number}>
                                <a href="tel:+91 93545 58249">
                                    +91 93545 58249
                                </a>
                                <a href="tel:+91 1144753285">+91 1144753285</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img src="/gallery/gallery2/g25.jpg" alt="contact" />
                    </div>
                    <div className={styles.form}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div>
                                        <Field name="name" placeholder="Name" />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="phone"
                                            placeholder="Phone"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            name="message"
                                            placeholder="Message"
                                            as="textarea"
                                            rows="4"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className={styles.error}
                                        />
                                    </div>
                                    <div className={styles.button}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting
                                                ? "Submitting..."
                                                : "Submit"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};
