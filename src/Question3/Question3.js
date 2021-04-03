import { createContext, useState } from "react"

const Context = createContext();

const GrandChild = () => (
  <Context.Consumer>
    {(value) => (
      <h4>{value}</h4>
    )}
  </Context.Consumer>
);

const Child = () => {
  return (
    <GrandChild />
  )
}

const Parent = () => {
  const [value] = useState('Parent Value')

  return (
    <Context.Provider value={value}>
      <Child />
    </Context.Provider>
  )
}

const Question3 = () => {

  return (
    <>
      <h1>Question 3</h1>
      <p>Rewrite the components <b>Parent</b>, <b>Child</b> and <b>Grandchild</b> with a new way to access the Parent State from the Grandchild component <u>without using props</u></p>
      <Parent />
    </>
  )
}

export default Question3