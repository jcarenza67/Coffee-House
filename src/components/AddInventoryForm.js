import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function AddInventoryForm(props) {

    function handleNewInventoryFormSubmission(event) {
      event.preventDefault();
      props.onNewInventoryCreation({
        name: event.target.name.value,
        origin: event.target.origin.value,
        roast: event.target.roast.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        id: v4()
      });
    }
  
    return (
      <>
        <ReusableForm
          formSubmissionHandler={handleNewInventoryFormSubmission}
          buttonText="Add to Inventory" />
      </>
    );
  }

  AddInventoryForm.propTypes = {
    onNewInventoryCreation: PropTypes.func
  };

  export default AddInventoryForm;