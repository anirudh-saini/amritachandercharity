import "./App.scss";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Child } from "./pages/Child";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/child-day" element={<Child />} />
      </Route>
    </Routes>
  );
}

export default App;
