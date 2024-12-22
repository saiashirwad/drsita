const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			spacing: {
				"page-top": "var(--page-top)",
				"page-gutter": "var(--page-gutter)", 
				"banner-height": "var(--banner-height)",
				"header-height": "var(--header-height)",
				"footer-height": "var(--footer-height)",
			},
			maxWidth: {
				content: "var(--content-width)",
				"container-sm": "var(--container-sm)",
				"container-md": "var(--container-md)",
				"container-lg": "var(--container-lg)",
				"container-xl": "var(--container-xl)",
				"container-2xl": "var(--container-2xl)",
			},
			minHeight: {
				content: "var(--content-height)",
			},
			fontFamily: {
				display: ["Pier Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				base: "#232136",
				surface: "#2a273f",
				overlay: "#393552",
				muted: "#6e6a86",
				subtle: "#908caa",
				text: "#e0def4",
				love: "#eb6f92",
				gold: "#f6c177",
				rose: "#ebbcba",
				pine: "#3e8fb0",
				foam: "#9ccfd8",
				iris: "#c4a7e7",
				"highlight-low": "#2a283e",
				"highlight-med": "#44415a",
				"highlight-high": "#56526e",
			},
			borderColor: {
				DEFAULT: "hsl(var(--color-muted) / 0.2)",
			},
			ringColor: {
				DEFAULT: "hsl(var(--color-foam) / 0.2)",
			},
		},
	},
};
