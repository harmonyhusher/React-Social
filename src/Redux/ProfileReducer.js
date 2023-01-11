import { profileAPI } from "../api/api.js";

let initialState = {
  profile: null,
  status: null,
  isFollowed: null,
};

const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_STATUS_DATA = "SET_STATUS_DATA"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// const SET_FOLLOWED = "SET_FOLLOWED"
// const SET_UNFOLLOWED = "SET_UNFOLLOWED"

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS_DATA:
      return {
        ...state,
        profile: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    // case SET_FOLLOWED:
    //   return {
    //     ...state,
    //     isFollowed: action.isFollowed,
    //   };
    //   case SET_UNFOLLOWED:
    //     return {
    //       ...state,
    //       isFollowed: action.isFollowed,
    //     };
    default:
      return state;
  }
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE_DATA,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS_DATA,
    status,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

// export const setFollowed = (userId) => {
//   return {
//     type: SET_FOLLOWED,
//     userId,
//   };
// };

// export const setUnfollowed = (userId) => {
//   return {
//     type: SET_UNFOLLOWED,
//     userId,
//   };
// };

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response));
  });
};

export const getStatusProfile = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response));
  });
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos))
  }
};


export default profileReducer;
