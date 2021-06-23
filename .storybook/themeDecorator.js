import {ThemeProvider} from 'styled-components'
import {theme} from '../src/App'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator