import Person from "./person";

const Persons = ({ persons, query }) => (
  <>
    {persons
      .filter((persons) => persons.name.toLowerCase().includes(query))
      .map(({ name, number }) => (
        <Person name={name} number={number} />
      ))}
  </>
);
export default Persons;
