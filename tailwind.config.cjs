/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				chaoticbrain: {
					"primary":          "#184e9c",
					"primary-content":  "#F2EEE4",
					"secondary":        "#E8A000",
					"secondary-content":"#1b2137",
					"accent":           "#4B7BDB",
					"accent-content":   "#F2EEE4",
					"neutral":          "#2A3755",
					"neutral-content":  "#F2EEE4",
					"base-100":         "#F5F2EC",
					"base-200":         "#EBE7DF",
					"base-300":         "#D9D4CA",
					"base-content":     "#1A2035FF",
					"info":             "#4B7BDB",
					"success":          "#2E7D52",
					"warning":          "#E8A000",
					"error":            "#C0392B",
					"--rounded-box":    "0.25rem",
					"--rounded-btn":    "0.25rem",
					"--rounded-badge":  "0.25rem",
					"--tab-border":     "2px",
				},
			},
		],
		logs: false,
	},
};