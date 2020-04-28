import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: `Zilla Slab`,
      styles: [`400`, `400i`, `700`, `700i`],
    },
    {
      name: `Lato`,
      styles: [`300`, `300i`, `400`, `400i`, `700`, `700i`],
    },
  ],
  headerFontFamily: ["Zilla Slab", "Georgia", "serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
})

export default typography
