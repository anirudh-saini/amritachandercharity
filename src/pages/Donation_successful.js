import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Donation_successful = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("paymentAttempted")) {
      navigate("/donate");
    } else {
      localStorage.removeItem("paymentAttempted");
    }
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <h1>Thank you for your donation!</h1>
      <p>You will be redirected to the homepage shortly...</p>
    </div>
  );
};
