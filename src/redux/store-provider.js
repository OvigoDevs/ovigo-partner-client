"use client";

const { Provider } = require("react-redux");
import { ApiProvider } from "@reduxjs/toolkit/query/react";
const { default: store } = require("./store");

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>{children}</ApiProvider>
    </Provider>
  );
};

export default StoreProvider;
