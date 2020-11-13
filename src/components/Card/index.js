/* import external modules */
import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const OutlinedCard = ({ numApartment, state, type, area }) => {
  const classes = useStyles()

  const changeTitleColor = () => {
    let color = '#74c5b3'

    if (state === 'OPCIONADO') {
      color = 'orange'
    }

    if (state === 'VENDIDO') {
      color = 'red'
    }

    return color
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          style={{ background: changeTitleColor() }}
          align="center"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {state}
        </Typography>
        <Typography variant="h5" component="h2">
          {numApartment}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {area} m²
        </Typography>
        <Typography
          variant="body2"
          component="p"
          align="center"
          className={classes.type}
        >
          Tipo {type}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default OutlinedCard
