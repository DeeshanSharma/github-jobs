function AdjustTheme(theme) {
	const favicon = document.getElementById("favicon");
	const manifest = document.getElementById("manifest");
	if (theme) {
		favicon.href = "/favicon-dark.ico";
		manifest.href = "/manifest-dark.json";
	} else {
		favicon.href = "/favicon.ico";
		manifest.href = "/manifest.json";
	}
}

export default AdjustTheme;
