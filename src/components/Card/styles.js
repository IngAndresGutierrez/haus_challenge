/* import external modules */
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 125,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  pos: {
    marginBottom: 12,
  },
  type: {
    background: '#f2f2f2',
    borderRadius: 25,
  },
})

export default useStyles
