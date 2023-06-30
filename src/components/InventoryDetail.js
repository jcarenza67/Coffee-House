import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetail({ inventory, onClickingDelete, onClickingEdit, onClickingSell }) {
  return (
    <>
      <h1>Inventory Detail</h1>
      <h3>Name: {inventory.name}</h3>
      <p>Origin: {inventory.origin}</p>
      <p>Roast: {inventory.roast}</p>
      <p>Price: {inventory.price}</p>
      <p>Quantity: {inventory.quantity}</p>

      <button onClick={ onClickingEdit }>Update Inventory</button>
      <button onClick={()=> onClickingDelete(inventory.id) }>Remove Inventory</button>
      <button onClick={()=> onClickingSell(inventory.id) }>Sell</button>
      <hr/>
    </>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default InventoryDetail;
