import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    name: "",
    avatar: "",
  },

  registerLoading: false,
  registerSuccess: false,
  registerError: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;

      state.user = {
        email: "",
        name: "",
      };
    },

    registerStart: (state) => {

        state.registerLoading = true;
        state.registerSuccess = false;
        state.registerError = "";
    },

    registerSuccess: (state) => {
        state.registerLoading = false;
        state.registerSuccess = true;
    },

    registerFail: (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload;
    },

    updateProfileSuccess: (state, action) => {
          // action.payload sẽ chứa thông tin mới (name, avatar) từ backend trả về
      if (action.payload.name) state.user.name = action.payload.name;
      if (action.payload.avatar) state.user.avatar = action.payload.avatar;
    },

  },
});

export const {
  loginSuccess,
  logout,
  registerStart,
  registerSuccess,
  registerFail,
  updateProfileSuccess
} = authSlice.actions;

export default authSlice.reducer;