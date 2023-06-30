import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../index.css';

function InventoryItem({ inventory, onInventorySelection }) {
  const { id, name, origin, roast, price, quantity, burlap } = inventory;

  const handleSelection = () => {
    onInventorySelection(id);
  };

  return (
    <Card className="inventory-item">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Origin: {origin}</Card.Text>
        <Card.Text>Roast: {roast}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <Card.Text>Burlap: {burlap}</Card.Text>
        <Button variant="primary" onClick={handleSelection}>Select</Button>
      </Card.Body>
    </Card>
  );
}

InventoryItem.propTypes = {
  inventory: PropTypes.object,
  onInventorySelection: PropTypes.func,
};

export default InventoryItem;
