import { SIGN_SAVE_ACTION,SIGN_CHOOSE_ACTION } from '../constants'

interface SaveSignAction {
    type: string
    payload: any
}

export const clickSaveSignAction = (payload: string) =>
    (dispatch: (arg: SaveSignAction) => (SaveSignAction)) => {
        dispatch({ type: SIGN_SAVE_ACTION, payload: payload })
    }


    
export const chooseSignAction = (payload: string) =>
(dispatch: (arg: SaveSignAction) => (SaveSignAction)) => {
    dispatch({ type: SIGN_CHOOSE_ACTION, payload: payload })
}

