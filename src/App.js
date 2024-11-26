import "./App.scss";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/about-us" element={<About />} />
    </Routes>
  );
}

export default App;
