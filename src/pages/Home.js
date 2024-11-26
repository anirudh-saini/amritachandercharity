import React from "react";
import styles from "./home.module.scss";
import { Hero } from "../component/Hero";
import { Donate } from "../component/Donate";
import { Carousel } from "../component/Carousel";
import { Readmore } from "../component/Readmore";
import { Vision } from "../component/Vision";
import { Charity } from "../component/Charity";

export const Home = () => {
    return (
        <>
            <Hero />
            <Donate />
            <Carousel />
            <Readmore />
            <Vision />
            <Charity />
        </>
    );
};
