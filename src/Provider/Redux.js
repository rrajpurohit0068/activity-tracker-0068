import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { appReducer } from "./Redux/reducers";

const store = configureStore({
  reducer: appReducer,
});

export const Redux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
