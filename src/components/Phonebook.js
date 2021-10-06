import React, { Component } from "react";
import "./Phonebook.scss";
// import { parse as uuidParse } from "uuid";
const { v4: uuidv4 } = require("uuid");

// ======
class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState(() => {
      this.state.contacts.map((el) => {
        if (value === el.name) {
          return alert(`${value} is already in contacts`);
        }
      });
    });
    return this.setState({ [name]: value });
  };
  toSaveContacts = (e) => {
    const { contacts, name, number } = this.state;

    this.setState({
      [contacts]: contacts.push({
        id: uuidv4(),
        name: name,
        number: number,
        filter: "",
      }),
    });
  };
  onSaveData = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state); // отпарвка данных
    this.reset(); // очищение формы
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  // onDeleteContact = (e) => {
  //   console.log(e.currentTarget.parentNode, "par");
  //   const { id } = e.currentTarget.parentNode;
  //   console.log(id, "id");
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((el) => console.log(el, "el")),
  //   }));
  // };
  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
      // console.log(contact)
    }));
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div className="container">
        <h1 className="header">Phonebook</h1>
        <form onSubmit={this.onSaveData}>
          <label>
            Name
            <input
              className="input"
              value={name}
              onChange={this.handleChange}
              id={uuidv4()}
              type="text"
              name="name"
              data-action="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              className="input"
              onChange={this.handleChange}
              id={uuidv4()}
              value={number}
              type="tel"
              data-action="number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
              required
            />
          </label>
          <button
            className="addBtn"
            type="submit"
            data-action="add"
            onClick={this.toSaveContacts}
            disabled={!number || !name}
          >
            Add contact
          </button>
        </form>
        <label>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            defaultValue={filter}
            onChange={this.onFilterChange}
          ></input>
        </label>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map((el) => {
              return (
                <li id={uuidv4()} key={uuidv4()} className="contacts">
                  {el.name}
                  <span>: {el.number}</span>
                  <button
                    // id={uuidv4()}
                    // key={uuidv4()}
                    onClick={this.onDeleteContact}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Phonebook;
// deleteContact = (e) => {
//   const { contacts } = this.state;
//   this.setState(() => {
//     console.log(e.target.parentNode.name.textContent);
//     // console.log(this.state.contacts);
//     contacts.map((el) => {
//       if (e.target.parentNode === el.name) {
//         console.log(el.name, "name");
//       }
//     });
//   });
// };
