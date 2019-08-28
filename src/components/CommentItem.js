import React from 'react'
import '../App.css'

function CommentItem(props) {
	return (
		<li>
			<div
				className='comment-image'
				style={{ backgroundColor: props.imgColor }}
			>
			</div>
			<p className='comment-text'>
				{props.text}
			</p>
		</li >
	)
}

export default CommentItem
