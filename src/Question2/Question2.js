import React from "react"


const Question2 = () => {

  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });

    setList(newList);
  }

  function handleRemove(item) {
    const name = item
    const newList = list.filter(item => item.name !== name);

    setList(newList);
  }

  return (
    <>
      <h1>Question 2</h1>
      <p>Create a component that renders an input, a button and a list of items. You can add items typing in the input and clicking the button.
      You can also remove an item from the list upon clicking it.
			</p>
      {
        <div>
          <div>
            <input type="text" value={name} onChange={handleChange} />
            <button type="button" onClick={handleAdd}>
              Add
        </button>
          </div>

          <ul>
            {list.map((item) => (
              <li key={item.name} onClick={() => handleRemove(item.name)}>{item.name}</li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default Question2