import React from "react";
import "./App.scss";
import AppPresenter from "./App.presenter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";

const AppContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"Loading"} persistor={persistor}>
        <BrowserRouter>
          <AppPresenter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
