import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
});

export const getAuthUserData = () => (dispatch) => {
   authAPI.me() //это промес
   .then((response) => {
     if (response.data.resultCode === 0) {
       let { id, login, email } = response.data.data;
       dispatch(setAuthUserData(id, login, email, true))
     }
   });
}

export const login = (email, password) => (dispatch) => {
  authAPI.login(email, password) 
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  });
}

export const logout = () => (dispatch) => {
  authAPI.logout()
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData(null, null, null, false))
    }
  });
}

export default authReducer;
