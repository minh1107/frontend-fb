import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/user/userSlice";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const commonConfig = {
  key: "facebook/user",
  storage,
};

const useConfig = {
  ...commonConfig,
  whitelist: ["currentUser", "accessToken", "isLogged"],
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      userReducer: persistReducer(useConfig, userSlice),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

const store = configureStore({
  reducer: {
    userReducer: persistReducer(useConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// export const persistor = persistStore(makeStore)
export const persistor = persistStore(store);
