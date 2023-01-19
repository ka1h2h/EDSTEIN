import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
