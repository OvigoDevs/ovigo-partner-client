import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user_slice";
import registerReducer from "./features/register_slice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { RegisterAPI } from "./services/register";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    registerData: registerReducer,
    [RegisterAPI.reducerPath]: RegisterAPI.reducer,
  },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RegisterAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
