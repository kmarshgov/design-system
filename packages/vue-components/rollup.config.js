import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import vue from "rollup-plugin-vue";

// eslint-disable-next-line no-undef
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      vue({
        css: false,
        compileTemplate: true,
      }),
      resolve({
        extensions: ['.vue', '.js']
      }),
      commonjs(),
      postcss(),
    ],
  },
];
