import { getCookie } from "@/lib/cookie";
import { createSlice } from "@reduxjs/toolkit";

// is in client side ?
const doc = typeof document !== "undefined";
// default values
let registerData = {};
let hotelData = {};

if (doc) {
  registerData = getCookie("registerData") ? getCookie("registerData") : {};
  hotelData = getCookie("hotelData") ? getCookie("hotelData") : {};
}
const initialState = {
  registerData,
  hotelData,
};

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
    createPassword: (state, action) => {
      state.registerData.createPassword = action.payload.createPassword;
    },
    hotelCategories: (state, action) => {
      state.hotelData.hotelCategories = action.payload.hotelCategories;
    },
    noOfHotels: (state, action) => {
      state.hotelData.noOfHotels = action.payload.noOfHotels;
    },
    hotelAddress: (state, action) => {
      state.hotelData.hotelAddress = action.payload.hotelAddress;
    },
    hotelInformation: (state, action) => {
      state.hotelData.hotelInformation = action.payload.hotelInformation;
    },
    registerPhoneInfo: (state, action) => {
      state.registerData.phone = action.payload.phone;
    },
    registerLanguages: (state, action) => {
      state.registerData.languages = action.payload.languages;
    },
  },
});

export const {
  registerWithEmail,
  verification,
  registerInfo,
  createPassword,
  hotelCategories,
  noOfHotels,
  hotelAddress,
  hotelInformation,
  registerPhoneInfo,
  registerLanguages,
} = registerSlice.actions;
export default registerSlice.reducer;
