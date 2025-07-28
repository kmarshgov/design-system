# @bcgov/design-system-vue-components

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

This package contains a library of Vue 3 components built using Vue 3 Composition API to implement the BC Design System.

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

See repository: https://github.com/bcgov/design-system

To use, install this package and import the components into your Vue 3 application.

## Install

`npm install @bcgov/design-system-vue-components`

### BC Sans font dependency

This package installs [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) as a peer dependency. You must import the font-face declarations from @bcgov/bc-sans and ensure the font is reachable for your end user. The Vue components require that the `BC Sans` font-face is available to display correctly. The components do not ship their own copies of the font to minimize your bundle size.

**Important!** If you are on a BC Government-provisioned laptop, you already have the BC Sans font installed on your machine. This package uses `BC Sans` (with a space) for its font styles. If you are using this component library but not supplying the font, it's possible that your machine will still display the font correctly for you, **but not your end user**. Make sure to check this by disabling the font on your machine or by testing with another machine.

## Use

```vue
<template>
  <div>
    <Header
      title="My application"
      :skip-links="skipLinks"
    >
      <Button variant="primary" size="small" @click="login">Log in</Button>
    </Header>
    <main id="main-content">
      <h1>Vue Components</h1>
      <Button @click="handleClick">Primary Button</Button>
      <Button variant="secondary" @click="handleClick">Secondary Button</Button>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// If you're already importing the BC Sans font-face somewhere else in your
// project, there is no need to import it again. Just make sure the `BC Sans`
// declaration and font files are available.
import "@bcgov/bc-sans/css/BC_Sans.css";

// Import the individual components you need
import { Button, Header } from "@bcgov/design-system-vue-components";

const skipLinks = ref([
  { href: "#main-content", text: "Skip to main content" }
])

const login = () => {
  console.log('Login clicked')
}

const handleClick = () => {
  console.log('Button clicked')
}
</script>
```

## Component list

| Component | Status      | Notes                                                    |
| --------- | ----------- | -------------------------------------------------------- |
| Button    | ✅ Complete | Fully converted with all variants and functionality     |
| Header    | ✅ Complete | Converted with logo and title support                   |
| SvgBcLogo | ✅ Complete | BC Government logo component                             |
| Footer    | 🚧 Planned  | To be converted from React version                       |
| Select    | 🚧 Planned  | To be converted from React version                       |
| Tag       | 🚧 Planned  | To be converted from React version                       |
| TagGroup  | 🚧 Planned  | To be converted from React version                       |
| TagList   | 🚧 Planned  | To be converted from React version                       |
| Tooltip   | 🚧 Planned  | To be converted from React version                       |

## Supported Vue versions

This package has a peer dependency on `vue` at version: `"^3.3.0"`

The components are built using Vue 3's Composition API with `<script setup>` syntax for optimal performance and developer experience.

## Versions

This project follows semantic versioning. See [CHANGELOG.md](./CHANGELOG.md) for version details.

## Development

### Components

Components live in `./src/components` and are targeted by the build process with an export in `./src/index.ts`.

### Storybook

Storybook stories live in `./src/stories`.

Run `npm run storybook-dev` to access the Storybook instance for the component library.

### Vite kitchen sink application

Vite uses the components code directly from `./src/components` in the main App.vue file.

Run `npm run vite-dev` to access the Vite Vue 3 demo app.

### Publish new versions

To generate an updated copy of the package for distribution, run the included Rollup script: `npm run rollup`.

This will place artifacts in the `dist` folder, which is targeted for publishing in `package.json` with the [`files` field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files).

Update the package version in `package.json` and run `npm publish` to push a new version.
