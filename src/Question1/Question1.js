import { createRef } from "react";

const Question1 = () => {
  const content = createRef();

  const handleSubmit = (event) => {
    showAlert();
    event.preventDefault();
  }

  const showAlert = () => {
    alert(content.current.value);
  }

  return (
    <>
      <h1>Question 1</h1>
      <p>Transform this <b>Controlled Component</b> into an <u>Uncontrolled Component</u> that renders a text input and a button.
			When clicking the button, this component should alerts whatever data we have inside the input. We should focus the input as soon as the components renders:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={content} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Question1