import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetail({ inventory, onClickingDelete, onClickingEdit, onClickingSell, onClickingAdd }) {
  return (
    <>
      <h1>Item Detail</h1>
      <h3>Name: {inventory.name}</h3>
      <p>Origin: {inventory.origin}</p>
      <p>Roast: {inventory.roast}</p>
      <p>Price: {inventory.price}</p>
      <p>Quantity: {inventory.quantity}</p>

      <button onClick={ onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(inventory.id) }>Remove Item</button>
      <button onClick={()=> onClickingSell(inventory.id) }>Sell 5 pounds</button>
      <button onClick={()=> onClickingAdd(inventory.id)}>Add 5 pounds</button>
      <hr/>
    </>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingAdd: PropTypes.func,
};

export default InventoryDetail;
