import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from "./ScrollToTop";
import Portfoliodetails from "./pages/portfolio/Portfoliodetails";
import Blogs from "./pages/blogs/Blogs";
import BlogDetail from "./pages/blogs/BlogDetail";
import About from "./pages/About/About";
import Initiatives from "./pages/Initiatives/Initiatives";
import MasterMethodsAdvisors from "./pages/Initiatives/mma";
import NorthDocs from "./pages/Initiatives/north-docs";
// import GAP from "./pages/Initiatives/gap";
// import Academia from "./pages/Initiatives/academia";
// import MediaResearch from "./pages/Initiatives/media-research";
import AfroGlobalFestival from "./pages/Initiatives/afro-global-festival";

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
          {/* <Route path="/initiatives/mma" element={<MasterMethodsAdvisors />} /> */}
          <Route path="/initiatives/north-docs" element={<NorthDocs />} />
          {/* <Route path="/initiatives/gap" element={<GAP />} /> */}
          {/* <Route path="/initiatives/academia" element={<Academia />} /> */}
          {/* <Route path="/initiatives/media-research" element={<MediaResearch />} /> */}
          <Route path="/initiatives/afro-global-festival" element={<AfroGlobalFestival />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          {/* <Route path="/portfolio/:id" element={<Portfoliodetails />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;