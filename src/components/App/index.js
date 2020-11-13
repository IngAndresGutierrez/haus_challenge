/* import external modules */
import { CssBaseline, ThemeProvider } from '@material-ui/core'

/* import internal modules */
import './styles.css'
import theme from '../Theme'
import MiniDrawer from '../Drawer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
    </ThemeProvider>
  )
}

export default App
