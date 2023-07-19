import { getCookie } from "@/lib/cookie";
import { createSlice } from "@reduxjs/toolkit";

// is in client side
const doc = typeof document !== "undefined";
// default values
let registerData = {};

if (doc) {
  registerData = getCookie("registerData") ? getCookie("registerData") : {};
}
const initialState = {
  registerData,
};

console.log(initialState);

export const registerSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    registerWithEmail: (state, action) => {
      state.registerData.email = action.payload.email;
    },
    verification: (state, action) => {
      state.registerData.verification = action.payload.verification;
    },
    registerInfo: (state, action) => {
      state.registerData.registerInfo = action.payload.registerInfo;
    },
    registerPhoneInfo: (state, action) => {
      state.registerData.phone = action.payload.phone;
    },
  },
});

export const {
  registerWithEmail,
  verification,
  registerInfo,
  registerPhoneInfo,
} = registerSlice.actions;
export default registerSlice.reducer;
