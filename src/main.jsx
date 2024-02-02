
import App from "./App";
import './index.css';
import { createRoot } from "react-dom/client";
import {StrictMode} from "react";
import React from "react";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <App />
  </StrictMode>
);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
