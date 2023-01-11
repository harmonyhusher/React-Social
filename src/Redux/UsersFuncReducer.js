import { usersAPI } from "../api/api";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 10,
  currentPage: 1,
};

var SET_USERS = "SET-USERS";
var SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
var SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";

export default function usersReducer2(state = initialState, action) {
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

export const setUsers = (users) => {
    return {
      type: SET_USERS,
      users,
    };
  };
  export const setCurrentPage = (currentPage) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage,
    };
  };
  export const setTotalUsersCount = (totalUsersCount) => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    };
  };

export const getUserPagination = (currentPage, pageSize) => (dispatch) => {
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };