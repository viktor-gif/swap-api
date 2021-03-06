import { profileAPI } from "../api/Api";

const SET_PROFILE = "SET_PROFILE";

let initialState = {
  profileData: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profileData: action.profile,
      };
    default:
      return state;
  }
};
//action-creaters
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

//Tunk-creators

export const getProfile = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then((response) => {
      dispatch(setProfile(response.data));
    });
  };
};

export default profileReducer;
