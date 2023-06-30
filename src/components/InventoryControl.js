import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import AddInventoryForm from './AddInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [
        {
          name: "Sumatra Light Roast",
          origin: "Sumatra",
          roast: "Light",
          price: 120,
          quantity: 10,
          id: v4()
        },
        {
          name: "Brazilian Decaf",
          origin: "Brazil",
          roast: "Decaf",
          quantity: 110,
          id: v4()
        },
        {
          name: "Columbian Medium Roast",
          origin: "Columbia",
          roast: "Medium",
          quantity: 190,
          id: v4()
        }
      ],
      selectedInventory: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({mainInventoryList: newMainInventoryList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory});
  }

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(inventory => inventory.id !== id);
    this.setState({mainInventoryList: newMainInventoryList,
                  selectedInventory: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingInventoryInList = (inventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(inventory => inventory.id !== this.state.selectedInventory.id)
      .concat(inventoryToEdit);
    this.setState({
        mainInventoryList: editedMainInventoryList,
        editing: false,
        selectedInventory: null
      });
  }

  handleSellClick = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    if (selectedInventory.quantity > 0) {
      const newQuantity = Object.assign({}, selectedInventory, {quantity: selectedInventory.quantity - 1});
      const editedMainInventoryList = this.state.mainInventoryList
        .filter(inventory => inventory.id !== id)
        .concat(newQuantity);
      this.setState({
          mainInventoryList: editedMainInventoryList,
          selectedInventory: null
      });
    } else {
      alert("No more coffee to sell!");
    }
  }

  renderEditForm() {
    return (
      <EditInventoryForm
        inventory = {this.state.selectedInventory}
        onEditInventory = {this.handleEditingInventoryInList}
      />
    );
  }

  renderInventoryDetail() {
    return (
      <InventoryDetail
        inventory = {this.state.selectedInventory}
        onClickingDelete = {this.handleDeletingInventory}
        onClickingEdit = {this.handleEditClick}
        onClickingSell = {this.handleSellClick}
      />
    );
  }

  renderInventoryForm() {
    return (
      <AddInventoryForm
        onNewInventoryCreation={this.handleAddingNewInventoryToList}
      />
    );
  }

  renderInventoryList() {
    return (
      <InventoryList
        inventoryList={this.state.mainInventoryList}
        onInventorySelection={this.handleChangingSelectedInventory}
      />
    );
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = this.renderEditForm();
      buttonText = "Return to Inventory List";
    } else if (this.state.selectedInventory != null) {
      currentlyVisibleState = this.renderInventoryDetail();
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = this.renderInventoryForm();
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = this.renderInventoryList();
      buttonText = "Add Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

InventoryControl.propTypes = {
  mainInventoryList: PropTypes.array
};

export default InventoryControl;
