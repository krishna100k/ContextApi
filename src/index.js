import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { CartContext } from "./CartContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartContext>
    <StrictMode>
      <App />
    </StrictMode>
  </CartContext>
);
