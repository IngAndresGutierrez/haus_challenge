/* import external modules */
import { Fragment } from 'react'
import { Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import OutlinedCard from '../Card'
import { apartmentsByFloor } from '../../assets/fakeData/apartmentsByFloor'

const ApartmentsByFloorList = () => {
  const classes = useStyles()

  const renderApartmentsByFloor = apartmentsByFloor.map((apartmentsfloor) => {
    return (
      <Fragment key={apartmentsfloor.numFloor}>
        <Grid item xs={12} className={classes.floor}>
          <Grid container direction="row">
            {apartmentsfloor.apartments.map((item, index) => {
              return <OutlinedCard key={index} {...item} />
            })}
          </Grid>
        </Grid>
      </Fragment>
    )
  })

  return (
    <Grid container className={classes.floors}>
      {renderApartmentsByFloor}
    </Grid>
  )
}

export default ApartmentsByFloorList
