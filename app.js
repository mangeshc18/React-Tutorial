console.log("hello");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import{ createBrowserRouter, RouterProvider} from "react-router-dom";






//main section of the app

const App = () => {
    return(<>
        <Header />
        <Body />
        </>
    )
}


const appRouter = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <Error />

},

{
    path: "/about",
    element: <About />
},

{
    path: "/contact",
    element: <Contact />
}

]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/> )

