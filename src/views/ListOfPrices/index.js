/* import external modules */
import { Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import Filters from '../../components/Filters'
import ToolBarComponent from '../../components/ToolBar'
import ApartmentsByFloorList from '../../components/ApartmentsByFloorList'

const ListOfPrice = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ToolBarComponent />
      <Grid container className={classes.filtersAndFloors}>
        <Filters />
        <ApartmentsByFloorList />
      </Grid>
    </main>
  )
}

export default ListOfPrice
