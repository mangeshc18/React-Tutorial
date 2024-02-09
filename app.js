console.log("hello");
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import{ createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./src/Components/Error";





//main section of the app

const App = () => {
    return(<>
        <Header />
        <Outlet />
        </>
    )
}


const appRouter = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/about",
            element: <About />
        }
    ],
    errorElement: <Error />
    
},



]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/> )

