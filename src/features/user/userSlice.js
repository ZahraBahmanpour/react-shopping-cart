import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "../../services/baseService";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "../../services/api";

const initialState = {
  userInfo: {},
  loading: false,
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(LOGIN_URL, user);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(REFRESH_TOKEN_URL);
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("ACCESS_TOKEN", action.payload.accessToken);
      localStorage.setItem("REFRESH_TOKEN", action.payload.refreshToken);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.error = action.payload;
    });

    //refresh_token
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("ACCESS_TOKEN", action.payload.accessToken);
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.loading = false;
      state.userInfo = {};
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
