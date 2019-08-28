import React from 'react'
import List from './components/List'
import AddItem from './components/AddItem'
import Comments from './components/Comments'
import { HashRouter as Router, Route } from 'react-router-dom'


function App() {

	return (
		<Router className="App">
			<Route path='/' exact component={List} />
			<Route path='/addItem' component={AddItem} />
			<Route path='/comments/:id' component={Comments} />
		</Router>
	)
}

export default App
