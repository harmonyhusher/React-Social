import { profileAPI } from "../api/api.js";

let initialState = {
  profile: null as ProfileType | null,
  status: "",
};

type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
lookingForAJobDescription: string,
fullName:  string,
contacts:  object,
github:  string,
vk:  string,
facebook:  string,
instagram:  string,
twitter:  string,
website:  string,
youtube:  string,
mainLink:  string,
}

export type PhotosType = {
  small: string | null,
  large: string | null,
}

export type InitialStateType = typeof initialState


const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_STATUS_DATA = "SET_STATUS_DATA"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// const SET_FOLLOWED = "SET_FOLLOWED"
// const SET_UNFOLLOWED = "SET_UNFOLLOWED"

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    default:
      return state;
  }
};

type setProfileActionType = {
  type: typeof SET_PROFILE_DATA,
  profile: ProfileType
}

export const setProfile = (profile: ProfileType): setProfileActionType => {
  return {
    type: SET_PROFILE_DATA,
    profile,
  };
};

type setStatusActionType = {
  type: typeof SET_STATUS_DATA,
  status: string,
}

export const setStatus = (status: string): setStatusActionType => {
  return {
    type: SET_STATUS_DATA,
    status,
  };
};

type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId)
    dispatch(setProfile(response));
  };

export const getStatusProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response));
  
  };

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
};


export default profileReducer;
