import {ThemeProvider} from 'styled-components'

const theme = {
  basicColor: "#707070",
  firstColor: "#ff6458",
  secondColor: "#16a7cd"
};

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator