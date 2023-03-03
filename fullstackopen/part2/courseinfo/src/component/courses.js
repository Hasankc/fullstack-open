import React from "react";

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);
const Total = ({ parts }) => (
  <p>
    <strong>
      Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
    </strong>
  </p>
);
const Header = ({ heading }) => <h2>{heading}</h2>;

const Courses = ({ courses }) => (
  <>
    <h1>Web development curriculum</h1>
    {courses.map((courses) => (
      <div>
        <Header heading={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    ))}
  </>
);
export default Courses;