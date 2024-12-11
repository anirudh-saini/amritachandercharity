import "./App.scss";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Privacy } from "./pages/Privacy";
import { Contact } from "./pages/Contact";
import { Media } from "./pages/Media";
import { Donate } from "./pages/Donate";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          exact
          path="/"
          element={
            <>
              <Helmet>
                <title>Amrita Chander Charity - Help a student today</title>
              </Helmet>
              <Home />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Helmet>
                <title>Amrita Chander Charity's Team Helping People</title>
              </Helmet>
              <Gallery />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Helmet>
                <title>Learn About Amrita Chander Charity</title>
              </Helmet>
              <About />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Helmet>
                <title>Privacy Policy</title>
              </Helmet>
              <Privacy />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Helmet>
                <title>Get in Touch with Amrita Chander Charity Today!</title>
              </Helmet>
              <Contact />
            </>
          }
        />
        <Route
          path="/media"
          element={
            <>
              <Helmet>
                <title>Amrita Chander Charity in News</title>
              </Helmet>
              <Media />
            </>
          }
        />
        <Route
          path="/donate"
          element={
            <>
              <Helmet>
                <title>
                  Donate Today & Help India's Children with Amrita Chander
                  Charity
                </title>
              </Helmet>
              <Donate />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
