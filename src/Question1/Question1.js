import { useState } from "react"

const Question1 = () => {
	const [content, setContent] = useState('')

	const handleChange = e => {
		setContent(e.target.value);
	}

	const showAlert = () => {
		alert(content);
	}

	return (
		<>
			<h1>Question 1</h1>
			<p>Transform this <b>Controlled Component</b> into an <u>Uncontrolled Component</u> that renders a text input and a button. 
			When clicking the button, this component should alerts whatever data we have inside the input. We should focus the input as soon as the components renders:</p>
			<input type="text" value={content} onChange={handleChange} />
			<button onClick={showAlert}>Alert!</button>
		</>
	)
}

export default Question1