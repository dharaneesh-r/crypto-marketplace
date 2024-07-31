import Navbar from "./Components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Coin from "./pages/home/coins/coin";

const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinid" element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
