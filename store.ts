import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./src/Features/Dictionary/dictionarySlice"; // Import

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer, // Add reducer
  },
});

// ... types remain the same
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
