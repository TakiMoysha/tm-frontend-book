/*  */
import "@/styles";

/*  */
import { themes } from "storybook/internal/theming";

// export const parameters = {
//   docs: {
//     theme: themes.dark,
//   },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

/* Theme Switcher */
import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "data-bs-theme",
  }),
];

/*  */
import type { Preview } from "@storybook/vue3-vite";

// import { initialize, mswLoader } from "msw-storybook-addon";

// initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" }, // autodiscrover - onUpdate, onToggle, onChangeState
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // loaders: [mswLoader],
};

export default preview;
