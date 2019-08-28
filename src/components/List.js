import React, { useState, useEffect } from 'react'
import '../App.css'
import ListItem from './ListItem'
import Header from './Header'
import { Link } from 'react-router-dom'

function List() {
	const [items, setItems] = useState([])

	useEffect(() => {
		const pullItems = async () => {
			const localItems = await localStorage.getItem('sayerList')
			if (localItems) {
				const parsedItems = await JSON.parse(localItems)
				setItems(parsedItems)
			}
		}
		pullItems()
	}, [])


	const deleteItem = async id => {
		const filteredList = items.filter(e => e.id !== id)
		setItems(filteredList)
		const stringList = await JSON.stringify(filteredList)
		localStorage.setItem('sayerList', stringList)
	}

	return (
		<div className='list'>
			<Header bigText='Sayer' smallText="World's most used time waster" />

			{items.length > 0 ?
				<ul>
					{items.map(e => {
						return (
							<ListItem
								key={e.id}
								item={e}
								deleteItem={deleteItem}
							/>
						)
					})}
				</ul> :
				<h1>List is empty</h1>
			}

			<Link to='/addItem'>
				<button className='Add'>+</button>
			</Link>

		</div>
	)
}

export default List
