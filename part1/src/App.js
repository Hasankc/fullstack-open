import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}



const Display = props => <div>{props.text} {props.value} </div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [selected, setSelected] = useState(0)

  const getRandom = () => {
    const selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(selected)
    
  }

  const handleClickGood = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }
  const Percentage = () => {
    if (allClicks > 0) {
      return ((good + bad + neutral) / 100) * 100
    }
  }
  const getAverage = () => {
    if (allClicks > 0) {
      return (good - bad) / allClicks
    } else {
      return 0
    }
  }
  if (allClicks > 0) {
    return (
      <div>
        <h1>Give feddback</h1>
        <Button handleClick={getRandom} text= 'generate'/>
        <p>{anecdotes[selected]}</p>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />
        <h1>statistics</h1>
        <Display value={good} text='good' />
        <Display value={neutral} text='neutral' />
        <Display value={bad} text='bad' />
        <Display value={allClicks} text='all' />
        <Display value={getAverage()} text='average' />
        <p> Percentage is {Percentage()} % </p>
      </div>
    )
  } else {
    return (

      <div>
        <h1> No feddback given</h1>
        <h1>Give feddback</h1>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />
      </div>
    )

  }
}

export default App