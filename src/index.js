import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Payments from "./Pages/Payments";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{ path: "/", element: <Payments /> },
	{ path: "/home", element: <Home /> },
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
