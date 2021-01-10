import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active text="Burger Builder">
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" text="Checkout">
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
