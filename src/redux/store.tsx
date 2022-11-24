import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../redux/weatherSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    weatherData: weatherSlice.reducer,
    modalStatus: modalSlice.reducer,
    
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
