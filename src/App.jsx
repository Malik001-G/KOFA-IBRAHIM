import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from "./ScrollToTop";
import Portfoliodetails from "./pages/portfolio/Portfoliodetails";
import Blogs from "./pages/blogs/Blogs";
import BlogDetail from "./pages/blogs/BlogDetail";
import About from "./pages/About/About";
import Initiatives from "./pages/Initiatives/Initiatives";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
