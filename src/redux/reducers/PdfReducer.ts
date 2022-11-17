import {
    PDF_UPLOAD_ACTION, PDF_EDITING_ACTION
} from '../constants'

const initialState = {
    pdf: null,
    editingPdf: null
}

const PdfReducer = function (state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case PDF_UPLOAD_ACTION: {
            return {
                ...state,
                pdf: action.payload
            }
        }
        case PDF_EDITING_ACTION: {
            return {
                ...state,
                editingPdf: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default PdfReducer
