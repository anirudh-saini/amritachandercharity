import { React, useState, useEffect } from "react";
// import styles from "./home.module.scss";
import { Hero } from "../component/Hero";
import { Donate } from "../component/Donate";
import { Carousel } from "../component/Carousel";
import { Readmore } from "../component/Readmore";
import { Vision } from "../component/Vision";
import { Charity } from "../component/Charity";
import { Modal } from "../component/Modal";

export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(true); 

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; 
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && <Modal onClose={closeModal} />}
      <Hero />
      <Donate />
      <Carousel />
      <Readmore />
      <Vision />
      <Charity />
    </>
  );
};
