import React, { Component } from "react";
const { v4: uuidv4 } = require("uuid");

///
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state); // отпарвка данных

    this.reset(); // очищение формы
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form__box" onSubmit={this.handleSubmit}>
        {/* <div className="form__btn-thumb"> */}
        <label className="form__label-box">
          <span className="form__label"> Name</span>
          <input
            className="form__input"
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
          <span className="form__label"> Number</span>
          <input
            className="form__input"
            onChange={this.handleChange}
            id={uuidv4()}
            value={number}
            type="tel"
            name="number"
            data-action="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр, и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
            required
          />
        </label>

        <div className="form__btn-thumb">
          <button
            className="form__addBtn"
            type="submit"
            disabled={!number || !name}
          >
            Add contact
          </button>
        </div>
      </form>
      // </div>
    );
  }
}
export default ContactForm;

// +++++
// handleChange = (e) => {
//   const { name, value } = e.currentTarget;
//   this.setState(() => {
//   //   this.state.contacts.map((el) => {
//   //     if (value === el.name) {
//   //       return alert(`${value} is already in contacts`);
//   //     }
//   //   });
//   // });
//   return this.setState({ [name]: value })
// };
