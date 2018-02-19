import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

class App extends Component {
    render() {
        const {user} = this.props
        return(
            <div>
                <p>Привет, { user.name } { user.lastName }. Я хочу сыграть с тобой в игру!</p>
                <p>Тебе уже { user.age } и время умирать</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)