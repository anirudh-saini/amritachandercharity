import React from "react";
import styles from "./home.module.scss";
import { Hero } from "../component/Hero";
import { Donate } from "../component/Donate";
import { Carousel } from "../component/Carousel";
export const Home = () => {
    return (
        <div>
            <Hero />
            <Donate />
            <Carousel />
        </div>
    );
};
