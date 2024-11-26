import "./App.scss";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Child } from "./pages/Child";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/child-day" element={<Child />} />
        </Routes>
    );
}

export default App;
