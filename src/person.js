import React from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(results => (
        <div class="card-body">
          <h1>{results.dob.age}</h1>
          <h2>{results.gender}</h2>
          <h3>{results.name.first}</h3>
        </div>
      ))}
    </div>
  );
};

export default Persons;
