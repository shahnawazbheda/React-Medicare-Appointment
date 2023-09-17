import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/client/Home";
import About from "./components/client/About";
import Timeline from "./components/client/Timeline";
import Testimonials from "./components/client/Testimonials";
import Booking from "./components/client/Booking";
import View_Booking from "./components/client/View_Booking";
import Update from "./components/client/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/timeline" element={<Timeline />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/view_booking" element={<View_Booking />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

