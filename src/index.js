import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";
import { store } from "./redux/store/store";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
