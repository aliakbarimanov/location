import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Country from "./pages/Country";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
