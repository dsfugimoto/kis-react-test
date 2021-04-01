import { useState } from "react"

const GrandChild = (props) => {

	return (
		<h4>{props.value}</h4>
	)
}

const Child = (props) => {

	return (
		<GrandChild value={props.value} />
	)
}

const Parent = () => {
	const [value] = useState('Parent Value')
	return (
		<>
			<Child value={value} />
		</>
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