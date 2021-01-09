import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/ToolBar/Toolbar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
