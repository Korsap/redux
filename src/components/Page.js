import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
	static propTypes = {
		page: PropTypes.shape({
			year: PropTypes.number.isRequired,
			photos: PropTypes.array.isRequired
			})
	}

	render() {
		const { page } = this.props
		return (
			<div>
				<p>У тебя {page.photos.length} фотографий за {page.year} год</p>
			</div>
		)
	}
}