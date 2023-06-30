import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';
import '../index.css'

function AddInventoryForm(props) {

    function handleNewInventoryFormSubmission(event) {
      event.preventDefault();
      props.onNewInventoryCreation({
        name: event.target.name.value,
        origin: event.target.origin.value,
        roast: event.target.roast.value,
        price: event.target.price.value,
        id: v4()
      });
    }
  
    return (
      <>
        <ReusableForm
          formSubmissionHandler={handleNewInventoryFormSubmission}
          buttonText="Add to Inventory"
          buttonClass="custom-button"
        />
      </>
    );
    
  }

  AddInventoryForm.propTypes = {
    onNewInventoryCreation: PropTypes.func
  };

  export default AddInventoryForm;