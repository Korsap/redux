import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
	static propTypes = {
		user: PropTypes.shape({
			name: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired
		})
	}

	render() {
		const { user } = this.props
		return (
			<div>
				<p>Привет, {user.name} {user.lastName}!</p>
			</div>
		)
	}
}