import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import "../styles/Phonebook.scss";
// const { v4: uuidv4 } = require("uuid");

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

  //пpинимает данные из формы, функция
  formSubmit = (data) => {
    console.log(data);
  };

  render() {
    // const { filter } = this.state;
    // const contactsData = this.filterContacts();
    return (
      <>
        <h1 className="header">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2 className="title">Contacts</h2>
        {/* <Filter value={this.onFilterChange} filter={filter} /> */}
        <ContactList
          // contacts={contactsData}
          onBtnDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
export default App;
// **********************
// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   //пpинимает данные из формы, функция
//   formSubmit = (data) => {
//     console.log(data);
// const { contacts } = this.state;
// this.setState({
//   [contacts]: contacts.push({
//     id: uuidv4(),
//     name: name,
//     number: number,
//   }),
// });
// contacts.map((el) => console.log(el.name));
// contacts.find(({name} => {
//   console.log(el.name, "el.nme");
//   console.log(name);
//   // if (el.name === name) {
//   //   return alert(`${name} is already in contacts`);
//   // }
// });
// };

// onDeleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//     // console.log(contact)
//   }));
// };
// filterContacts = () => {
//   const { contacts, filter } = this.state;
// const normalizeFilter = filter.toLowerCase();
// return contacts.filter((el) =>
//   el.name.toLowerCase().includes(normalizeFilter)
// );
// };
// onFilterChange = (e) => {
//   this.setState({ filter: e.currentTarget.value });
// };

//   render() {
//     // const { filter } = this.state;
//     // const contactsData = this.filterContacts();
//     return (
//       <>
//         <h1 className="header">Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmit} />

//         <h2 className="title">Contacts</h2>
//         {/* <Filter value={this.onFilterChange} filter={filter} /> */}
//         <ContactList
//           // contacts={contactsData}
//           onBtnDelete={this.onDeleteContact}
//         />
//       </>
//     );
//   }
// }
// **********************************
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
// сохраняем контакты
// toSaveContacts = (e) => {
//   const { contacts, name, number } = this.state;

//   this.setState({
//     [contacts]: contacts.push({
//       id: uuidv4(),
//       name: name,
//       number: number,
//     }),
//   });
// };
// +++++
// const storageContacts = {
//   id: uuidv4(),
//   name: name,
//   number: number,
// };
// this.setState({
//   [contacts]: storageContacts,
// });
