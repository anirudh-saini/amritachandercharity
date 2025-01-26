import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./donation_successful.module.scss";
export const Donation_successful = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const paymentAttempted = localStorage.getItem("paymentAttempted");

        if (!paymentAttempted) {
            console.log("Redirecting to /donate as payment was not attempted.");
            navigate("/donate");
            return;
        }

        console.log("Payment Attempted, staying on success page.");
        const timer = setTimeout(() => {
            console.log("Navigating to homepage.");
            navigate("/");
            // Cleanup only when navigating to the homepage
            localStorage.removeItem("paymentAttempted");
        }, 5000);

        return () => {
            clearTimeout(timer); // Clear timeout on component unmount
        };
    }, [navigate]);

    return (
        <div className={`container ${styles.donation_successful}`}>
            <img src="/success.png" alt="Payment Successful" />
            <h1>Thank you for your donation!</h1>
            <p>You will be redirected to the homepage shortly...</p>
        </div>
    );
};
