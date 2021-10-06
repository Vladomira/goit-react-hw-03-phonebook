import React, { Component } from "react";
import Phonebook from "./Phonebook";
import Filter from "./Filter";
// import Contacts from "./Contacts";
// const { v4: uuidv4 } = require("uuid");

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  formSubmit = (data) => {
    // console.log(data, "dta");
  };

  // handleFilterChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });

  //   this.setState(() => {
  //     this.state.contacts.map((el) => {
  //       // console.log(value);
  //       if (value === el.name) {
  //         const render = <li>{el.name}</li>;
  //         return render;
  //       }
  //     });
  //   });
  // };

  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    // const normalizeFilter = this.state.filter.toLowerCase();
    // const visibleContacts = this.state.contacts.filter((el) =>
    //   el.name.toLowerCase().includes(normalizeFilter)
    // );

    // const { filter, contacts } = this.state;
    return (
      <>
        <Filter
        // props={visibleContacts}
        // onChange={this.handleFilterChange}
        // filter={filter}
        />
        <Phonebook
          onSubmit={this.formSubmit}
          // props={visibleContacts
        />
        {/* <Contacts contacts={contacts} /> */}
      </>
    );
  }
}
export default App;
