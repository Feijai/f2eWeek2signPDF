import {
    MENU_ACTION
} from '../constants'
const initialState = {
    menuState: false,
}

const MenuReducer = function (state = initialState, action: { type: string }) {
    switch (action.type) {
        case MENU_ACTION: {
            return {
                ...state,
                menuState: !state.menuState
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}

export default MenuReducer
