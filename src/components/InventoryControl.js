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
          burlap: 0,
          id: v4()
        },
        {
          name: "Brazilian Decaf",
          origin: "Brazil",
          roast: "Decaf",
          price: 100,
          quantity: 110,
          burlap: 0,
          id: v4()
        },
        {
          name: "Columbian Medium Roast",
          origin: "Columbia",
          roast: "Medium",
          price: 110,
          quantity: 190,
          burlap: 1,
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
    if (!newInventory.name || 
      !newInventory.origin ||
      !newInventory.roast || 
      !newInventory.price ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newInventoryItem = {
      ...newInventory,
      quantity: 0,
      burlap: 0,
      id: v4(),
    };
  
    this.setState((prevState) => ({
      mainInventoryList: [...prevState.mainInventoryList, newInventoryItem],
      formVisibleOnPage: false,
    }));
  };
  
  

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

  handleEditingInventoryInList = (updatedInventory) => {
    if (!updatedInventory.name || 
      !updatedInventory.origin ||
      !updatedInventory.roast || 
      !updatedInventory.price || 
      !updatedInventory.quantity || 
      !updatedInventory.burlap) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    const updatedInventoryWithZeroValues = {
      ...updatedInventory,
      quantity: 0,
      burlap: 0
    };
  
    const updatedMainInventoryList = this.state.mainInventoryList.map((inventory) => {
      if (inventory.id === updatedInventory.id) {
        return updatedInventoryWithZeroValues;
      }
      return inventory;
    });
  
    this.setState({
      mainInventoryList: updatedMainInventoryList,
      editing: false,
      selectedInventory: null
    });
  };
  
  

  handleSellClick = (id) => {
    this.setState(prevState => {
      const updatedInventoryList = prevState.mainInventoryList.map(inventory => {
        if (inventory.id === id) {
          const updatedQuantity = inventory.quantity - 1;
          const updatedBurlap = Math.floor(updatedQuantity / 130);
          if (updatedQuantity < 0) {
            alert("Not enough inventory to sell!");
            return inventory;
          }
          return { ...inventory, quantity: updatedQuantity, burlap: updatedBurlap };
        }
        return inventory;
      });
  
      return {
        mainInventoryList: updatedInventoryList,
        selectedInventory: updatedInventoryList.find(inventory => inventory.id === id)
      };
    });
  };
  
  
  handleAddingQuantity = (id) => {
    this.setState(prevState => {
      const updatedInventoryList = prevState.mainInventoryList.map(inventory => {
        if (inventory.id === id) {
          const updatedQuantity = inventory.quantity + 1;
          const updatedBurlap = Math.floor(updatedQuantity / 130);
          return { ...inventory, quantity: updatedQuantity, burlap: updatedBurlap };
          }
        return inventory;
      });

      return {
        mainInventoryList: updatedInventoryList,
        selectedInventory: updatedInventoryList.find(inventory => inventory.id === id)
      };
    });
  };

  handleAddingBurlap = (id) => {
    this.setState(prevState => {
      const updatedInventoryList = prevState.mainInventoryList.map(inventory => {
        if (inventory.id === id) {
          const updatedBurlap = inventory.burlap + 1;
          const updatedQuantity = inventory.quantity + 130;
          return { ...inventory, burlap: updatedBurlap, quantity: updatedQuantity };
        }
        return inventory;
      });
  
      return {
        mainInventoryList: updatedInventoryList,
        selectedInventory: updatedInventoryList.find(inventory => inventory.id === id)
      };
    });
  };
  

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
        onClickingAdd = {this.handleAddingQuantity}
        onClickingBurlap = {this.handleAddingBurlap}
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
