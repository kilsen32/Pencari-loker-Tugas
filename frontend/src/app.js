import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Pelatihan from "./pages/pelatihan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/pelatihan" element={<Pelatihan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
