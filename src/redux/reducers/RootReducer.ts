import { combineReducers } from 'redux'
import MenuReducer from './MenuReducer'
import PdfReducer from './PdfReducer'

const RootReducer = combineReducers({
    menuReducer: MenuReducer,
    pdfReducer: PdfReducer
})

export default RootReducer
