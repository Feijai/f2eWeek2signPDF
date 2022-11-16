import {
    PDF_UPLOAD_ACTION
} from '../constants'

const initialState = {
    pdf: null
}

const PdfReducer = function (state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case PDF_UPLOAD_ACTION: {
            return {
                ...state,
                pdf: action.payload
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
