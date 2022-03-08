import { actionTypes } from "../action/actionTypes";
/*
{
    uid: 'userId',
    name: 'userName'
}
*/

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    case actionTypes.authLogout:
      return {};
    default:
      return state;
  }
};
