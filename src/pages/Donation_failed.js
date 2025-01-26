import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./donation_failed.module.scss";
export const Donation_failed = () => {
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
            navigate("/donate");
            // Cleanup only when navigating to the homepage
            localStorage.removeItem("paymentAttempted");
        }, 5000);

        return () => {
            clearTimeout(timer); // Clear timeout on component unmount
        };
    }, [navigate]);

    return (
        <div className={`container ${styles.donation_failed}`}>
            <img src="/failure.png" alt="Payment failed" />
            <h1>Donation Attempt Failed</h1>
            <p>You will be redirected to the donation page shortly...</p>
        </div>
    );
};
