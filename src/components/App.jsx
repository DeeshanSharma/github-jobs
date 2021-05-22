import React, { useState, useMemo, useEffect } from "react";
import { Container, CssBaseline, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { DarkTheme, LightTheme } from "./Theme";
import Header from "./Header";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
	themeChange: {
		transition: theme.transitions.create("all", {
			duration: theme.transitions.duration.shortest,
		}),
	},
}));

function App() {
	const classes = useStyles();
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });
	const [darkMode, setDarkMode] = useState(prefersDarkMode);

	useEffect(() => {
		setDarkMode(prefersDarkMode);
	}, [prefersDarkMode]);

	const theme = useMemo(() => createMuiTheme(darkMode ? DarkTheme : LightTheme), [darkMode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={classes.themeChange}>
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
				<Container>
					<Home />
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
