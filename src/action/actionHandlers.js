
import { actionTypes } from "./actionTypes";

export const authLoginAction = data => {
    return {
        type: actionTypes.authLogin,
        payload: {...data}
    }
}