import { getCookie } from "@/lib/cookie";
import { createSlice } from "@reduxjs/toolkit";

// is in client side ?
const doc = typeof document !== "undefined";
// default values
let registerData = {};
let hotelData = {};
let roomData = {};

if (doc) {
  registerData = getCookie("registerData") ? getCookie("registerData") : {};
  hotelData = getCookie("hotelData") ? getCookie("hotelData") : {};
  roomData = getCookie("roomData") ? getCookie("roomData") : {};
}
const initialState = {
  registerData,
  hotelData,
  roomData,
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
    registerPhoneInfo: (state, action) => {
      state.registerData.phone = action.payload.phone;
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
    popularFacilities: (state, action) => {
      state.hotelData.popularFacilities = action.payload.popularFacilities;
    },
    breakfastDetails: (state, action) => {
      state.hotelData.breakfastDetails = action.payload.breakfastDetails;
    },
    registerLanguages: (state, action) => {
      state.hotelData.registerLanguages = action.payload.registerLanguages;
    },
    parkingDetails: (state, action) => {
      state.hotelData.parkingDetails = action.payload.parkingDetails;
    },
    confirmHotel: (state, action) => {
      state.hotelData.confirmHotel = action.payload.confirmHotel;
    },
    roomFeatures: (state, action) => {
      state.roomData.roomFeatures = action.payload.roomFeatures;
    },
    roomDetails: (state, action) => {
      state.roomData.roomDetails = action.payload.roomDetails;
    },
    roomName: (state, action) => {
      state.roomData.roomName = action.payload.roomName;
    },
    roomPrice: (state, action) => {
      state.roomData.roomPrice = action.payload.roomPrice;
    },
    guestPayment: (state, action) => {
      state.roomData.guestPayment = action.payload.guestPayment;
    },
    invoiceInfo: (state, action) => {
      state.roomData.invoiceInfo = action.payload.invoiceInfo;
    },
    
    bathroomDetails: (state, action) => {
      state.roomData.bathroomDetails = action.payload.bathroomDetails;
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
  popularFacilities,
  breakfastDetails,
  roomFeatures,
  parkingDetails,
  roomDetails,
  bathroomDetails,
  roomName,
  roomPrice,
  guestPayment,
  invoiceInfo,
  confirmHotel
} = registerSlice.actions;
export default registerSlice.reducer;
