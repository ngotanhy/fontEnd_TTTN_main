import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, Routes } from "react-router-dom";

//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

//cai history npm install --save history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

//ant design
import "antd/dist/antd.css";

//scss
import "../src/assets/scss/style.scss";

//Cấu hình react router dom
export const history = createBrowserHistory({ window });

//pages

import PageFooter from "./components/Footer/PageFooter";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate";
// import HomeTemplate from "./templates/HomeTemplate";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* thay BrowserRouter thanh historyRouter */}
      <HistoryRouter history={history}>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="/pagefooter" element={<PageFooter />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
