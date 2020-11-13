/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
    marginTop: -12,
    minWidth: 180,
  },
  container: {
    background: '#ffffff',
  },
  infoTitle: {
    padding: theme.spacing(0.5),
    color: '#283f39',
    fontWeight: 'bold',
  },
}))

export default useStyles
