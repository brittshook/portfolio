/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      "s-primary": "#fff",
      "s-secondary": "#ededed",
      "s-border": "#eee",
      "s-mahalia": "#d8d339",
      "s-medicaid": "#5c89fa",
      "s-strava": "#e96127",
      "t-primary": "#101010",
      "t-secondary-light": "#949494",
      "t-secondary-dark": "#525252",
      "t-link": "#0099ff",
      "t-link-hover": "0088ff",
      error: "#ff4942",
    },
    fontFamily: {
      sans: [
        "Instrument Sans",
        "ui-sans-serif",
        "Arial",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "IBM Plex Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    fontSize: {
      xs: ["0.875rem", "1rem"],
      sm: ["0.9375rem", "1.375rem"],
      "anchor-base": ["1rem", "1.375rem"],
      base: ["1rem", "1.375rem"],
      lg: ["1.125rem", "1.5rem"],
      xl: ["1.25rem", "1.75rem"],
      "2-xl": ["1.375rem", "1.875rem"],
      "3-xl": ["1.5rem", "2rem"],
    },
    extend: {
      screens: {
        sm: "450px",
        md: "750px",
        810: "810px",
        lg: "1000px",
      },
      backgroundImage: {
        check: 'url("/icons/check_circle.svg")',
        close: 'url("/icons/close_circle.svg")',
        clock: 'url("/icons/clock_circle.svg")',
      },
      blur: { sm: "1px" },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        md: "6px",
        7: "7px",
        lg: "9px",
        xl: "20px",
        full: "100%",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      boxShadow: {
        DEFAULT:
          "#00000021 0.4px 0.4px 0.56px -0.63px, #00000020 1.21px 1.21px 1.71px -1.25px, #00000020 3.19px 3.19px 4.51px -1.88px, #00000020 10px 10px 14.14px -2.5px",
      },
      fontWeight: {
        bold: "600",
      },
      gap: {
        2.5: "0.625rem",
        18: "4.5rem",
      },
      gridTemplateRows: { "3-200": "repeat(3, 200px)" },
      height: {
        8.5: "2.375rem",
        10.5: "2.625rem",
        81.5: "20.375rem",
        82.5: "20.625rem",
        85: "21.25rem",
        88.5: "22.125rem",
        99.5: "24.875rem",
        107.5: "26.875rem",
        115: "28.75rem",
        135.5: "33.875rem",
      },
      margin: {
        4.5: "1.125rem",
      },
      maxWidth: {
        "2.5xl": "45rem",
        81: "20.25rem",
      },
      minHeight: {
        110.5: "27.625rem",
      },
      minWidth: {
        33.5: "8.375rem",
      },
      outlineWidth: {
        1.5: "1.5px",
      },
      padding: {
        0.25: "0.1875rem",
        1.25: "0.3125rem",
        2.25: "0.5625rem",
        2.88: "0.71875rem",
        3.25: "0.8125rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        18: "4.5rem",
      },
      translate: {
        4.5: "1.125rem",
      },
      width: {
        8.5: "2.375rem",
        10.5: "2.625rem",
        72.5: "18.125rem",
        74: "18.5rem",
        92: "23rem",
        136: "34rem",
      },
    },
  },
  plugins: [],
};
