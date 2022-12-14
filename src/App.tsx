import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

//cai history npm install --save history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

//Cấu hình react router dom
export const history = createBrowserHistory({ window });

//ant design
import "antd/dist/antd.css";

//scss
import "../src/assets/scss/style.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/AdminPages/Dashboard/DashBoard";
import DetailPages from "./pages/DetailPages/DetailPages";
import HomeTemplate from "./templates/HomeTemplate";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <HistoryRouter history={history}>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="detail" element={<DetailPages />} />

            {/* <Route path="detailRoom">
            <Route path=":id" element={<DetailRoom />} />
          </Route> */}

            <Route path="*" element={<Navigate to="" />} />
          </Route>
          <Route path="/admin/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}
