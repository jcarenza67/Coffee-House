import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form className="form2" onSubmit={props.formSubmissionHandler}>
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
        <button className="custom-button" type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm;