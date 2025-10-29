import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


function MyApp(){
    return (<h1>
            Hello , This is a Method.</h1>
            );
};

            const elementCheck = (
            <a href="https://www.google.com" target="_blank">Go to Google Website.</a>
            )

            const reactElemnet = React.createElement(
            'a',
            {href: "https://www.gooogle.com", target: "_blank" },
            "Click me To Go to Gooogle Website | Arbaz Khan"
            )

            ReactDOM.createRoot(document.getElementById("root")).render(
    // <>
    //     <App />
    // </>
    // elementCheck
            // reactElemnet
            <MyApp />
            );