import { ResultCodesEnum } from "./../api/api";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

export type InitialStateType = {
  id: number | null;
  login: null;
  email: string | null;
  isAuth: boolean;
};

let initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

type setAuthUserDataActionPayloadType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | false;
};

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  data: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let meData = await authAPI.me(); //это промес
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password);
    if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
    }
  };

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
