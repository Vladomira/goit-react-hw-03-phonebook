import PropTypes from "prop-types";

const { v4: uuidv4 } = require("uuid");

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li id={uuidv4()} key={uuidv4} className="contacts__item">
      {name}
      <span>: {number}</span>
      <button className="contacts__btn" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default ContactItem;
