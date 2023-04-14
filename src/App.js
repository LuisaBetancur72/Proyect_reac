/* este con rafce*/
import React from "react";
import "./App.scss";
import { Home } from "./pages/Home";
import { Clients } from "./pages/clients/Clients";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/Products";

import { HolderOutlined } from "@ant-design/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allRoutesProject from "./config/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

