import React from 'react';
import PropTypes from 'prop-types';

function InventoryItem({ inventory, onInventorySelection }) {
  const { id, name, origin, roast, price, quantity } = inventory;

  const handleSelection = () => {
    onInventorySelection(id);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Origin: {origin}</p>
      <p>Roast: {roast}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleSelection}>Select</button>
    </div>
  );
}

InventoryItem.propTypes = {
  inventory: PropTypes.object,
  onInventorySelection: PropTypes.func,
};

export default InventoryItem;
