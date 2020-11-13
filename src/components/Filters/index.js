/* import external modules */
import { Chip, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import { filters } from '../../assets/fakeData/filters'

const Filters = () => {
  const classes = useStyles()

  const renderFilters = filters.map((filter) => {
    return (
      <Grid key={filter.id} item xs>
        <Chip
          label={filter.label}
          variant="outlined"
          className={classes.chip}
          clickable
        />
      </Grid>
    )
  })

  return (
    <Grid container className={classes.filters}>
      {renderFilters}
    </Grid>
  )
}

export default Filters
