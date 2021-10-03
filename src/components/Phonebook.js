import React, { Component } from "react";
import styles from "./Phonebook.module.css";
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
    this.setState({ [name]: value });
  };
  contactsData = (e) => {
    const { contacts, name, number } = this.state;
    this.setState({
      [contacts]: contacts.push({
        id: uuidv4(),
        name: name,
        number: number,
      }),
    });
  };
  deleteContact = (e) => {
    const { contacts } = this.state;
    this.setState(() => {
      // console.log(this.state.contacts);
      contacts.map((el) => {
        // console.log(el.name);
        if (e.target.parentNode === el.name) {
          console.log(el.name, "name");
        }
      });
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

  render() {
    const { name, number, filter } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Phonebook</h1>
        <form onSubmit={this.onSaveData}>
          <label>
            Name
            <input
              className={styles.input}
              value={name}
              onChange={this.handleChange}
              id={uuidv4()}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              id={uuidv4()}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
              required
            />
          </label>
          <button
            className={styles.Add}
            type="submit"
            onClick={this.contactsData}
          >
            Add contact
          </button>
        </form>

        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              value={filter}
              onChange={this.onFilterChange}
            ></input>
          </label>
          <ul>
            {this.state.contacts.map((el) => {
              return (
                <li id={uuidv4()} key={uuidv4()} className={styles.contacts}>
                  {el.name}
                  <span>: {el.number}</span>
                  <button
                    id={uuidv4()}
                    key={uuidv4()}
                    onClick={this.deleteContact}
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
