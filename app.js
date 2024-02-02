console.log("hello");
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id: "parent", style: {backgroundColor: "blue"}}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "child"}, "hello react")));




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

