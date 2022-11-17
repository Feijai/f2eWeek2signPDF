import { Dispatch } from '@reduxjs/toolkit'
import { PDF_UPLOAD_ACTION, PDF_EDITING_ACTION } from '../constants'

interface PdfUpload {
    type: string
    payload: any
}

export const pdfUploadAction = (payload: any) =>
    async (dispatch: (arg: PdfUpload) => (PdfUpload)) => {
        const arrayBuffer = await payload.arrayBuffer()
        dispatch({ type: PDF_UPLOAD_ACTION, payload: arrayBuffer })
    }


export const pdfChooseAction = (payload: any) =>
    async (dispatch: (arg: PdfUpload) => (PdfUpload)) => {
        dispatch({ type: PDF_EDITING_ACTION, payload: payload })
    }
