import PropTypes from "prop-types";
const { v4: uuidv4 } = require("uuid");

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <li id={uuidv4()} key={uuidv4} className="contacts">
      {name}
      <span>: {number}</span>
      <button onClick={() => deleteContact()}>Delete</button>
    </li>
  );
};
ContactItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default ContactItem;
