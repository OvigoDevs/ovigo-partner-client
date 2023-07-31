import { getCookie } from "@/lib/cookie";
import { createSlice } from "@reduxjs/toolkit";

// is in client side ?
const doc = typeof document !== "undefined";
// default values
let registerData = {};
let hotelData = {};
let roomData = {};
let hotels = [];

if (doc) {
  registerData = localStorage.getItem("registerData")
    ? JSON.parse(localStorage.getItem("registerData"))
    : {};
  hotelData = localStorage.getItem("hotelData")
    ? JSON.parse(localStorage.getItem("hotelData"))
    : {};
  roomData = localStorage.getItem("roomData")
    ? JSON.parse(localStorage.getItem("roomData"))
    : {};
  hotels = localStorage.getItem("hotels")
    ? JSON.parse(localStorage.getItem("hotels"))
    : [];
}

const initialState = {
  registerData,
  hotelData,
  roomData,
  hotels,
};

export const MaxID_generator = (items) => {
  let maxId = 0;
  if(!items.length){
    return maxId + 1
  } 
  console.log(">>>>", items)
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].id > maxId)
    if (items[i].id > maxId) {
      maxId = items[i].id;
    }
  }
console.log({d: maxId+1})
  return maxId + 1;
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
      state.hotels = [
        ...state.hotels,
        {
          id: action.payload.id,
          hotelData: state.hotelData,
          roomData: state.roomData,
        },
      ];
      state.hotelData = {};
      state.roomData = {};
    },
    houseRules: (state, action) => {
      state.hotelData.houseRules = action.payload.houseRules;
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
    addPhotos: (state, action) => {
      state.roomData.addPhotos = action.payload.addPhotos;
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
  confirmHotel,
  addPhotos,
  houseRules,
  addNewHotel,
} = registerSlice.actions;
export default registerSlice.reducer;
