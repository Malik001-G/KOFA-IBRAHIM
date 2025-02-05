import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from "./ScrollToTop";
import Portfoliodetails from "./pages/portfolio/Portfoliodetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio/:id" element={<Portfoliodetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
