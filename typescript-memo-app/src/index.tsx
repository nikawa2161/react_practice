import { render } from "react-dom";
import { App } from "./components/App"
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;
render(<App/>, rootElement);