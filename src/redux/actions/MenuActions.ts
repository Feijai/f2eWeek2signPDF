import { MENU_ACTION } from "../constants";

interface ClickMenuAction {
    type: string;
}

interface ChangeMenuAction {
    type: string
    payload: string
}

export const clickMenuButtonAction = () =>
    (dispatch: (arg: ClickMenuAction) => (ClickMenuAction)) => {
        dispatch({ type: MENU_ACTION })
    }


