import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterNav from "./components/FooterNav/FooterNav";
import Navbar from "./components/Navbar/Nav/Nav";
import Home from "./pages/Home/Home";
import PortfolioPage from "./pages/PorfolioPage/PortfolioPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" exact element={<PortfolioPage />} />
        </Routes>
        <FooterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
