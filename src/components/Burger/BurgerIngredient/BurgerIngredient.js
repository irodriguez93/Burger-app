import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BurgerIngredient.css";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="Bread-Bottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="Bread-Top">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "Meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "Cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "Salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "Bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
