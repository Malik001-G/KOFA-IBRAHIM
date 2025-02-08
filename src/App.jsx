import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from "./ScrollToTop";
import Portfoliodetails from "./pages/portfolio/Portfoliodetails";
import Blogs from "./pages/blogs/Blogs";
import BlogDetail from "./pages/blogs/BlogDetail";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/:id" element={<Portfoliodetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
