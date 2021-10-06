// import styles from "./Phonebook.module.css";

const Filter = ({ filter, onChange }) => (
  <div>
    <label>
      <h3>Find contacts by name</h3>
      <input type="text" defaultValue={filter} onChange={onChange}></input>
    </label>
  </div>
);

export default Filter;
