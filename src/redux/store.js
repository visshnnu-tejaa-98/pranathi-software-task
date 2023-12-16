import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/employeeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
