import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/RootReducer'

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
)
