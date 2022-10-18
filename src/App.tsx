import { Route, Routes } from "react-router-dom";
import AdvellaAppBar from "./components/AppBar.component";
import { links } from "./links";
import DashboardPage from "./pages/Dashboard.page";
import FourOhFourPage from "./pages/FourOhFour.page";
import LoginPage from "./pages/Login.page";
import { useCookies } from "react-cookie";
import UserDetailPage from "./pages/users/UserDetail.page";

function App() {
  const [cookie, ,] = useCookies(["token"]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route
        path="/dashboard"
        element={
          cookie.token ? (
            <AdvellaAppBar links={links}>
              <DashboardPage />
            </AdvellaAppBar>
          ) : (
            <FourOhFourPage />
          )
        }
      ></Route>
      <Route
        path="/users/:userId"
        element={
          cookie.token ? (
            <AdvellaAppBar links={links}>
              <UserDetailPage />
            </AdvellaAppBar>
          ) : (
            <FourOhFourPage />
          )
        }
      ></Route>
      {links.map((l) =>
        l.subLinks.map((ls) => (
          <Route
            path={ls.link}
            element={
              cookie.token ? (
                <AdvellaAppBar links={links}>{ls.element}</AdvellaAppBar>
              ) : (
                <FourOhFourPage />
              )
            }
          ></Route>
        ))
      )}

      <Route path="*" element={<FourOhFourPage />}></Route>
    </Routes>
  );
}

export default App;
