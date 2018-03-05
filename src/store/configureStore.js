import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const conposeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose

	const enchancer = conposeEnchancer(applyMiddleware(thunk, logger))
	const store = createStore(rootReducer, initialState, enchancer)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}
	return store;
}