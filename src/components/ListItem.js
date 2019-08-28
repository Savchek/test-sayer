import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function ListItem(props) {

	return (
		<li>
			<Link to={`/comments/${props.item.id}`}>
				<div className='item-title'>
					<h1>{props.item.title}</h1>
				</div>
				<div className='comments-count'>
					{props.item.comments.length}
				</div>
			</Link>
			<button onClick={() => props.deleteItem(props.item.id)}>Delete</button>
		</li>
	)
}

export default ListItem
