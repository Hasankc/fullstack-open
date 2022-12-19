const Filter = ({ query, handleChange }) => (
  <p>
    Filter shown with <input value={query} onChange={handleChange} />
  </p>
);
export default Filter;
