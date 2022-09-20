const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.content[0].name} exercises={props.content[0].exercises} />
      <Part content={props.content[1].name} exercises={props.content[1].exercises} />
      <Part content={props.content[2].name} exercises={props.content[2].exercises} />

    </div>
  )
}

const Total = (props) => {

  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.content} {props.exercises}
    </p>
  )
}
const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



export default App