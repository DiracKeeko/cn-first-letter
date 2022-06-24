import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  resolve(),
  commonjs(),
  babel({ babelHelpers: "runtime", exclude: ["node_modules/**"] }),
  isProduction && terser(),
];

const bundleOutputOptions = {
  input: "cnFirstLetter.js",
  output: {
    file: isProduction
      ? "dist/cn-first-letter.min.js"
      : "dist/cn-first-letter.js",
    format: "umd",
    exports: "default",
    name: "cnFirstLetter",
  },
  plugins,
};


export default bundleOutputOptions;
