
// [themeDecorator] to import styled-components theme styles in SB
import { addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"
addDecorator(themeDecorator);

import {withA11y} from '@storybook/addon-a11y'
addDecorator(withA11y);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}
