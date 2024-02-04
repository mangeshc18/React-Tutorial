console.log("hello");
import React from "react";
import ReactDOM from "react-dom/client";

//this is the core react method to create element 
//this element is an object at the end which converts to html so browser can understand

/*
const parent = React.createElement("div", {id: "parent", style: {backgroundColor: "blue"}}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "child"}, "hello react")));
const root = ReactDOM.createRoot(document.getElementById("root"));

*/

///////////////////////////////////////////////////////////////////

//lets lets create elements using jsx and render it on our ui

//jsx is html like syntax
//jsx is not exactly html so do call it html it is html alike syntax.
//jsx gets help of parcel package, parcel gets help of another package called babel which transplies the jsx code into createElement means to convert to object which is understable for react then react converts this code understandable for browser then it appears on the ui = so much enginnerings going on here.

/*
const main = <div className="parent">
    <div className="child">
        <h1 className="child1">hello React using Jsx</h1>
    </div>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(main);
*/


//imp

//what is component?
//component is nothing but the js function which returns jsx 
//there are two types of components.
//one is functional components which used by 99% devlopers.
//another one is classBased component which is need to understand but we are not going to work with this component we will go with functional component which is revolutinary.

//what is functional component?
//component is nothing but the js function which returns jsx.

//navigation bar component.

const Logo = () => <h2>logo</h2>


const Navigation = (props) => {
console.log(props);
return (<nav className="navbar">
    <Logo />
    <ul>
        <li>Home</li>
        <li>AboutUs</li>
        <li>Contact</li>
        <li>{props.about}</li>
    </ul>
</nav>)
};


const HeroSection = (prop) => {

    return (<main className="main">
        <h1>{prop.heading}</h1>
        <div className="hero-container">
        <div className="hero">
            <h2>mangesh choudhari</h2>
            <p>hello my name is mangesh choudhari i live in ahmednagar maharashtra</p>
            
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png" />
        </div>
    </main>)
    };


let Footer =  <Navigation />



// console.log(navigation());



const App = () => {
return <><Navigation about= {"Services"}/> <HeroSection heading = "main section"/> {Footer } 

{Footer}


</>}



// console.log(App());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
