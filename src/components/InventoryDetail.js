import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function InventoryDetail({ inventory, onClickingDelete, onClickingEdit, onClickingSell, onClickingAdd, onClickingBurlap }) {
  return (
    <div className="container">
      <h1 className="mb-4">Item Detail</h1>
      <Card>
        <Card.Body>
          <Card.Title>Name: {inventory.name}</Card.Title>
          <Card.Text>Origin: {inventory.origin}</Card.Text>
          <Card.Text>Roast: {inventory.roast}</Card.Text>
          <Card.Text>Price: ${inventory.price} a sack (130lbs)</Card.Text>
          <Card.Text>Quantity: {inventory.quantity}lbs</Card.Text>
          <Card.Text>Burlap: {inventory.burlap}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="me-2" onClick={onClickingEdit}>Update Item</Button>
          <Button variant="danger" className="me-2" onClick={() => onClickingDelete(inventory.id)}>Remove Item</Button>
          <Button variant="success" className="me-2" onClick={() => onClickingSell(inventory.id)}>Sell 1 pound</Button>
          <Button variant="info" className="me-2" onClick={() => onClickingAdd(inventory.id)}>Add 1 pound</Button>
          <Button variant="secondary" onClick={() => onClickingBurlap(inventory.id)}>Add Burlap</Button>
        </Card.Footer>
      </Card>
    </div>
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
