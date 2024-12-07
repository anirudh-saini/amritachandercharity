import { React, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../component/Nav";
import { Footer } from "../component/Footer";
import { Modal } from "../component/Modal";
export const Layout = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
 
    sessionStorage.setItem("isModalShown", "true");
  };

  useEffect(() => {
    const isModalShown = sessionStorage.getItem("isModalShown");
    if (!isModalShown) {
      setModalOpen(true); 
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isModalOpen]);
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        {isModalOpen && <Modal onClose={closeModal} />}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
