import { Route, Routes } from "react-router-dom";
import TestPage from './pages/Test.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />}></Route>
    </Routes>
  );
}

export default App;
