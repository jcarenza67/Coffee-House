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
          brand: "Java Journeys",
          flavor: "Light",
          quantity: 10,
          id: v4()
        },
        {
          name: "Brazilian Decaf",
          brand: "Rio Roasters",
          flavor: "Decaf",
          quantity: 10,
          id: v4()
        },
        {
          name: "Columbian Medium Roast",
          brand: "Columbia Coffee Inc.",
          flavor: "Medium",
          quantity: 10,
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

