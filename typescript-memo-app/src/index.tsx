// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App"
import "./index.css";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import memosReducer from "./reducers/Memos";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  // actionとstateを管理
  reducer: {
    memos: memosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

const container = document.getElementById("root");
const rootElement = createRoot(container!);
rootElement.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
);