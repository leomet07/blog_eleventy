const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj) => {
		// TODO: USE PRETTIER DATE FORMAT
		return dateObj.toLocaleDateString("en-us", { timeZone: "utc" }) // Use utc tz so that no tz conversion occurs
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// Returns YYYY-MM-DD
		return dateObj.toLocaleDateString("en-CA", {timezone : "utc"}) // Use utc tz so that no tz conversion occurs
	});

	return {
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
			output: "_site",
		},
	};
};
