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
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;
