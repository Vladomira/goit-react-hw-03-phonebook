import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import "../styles/Phonebook.scss";
const { v4: uuidv4 } = require("uuid");

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  formSubmit = (data) => {
    // console.log(data, "dta");
  };

  toSaveContacts = (e) => {
    const { contacts, name, number } = this.state;

    this.setState({
      [contacts]: contacts.push({
        id: uuidv4(),
        name: name,
        number: number,
        // filter: "",
      }),
    });
  };
  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
      // console.log(contact)
    }));
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };
  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { filter } = this.state;
    const contactsData = this.filterContacts();
    return (
      <>
        <h1 className="header">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} onClick={this.toSaveContacts} />

        <h2 className="title">Contacts</h2>
        <Filter value={this.onFilterChange} filter={filter} />
        <ContactList
          contacts={contactsData}
          onBtnDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
export default App;
// =======

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
// ============
/* <Filter
        // props={visibleContacts}
        // onChange={this.handleFilterChange}
        // filter={filter}
        />
        <Phonebook
          onSubmit={this.formSubmit}
          // props={visibleContacts
        />
        <Contacts contacts={contacts} /> */
// ++++++++++++
// const normalizeFilter = this.state.filter.toLowerCase();
// const visibleContacts = this.state.contacts.filter((el) =>
//   el.name.toLowerCase().includes(normalizeFilter)
// );

// const { filter, contacts } = this.state;
// ++++++++++
