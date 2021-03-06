import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import configureStore from './store/configureStore'
import './styles/App.css'

const store = configureStore();

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<div className='app'>
                    <Component />
				</div>
			</Provider>
		</AppContainer>,
		document.getElementById('root'),
	)
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./containers/App', () => {
		render(App)
	})
}