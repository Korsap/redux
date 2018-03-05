import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import dispatcher from 'redux-thunk'

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(logger),
		applyMiddleware(dispatcher))

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}
	return store;
}