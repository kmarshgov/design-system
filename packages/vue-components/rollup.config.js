import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import vue from "rollup-plugin-vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
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
      resolve(),
      commonjs(),
      vue(),
      typescript({
        tsconfig: "./tsconfig.rollup.json",
      }),
      postcss(),
    ],
  },
  {
    input: "src/components/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.rollup.json",
        declaration: true,
        declarationOnly: true,
      }),
      dts(),
    ],
    external: [/\.css$/],
  },
];
