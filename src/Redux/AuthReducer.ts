import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

export type InitialStateType = {
  id: number | null,
  login: null,
  email: string | null,
  isAuth: boolean,
}

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
        ...action.data,      };
    default:
      return state;
  }
};

type setAuthUserDataActionPayloadType  = {
   id: number | null, 
   login: string | null, 
   email: string | null, 
   isAuth: boolean | false, 
}

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  data: setAuthUserDataActionPayloadType,
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
});

export const getAuthUserData = () => (dispatch: any) => {
   authAPI.me() //это промес
   .then((response) => {
     if (response.data.resultCode === 0) {
       let { id, login, email } = response.data.data;
       dispatch(setAuthUserData(id, login, email, true))
     }
   });
}

export const login = (email: string, password: number) => async (dispatch: any) => {
  let response = await authAPI.login(email, password) 
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    
  // } else {
  //   if (response.data.resultCode === 10) {
  //     dispatch(getCaptchaUrl())
  //   }
  }
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  };


export default authReducer;
