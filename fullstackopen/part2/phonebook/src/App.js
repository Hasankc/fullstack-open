import { useState } from "react";
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Hasan abd", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const handleAddNew = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} already added to phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <div>
      <h1>Phonebook</h1>
     <Filter query={filter} handleChange={handleChange(setFilter)}/>
     <h3>Add a new</h3>
    <PersonForm name={newName} number={newNumber} handleChangeName={handleChange(setNewName)} handleChangeNumber={handleChange(setNewNumber)} handleAddPerson={handleChange(handleAddNew)}/>
      <h2>Numbers</h2>
      <Persons person={persons} query={filter}/>
    </div>
  );
};

export default App;
