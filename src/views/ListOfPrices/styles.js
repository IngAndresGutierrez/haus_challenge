/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  filtersAndFloors: {
    background: '#ffffff',
    padding: theme.spacing(1),
  },
}))

export default useStyles
