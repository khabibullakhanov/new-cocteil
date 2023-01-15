import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reLoading } from "./Loading.js";
import { reSearch } from "./Search.js";
import { reAddProductToCart } from "./CrudProduct.js";
import { reLogin } from "./Login.js";

const reducer = combineReducers({
  loading: reLoading,
  search: reSearch,
  addProduct: reAddProductToCart,
  login:reLogin,

});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
