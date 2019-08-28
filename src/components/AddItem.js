import React, { useState } from 'react'
import '../App.css'
import Header from './Header.js'

function AddItem(props) {
	const [text, setTitle] = useState('')

	const processAdding = async () => {
		if (text) {
			const newItem = makeItem()
			let parsedList = []
			const localIList = await localStorage.getItem('sayerList')
			if (localIList) {
				parsedList = await JSON.parse(localIList)
			}
			parsedList.push(newItem)
			const stringList = await JSON.stringify(parsedList)
			localStorage.setItem('sayerList', stringList)
			props.history.push('/')
		}
	}

	const makeItem = () => {
		const id = String(Math.random()).replace('.', '')
		return {
			id,
			title: text,
			comments: []
		}
	}

	const updateTitle = e => setTitle(e.target.value)

	return (
		<div>
			<Header />
			<input
				type="text"
				value={text}
				onChange={updateTitle}
			/>
			<br />
			<button onClick={processAdding}>+Add</button>
		</div>
	)
}

export default AddItem

