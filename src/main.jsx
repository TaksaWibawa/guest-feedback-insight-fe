import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./configs/theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider
			resetCSS
			theme={theme}
		>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
