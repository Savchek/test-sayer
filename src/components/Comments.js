import React, { useState, useEffect } from 'react'
import '../App.css'
import Header from './Header'
import CommentItem from './CommentItem'

function Comments({ match }) {
	const [comments, setComments] = useState([])

	useEffect(() => {

		const pullComments = async () => {
			const localItems = await localStorage.getItem('sayerList')
			if (localItems) {
				const parsedItems = await JSON.parse(localItems)
				const rightItem = parsedItems.find(e => e.id === match.params.id)
				if (rightItem.comments && rightItem.comments.length > 0) {
					setComments(rightItem.comments)
				}
			}
		}

		pullComments()
	}, [match])


	return (
		<div>
			<Header />
			{comments.length > 0 ?
				<ul>
					{comments.map(e => {
						return (
							<CommentItem
								key={e.userId}
								text={e.text}
								imgColor={e.imgColor}
							/>
						)
					})}
				</ul> :
				<h1>No comments</h1>
			}
		</div>
	)
}

export default Comments
