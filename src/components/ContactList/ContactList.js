// import PropTypes from "prop-types";

// import ContactItem from "./ContactItem";
// const { v4: uuidv4 } = require("uuid");

//////
const ContactList = ({ contacts, onBtnDelete }) => (
  <>
    <ul>
      {/* {contacts.map((el) => {
        return (
          <ContactItem
            name={el.name}
            number={el.number}
            deleteContact={onBtnDelete}
          />
        );
      })} */}
    </ul>
  </>
);

ContactList.protoTypes = {
  // contacts: PropTypes.array.isRequired,
  // onBtnDelete: PropTypes.func.isRequired,
};
export default ContactList;
// =========
