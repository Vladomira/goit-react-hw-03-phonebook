import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
// import "./styles/index";
import "../styles/Container.scss";
import "../styles/Form.scss";
import "../styles/ContactsList.scss";

const { v4: uuidv4 } = require("uuid");

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    //   console.log(parseContacts);
    console.log("parseContacts", parseContacts);
    if (parseContacts) {
      // setTimeout(() => {
      this.setState({ contacts: parseContacts });
      // }, 2000);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // const { contacts } = this.state;
    if (this.state.contacts !== prevState.contacts) {
      // console.log("prevState.contacts", prevState.contacts);
      // console.log("this.state.contacts", this.state.contacts);
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  //пpинимает данные из формы
  formSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find((el) => name === el.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({
      [contacts]: contacts.push({
        id: uuidv4(),
        name: name,
        number: number,
      }),
    });
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
  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  handleFilter() {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  }
  render() {
    const { filter } = this.state;
    const contactsData = this.filterContacts();
    return (
      <div className="container">
        <h1 className="header">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2 className="contacts__title">Contacts</h2>
        <Filter value={this.onFilterChange} filter={filter} />
        <ContactList
          contacts={contactsData}
          onBtnDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}
export default App;
