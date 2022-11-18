import { combineReducers } from 'redux'
import MenuReducer from './MenuReducer'
import PdfReducer from './PdfReducer'
import SignReducer from './SignReducer'

const RootReducer = combineReducers({
    menuReducer: MenuReducer,
    pdfReducer: PdfReducer,
    signReducer: SignReducer,
})

export default RootReducer
