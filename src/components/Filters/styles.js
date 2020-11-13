/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  chip: {
    minWidth: 100,
    margin: theme.spacing(0.3),
  },
  filters: {
    marginTop: theme.spacing(2),
    background: '#ffffff',
  },
}))

export default useStyles
