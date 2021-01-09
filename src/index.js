import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="HikeClub" />, mountNode);
