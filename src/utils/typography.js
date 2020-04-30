import Typography from "typography"

const typography = new Typography({
  headerColor: "#071125",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: `Zilla Slab`,
      styles: [`400`, `400i`, `700`, `700i`],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Fira Mono",
      styles: ["400", "500", "700"],
    },
  ],
  headerFontFamily: ["Zilla Slab", "Georgia", "serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  bodyWeight: 400,
})

export default typography
