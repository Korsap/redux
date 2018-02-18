import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class App extends Component {
	render() {
		const {name, lastName, age} = this.props.user

		return (
			<div>
				<p>Привет, {name} {lastName}. Я хочу сыграть с тобой в игру.</p>
				<p>Тебе уже {age} и время умирать!</p>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		user: state
	}
}

export default connect(mapStateToProps)(App)