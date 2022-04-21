import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import "./styles/index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



import reducers from "./reducers";
import { ContextProvider } from "./context/Context";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // Provider connects the store (global states) to the entire App
  <Provider store={store}>
    <ContextProvider>
      <ChakraProvider>
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </ContextProvider>
  </Provider>,
  document.getElementById("root")
);
