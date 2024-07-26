import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

// Create a root to render our app, if not possilbe, create a div element. This ensures we render something to support with TypeScript.
ReactDOM.createRoot(
	document.getElementById("root") ?? document.createElement("div"),
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
