const DarkTheme = {
	palette: {
		type: "dark",
		primary: {
			contrastText: "rgba(0, 0, 0, 0.87)",
			dark: "rgb(100, 141, 174)",
			light: "rgb(166, 212, 250)",
			main: "#90caf9",
		},
		secondary: {
			contrastText: "rgba(0, 0, 0, 0.87)",
			dark: "rgb(170, 100, 123)",
			light: "rgb(246, 165, 192)",
			main: "#f48fb1",
		},
		background: {
			default: "#121212",
			paper: "#333",
		},
	},
};
const LightTheme = {
	palette: {
		type: "light",
		primary: {
			contrastText: "#fff",
			dark: "rgb(17, 82, 147)",
			light: "rgb(71, 145, 219)",
			main: "#1976d2",
		},
		secondary: {
			contrastText: "#fff",
			dark: "rgb(154, 0, 54)",
			light: "rgb(227, 51, 113)",
			main: "rgb(220, 0, 78)",
		},
		background: {
			paper: "#fff",
			default: "#f5f5f5",
		},
	},
};

export { DarkTheme, LightTheme };
