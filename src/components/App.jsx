import React, { useState } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./Header";
import Home from "./Home";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Container>
				<Home />
			</Container>
		</ThemeProvider>
	);
}

export default App;
