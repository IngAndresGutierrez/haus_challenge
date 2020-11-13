/* import external modules */
import { CssBaseline, ThemeProvider } from '@material-ui/core'

/* import internal modules */
import './styles.css'
import theme from '../Theme'
import MiniDrawer from '../Drawer'
import HorizontalScrollMenu from '../HorizontalScrollMenu'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MiniDrawer></MiniDrawer>
      <HorizontalScrollMenu />
    </ThemeProvider>
  )
}

export default App
