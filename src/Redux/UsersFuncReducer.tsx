import { PhotosType } from './ProfileReducer';
import { usersAPI } from "../api/api";
import { RootState } from './reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AsyncThunk } from '@reduxjs/toolkit';

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
  filter: {
    term: ""
  },
};

export type FilterType = typeof initialState.filter

type InitialStateType = typeof initialState

const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_FILTER = "SET_FILTER"

export default function usersReducer2(state = initialState, action: UsersActionsTypes): InitialStateType {
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
    // case SET_FILTER: {
    //   return {...state, filter: action.term}}
    case SET_FILTER: {
      return {...state, filter: action.payload}
    }
    default:
      return state;
  }
}

type UsersActionsTypes = setTotalUsersCountActionType | setUsersActionType | setCurrentPageActionType | setFilterTermActionType

type setUsersActionType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number,
}

type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  totalUsersCount: number
}

type setFilterTermActionType = {
  type: typeof SET_FILTER,
  payload: {term: string}
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
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    };
  };
export const setFilterTerm = (term: string): setFilterTermActionType => {
    return {
      type: SET_FILTER,
      payload: {term},
    };
  };

export type getStateType = () => RootState
export type DispatchType = Dispatch<UsersActionsTypes>

export const getUserPagination = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, RootState, unknown, UsersActionsTypes> => {
  return async (dispatch: DispatchType, getState: getStateType) => {
  let response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};
}

export const getUserSearch = (currentPage: number, pageSize: number, term: string): ThunkAction<Promise<void>, RootState, unknown, UsersActionsTypes> => {
  return async (dispatch: DispatchType, getState: getStateType) => {
  let response = await usersAPI.getUsersSearch(currentPage, pageSize, term);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};
}

// export const getFilterTerm = (currentPage: number, pageSize: number, filter: FilterType): ThunkAction<Promise<void>, RootState, unknown, UsersActionsTypes> => {
//   return async (dispatch: DispatchType, getState: getStateType) => {
//   let response = await usersAPI.getUsers(currentPage, pageSize, filter.term);
//   dispatch(setFilterTerm(response.term));


