const { v4: uuidv4 } = require("uuid");
const Contacts = ({ contacts, onDeleteContact }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      {contacts.map((el) => {
        return (
          <li id={uuidv4()} key={uuidv4()} className="contacts">
            {el.name}
            <span>: {el.number}</span>
            <button
              id={uuidv4()}
              key={uuidv4()}
              //   onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);
export default Contacts;
