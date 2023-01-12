import { PhotosType } from './ProfileReducer';
import { usersAPI } from "../api/api";

type UserType = {
  id: number;
  name: string;
  photos: PhotosType,
  totalCount: number;
};

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalCount: 10,
  currentPage: 1,
};

type InitialStateType = typeof initialState

var SET_USERS = "SET-USERS";
var SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
var SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

export default function usersReducer2(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalCount: action.totalUsersCount };
    }
    default:
      return state;
  }
}

type setUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}

type setsetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  totalUsersCount: number
}


export const setUsers = (users: Array<UserType>): setUsersActionType => {
    return {
      type: SET_USERS,
      users,
    };
  };
  export const setCurrentPage = (currentPage: number): setCurrentPageActionType => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage,
    };
  };
  export const setTotalUsersCount = (totalUsersCount: number): setsetTotalUsersCountActionType => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    };
  };

export const getUserPagination = (currentPage: number, pageSize: number) => async (dispatch : any) => {
 let response = await usersAPI.getUsers(currentPage, pageSize);
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    };
  