import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AdvellaAppBar from "./components/AppBar.component";
import { links } from "./links";
import FourOhFourPage from "./pages/FourOhFour.page";
import LoginPage from "./pages/Login.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/dashboard" element={<AdvellaAppBar links={links}><Box /></AdvellaAppBar>}></Route>

      {links.map((l) =>
        l.subLinks.map((ls) => (
          <Route
            path={ls.link}
            element={<AdvellaAppBar links={links}>{ls.element}</AdvellaAppBar>}
          ></Route>
        ))
      )}

      <Route path="*" element={<FourOhFourPage />}></Route>
    </Routes>
  );
}

export default App;
