import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from './InventoryItem';

function InventoryList({ inventoryList, onInventorySelection }) {
  return (
    <>
      <h1>Inventory List</h1>
      {inventoryList.map((inventory) => (
        <InventoryItem
          key={inventory.id}
          inventory={inventory}
          onInventorySelection={onInventorySelection}
        />
      ))}
    </>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.arrayOf(PropTypes.object),
  onInventorySelection: PropTypes.func,
};

export default InventoryList;
