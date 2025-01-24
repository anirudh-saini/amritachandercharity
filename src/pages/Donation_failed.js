import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Donation_failed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("paymentAttempted")) {
      navigate("/donate");
    } else {
      localStorage.removeItem("paymentAttempted");
    }
    const timer = setTimeout(() => {
      navigate("/donate");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <img src="/failure.png" alt="Payment failed" />
      <h1>Donation Attempt Failed</h1>
      <p>You will be redirected to the donation page shortly...</p>
    </div>
  );
};
