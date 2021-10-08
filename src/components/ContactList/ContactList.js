import PropTypes from "prop-types";

import ContactItem from "./ContactItem";
const { v4: uuidv4 } = require("uuid");

//////
const ContactList = ({ contacts, onBtnDelete }) => (
  <>
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={uuidv4()}
            name={name}
            number={number}
            id={id}
            deleteContact={onBtnDelete}
          />
        );
      })}
    </ul>
  </>
);

ContactList.protoTypes = {
  contacts: PropTypes.array.isRequired,
  onBtnDelete: PropTypes.func.isRequired,
};
export default ContactList;
// =========
