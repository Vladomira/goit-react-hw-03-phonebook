import React, { Component } from "react";
import Phonebook from "./Phonebook";
// import Filter from "./Filter";
// const { v4: uuidv4 } = require("uuid");

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };
  formSubmit = (data) => {
    // console.log(data, "dta");
    // const contactsList = {
    //  contacts: [{
    //     id: uuidv4(),
    //     name,
    //     number,
    //   }],
    // };
    // this.setState((prevState)=>{
    //   contacts: [this.state.contacts, ...prevState.contacts,]
    // })
  };
  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter((el) => {
      return el.name.toLowerCase().trim().includes(normalizeFilter);
    });

    // const { filter } = this.state;
    return (
      <>
        <Phonebook onSubmit={this.formSubmit} props={visibleContacts} />
        {/* <Filter /> */}
        {/* <label>
          Find contacts by name
          <input
            type="text"
            value={filter}
            onChange={this.onFilterChange}
          ></input>
        </label> */}
      </>
    );
  }
}
export default App;

// export default App;
