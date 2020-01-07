import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const store = createStore(
  persistReducer(persistConfig, reducers),
  {},
  composeWithDevTools(),
);

const persistor = persistStore(store);

export { store, persistor };
