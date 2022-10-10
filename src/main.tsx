import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, Routes } from "react-router-dom";

//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/cofigStore";

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
import { Home } from "./pages/Home/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* thay BrowserRouter thanh historyRouter */}
      <HistoryRouter history={history}>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="" element={<Home />}>
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
