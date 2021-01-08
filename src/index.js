import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "core-js/stable";
import "regenerator-runtime/runtime";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="HikeClub" />, mountNode);
