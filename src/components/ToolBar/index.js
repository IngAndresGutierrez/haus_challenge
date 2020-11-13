/* import external modules */
import { useState } from 'react'
import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const ToolBarComponent = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    tower: '',
    name: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const renderTowerOptions = [1, 2, 3].map((tower) => {
    return (
      <option key={tower} value={tower}>
        Torre {tower}
      </option>
    )
  })

  return (
    <Grid container className={classes.container}>
      <Grid item xs>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="tower-native-simple">
            Selecciona Torre
          </InputLabel>
          <Select
            native
            value={state.tower}
            onChange={handleChange}
            inputProps={{
              name: 'tower',
              id: 'tower-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {renderTowerOptions}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs>
        <Typography
          variant="subtitle1"
          title="Fase"
          className={classes.infoTitle}
          noWrap
        >
          Fase &middot; Preventa
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography
          variant="subtitle1"
          title="Etapa"
          className={classes.infoTitle}
          noWrap
        >
          Etapa &middot; 1
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography
          variant="subtitle1"
          title="Aptos"
          className={classes.infoTitle}
          noWrap
        >
          Aptos &middot; 45
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ToolBarComponent
