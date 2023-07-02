import React from "react";
import PropTypes from "prop-types";

function ReusableForm2(props) {
  return (
    <>
    <br />
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
          placeholder="Price per burlap" />
        <button className="custom-button" type="submit">{props.buttonText}</button>
      </form>
      <br />
      <p><strong>!please update the quantity and burlaps in the details please!</strong></p>
    </>
  );
}

ReusableForm2.propTypes = {
  formSubmissionHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm2;