import {
    PDF_UPLOAD_ACTION, PDF_EDITING_ACTION, PDF_DOWNLOAD_ACTION
} from '../constants'

const initialState = {
    pdf: null,
    editingPdf: null,
    downloadPdf: false,
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

        case PDF_DOWNLOAD_ACTION: {
            console.log('in reducer')
            return {
                ...state,
                downloadPdf: !state.downloadPdf
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
