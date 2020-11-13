/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  floors: {
    marginTop: theme.spacing(2),
    background: '#ffffff',
  },
  floor: {
    marginTop: theme.spacing(1),
    background: '#f8f8f8',
  },
  numFloor: {
    textAlign: 'center',
    margin: 10,
    marginTop: 60,
  },
}))

export default useStyles
