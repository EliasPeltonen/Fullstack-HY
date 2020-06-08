import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.ex}</p>
  )
}

const Content = (props) => {
  const list = props.list
  return (
    <div>
      <Part part={list[0].part} ex={list[0].ex}/>
      <Part part={list[1].part} ex={list[1].ex}/>
      <Part part={list[2].part} ex={list[2].ex}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const contents = [{part:'Fundamentals of React', ex:10}, {part:'Using props to pass data', ex:7}, {part:'State of a component', ex:14}]
  return (
    <div>
      <Header course={course} />
      <Content list={contents} />
      <Total exercises1={contents[0].ex} exercises2={contents[1].ex} exercises3={contents[2].ex} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
