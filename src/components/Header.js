import React from 'react'
import '../App.css'

function Header(props) {

	return (
		<div>
			{props.showBack && <h1>{props.bigText}</h1>}
			<div>
				{props.bigText && <h1>{props.bigText}</h1>}
				{props.midText && <p>{props.midText}</p>}
				{props.smallText && <p className='small-text'>{props.smallText}</p>}
			</div>
		</div>
	)
}

export default Header

