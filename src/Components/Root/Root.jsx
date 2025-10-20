import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import SideNavbar from "../SideNavbar/SideNavbar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <section className="flex ">
        <SideNavbar></SideNavbar>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Root;
