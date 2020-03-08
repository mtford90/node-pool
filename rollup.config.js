import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import progress from "rollup-plugin-progress"

let pluginOptions = [
  resolve({
    browser: true,
    preferBuiltins: false
  }),
  commonjs(),
  progress(),
  babel()
];

export default {
  input: "./index.js",
  output: {
    name: "main", // for external calls (need exports)
    file: "dist/index.js",
    format: "esm"
  },
  plugins: pluginOptions
}
