// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App"
import "./index.css";

const container = document.getElementById("root");
const rootElement = createRoot(container!);
rootElement.render(<App />);