import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import articleReducer from "./slices/article";
import messageReducer from "./slices/message";

const reducer = {
   auth: authReducer,
   message: messageReducer,
   article: articleReducer,
}

export const store = configureStore({
   reducer: reducer,
   devTools: true,
});
