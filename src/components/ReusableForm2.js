import React from "react";
import PropTypes from "prop-types";

function ReusableForm2(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Coffee Name" />
        <input
          type="text"
          name="origin"
          placeholder="Origin" />
        <input
          type="text"
          name="roast"
          placeholder="Roast" />
        <input
          type="number"
          name="price"
          placeholder="Price" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity" />
        <input
          type="number"
          name="burlap"
          placeholder="Burlap" />
        <button className="custom-button" type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm2.propTypes = {
  formSubmissionHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm2;