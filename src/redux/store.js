import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//features
import userReducer from "./features/user_slice";
import registerReducer from "./features/register_slice";
// services
import { RegisterAPI } from "./services/register";
import { HotelListingAPI } from "./services/hotel-listing";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    registerData: registerReducer,
    [RegisterAPI.reducerPath]: RegisterAPI.reducer,
    [HotelListingAPI.reducerPath]: HotelListingAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(RegisterAPI.middleware)
      .concat(HotelListingAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
