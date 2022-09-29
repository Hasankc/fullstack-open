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

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)


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
    const total = good + neutral + bad

    if (allClicks > 0) {
      return (good * (100 / total))
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