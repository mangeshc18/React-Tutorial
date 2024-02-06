console.log("hello");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body"





//main section of the app

const App = () => {
    return(<>
        <Header />
        <Body />
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App /> )

