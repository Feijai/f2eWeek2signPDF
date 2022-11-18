import {
    SIGN_SAVE_ACTION
} from '../constants'
const initialState: { signList: string[] } = {
    signList: [],
}

const SignReducer = function (state = initialState, action: { type: string, payload: string }) {
    switch (action.type) {
        case SIGN_SAVE_ACTION: {
            console.log(action)
            state.signList.push(action.payload)
            return {
                ...state,
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
