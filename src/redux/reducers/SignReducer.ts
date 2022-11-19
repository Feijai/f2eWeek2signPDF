import {
    SIGN_SAVE_ACTION, SIGN_CHOOSE_ACTION
} from '../constants'
import _ from "lodash";

const initialState: { signList: string[], signChoose: string } = {
    signList: [],
    signChoose: ''
}

const SignReducer = function (state = initialState, action: { type: string, payload: string }) {
    switch (action.type) {
        case SIGN_SAVE_ACTION: {
            const list = _.clone(state.signList)
            list.push(action.payload)
            return {
                ...state,
                signList: list
            }
        }

        case SIGN_CHOOSE_ACTION: {
            return {
                ...state,
                signChoose: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default SignReducer
