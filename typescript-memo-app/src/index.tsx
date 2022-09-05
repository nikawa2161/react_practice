// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App"
import "./index.css";
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import memosReducer from "./reducers/Memos";

const store = configureStore({
  // actionとstateを管理
  reducer: {
    memos: memosReducer,
  },
});

const container = document.getElementById("root");
const rootElement = createRoot(container!);
rootElement.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
);