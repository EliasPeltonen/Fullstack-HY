import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  const p0 = props[0]
  const p1 = props[1]
  const p2 = props[2]
  const all = p0+p1+p2
  const avg = (p0-p2)/all
  const pos = (p0/all)*100
  if (all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
          <StatisticLine text="good" value ={p0} />
          <StatisticLine text="neutral" value ={p1} />
          <StatisticLine text="bad" value ={p2} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={avg} />
          <StatisticLine text="positive" value ={pos} />
          </tbody>
        </table>
      </div>
      )
   } else {
     return (
       <div>
         <h1>Statistics</h1>
         <p>No feedback given</p>
       </div>
     )
   }
}

const StatisticLine = (props) => {
  if (props.text != "positive") {
    return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
      )
  } else {
    return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}%</td>
      </tr>
      )
  }
}


const App = () => {
  // tallenna napit omaan tilaansa

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+ 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      {Statistics([good, neutral, bad])}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
