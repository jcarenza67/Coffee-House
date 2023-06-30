import React from 'react';
import PropTypes from 'prop-types';

function InventoryDetail({ inventory, 
  onClickingDelete, 
  onClickingEdit, 
  onClickingSell, 
  onClickingAdd, 
  onClickingBurlap }) {
  return (
    <>
      <h1>Item Detail</h1>
      <h3>Name: {inventory.name}</h3>
      <p>Origin: {inventory.origin}</p>
      <p>Roast: {inventory.roast}</p>
      <p>Price: ${inventory.price} a sack(130lbs)</p>
      <p>Quantity: {inventory.quantity}lbs</p>
      <p>Burlap: {inventory.burlap}</p>
      <hr/>

      <button onClick={ onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(inventory.id) }>Remove Item</button>
      <button onClick={()=> onClickingSell(inventory.id) }>Sell 1 pound</button>
      <button onClick={()=> onClickingAdd(inventory.id)}>Add 1 pound</button>
      <button onClick={()=> onClickingBurlap(inventory.id)}>Add Burlap</button>
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
  onClickingBurlap: PropTypes.func
};

export default InventoryDetail;
