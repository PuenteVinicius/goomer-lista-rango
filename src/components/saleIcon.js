import React from "react";

export default props => {
  const sale = props.value.meal.sale || [];
  return (
    <div className="sale">
      <p className="sale__text">
      <i  className="fas fa-award sale__icon"></i>{sale.description}</p>
    </div>
  );
};
