import "./style/style.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";

function App(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;