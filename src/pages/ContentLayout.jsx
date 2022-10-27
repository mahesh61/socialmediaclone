import React from "react";

import NavBar from "../Components/navbar/NavBar";
import RightBar from "../Components/rightbar/RightBar";
import LeftBar from "../Components/leftbar/LeftBar";
import { Outlet } from "react-router-dom";

export const ContentLayout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ disolay: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};
