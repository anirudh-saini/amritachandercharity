import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../component/Nav";
import { Footer } from "../component/Footer";
export const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
