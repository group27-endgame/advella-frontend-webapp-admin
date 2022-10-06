import { Route, Routes } from "react-router-dom";
import FourOhFourPage from "./pages/FourOhFour.page";
import LoginPage from "./pages/Login.page";
import MainPage from "./pages/Main.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>

      <Route path="*" element={<FourOhFourPage />}></Route>
    </Routes>
  );
}

export default App;
