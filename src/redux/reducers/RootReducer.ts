import { combineReducers } from 'redux'
import MenuReducer from './MenuReducer'


const RootReducer = combineReducers({
    menuReducer: MenuReducer
})

export default RootReducer
