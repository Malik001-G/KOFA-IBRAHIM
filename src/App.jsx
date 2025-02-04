import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ScrollToTop from "./ScrollToTop";
import About from './pages/about/About';
import Commitee from './pages/comitee/Commitee';
import Games from './pages/games/Games';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import TakingPart from './pages/takingpart/TakingPart';
import Venue from './pages/venue/Venue';
import NewsPage from "./pages/home/NewsPage";
import Portfoliodetails from "./pages/portfolio/Portfoliodetails";

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
          <Route path="/commitee" element={<Commitee />} />
          <Route path="/games" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/taking-part" element={<TakingPart />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
