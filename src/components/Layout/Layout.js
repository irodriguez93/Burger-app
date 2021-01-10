import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/ToolBar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <SideDrawer></SideDrawer>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
