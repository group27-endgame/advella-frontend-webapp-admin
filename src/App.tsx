import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
