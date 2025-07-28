import type { StorybookConfig } from "@storybook/vue3-vite";
import * as tokens from "@bcgov/design-tokens/cjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      builder: {
        viteConfigPath: "vite.config.ts",
      },
    },
  },
  staticDirs: ["../storybook-public"],

  // extra CSS for Storybook docs and UI, injected into <head>
  previewHead: (head) => `
    ${head}
    <style>
      .sbdocs .sbdocs-content a {
         color: ${tokens.typographyColorLink};
         text-decoration: underline;
      }
    </style>
 `,
};
export default config;
