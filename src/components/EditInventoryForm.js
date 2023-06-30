import React from "react";
import PropTypes from "prop-types";
import ReusableForm2 from "./ReusableForm2";

function EditInventoryForm(props) {

  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      burlap: event.target.burlap.value,
      id: inventory.id
    });
  }

  return (
    <>
      <ReusableForm2
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Inventory"
        defaultValues={inventory} />
    </>
  );
}

EditInventoryForm.propTypes = {
  onEditInventory: PropTypes.func.isRequired
};

export default EditInventoryForm;