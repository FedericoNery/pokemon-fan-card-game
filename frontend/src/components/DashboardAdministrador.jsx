import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import SimpleCard from './SimpleCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: theme.spacing(16)
    },
  }));

const DashboardAdministrador = (props) => {
    const classes = useStyles();

    return <Grid container spacing={3}>
   {/*  <Grid item xs={12}>
    <SimpleCard />
    </Grid>
    <Grid item xs={6}>
    <SimpleCard />
    </Grid>
    <Grid item xs={6}>
    <SimpleCard />
    </Grid> */}
    <Grid item xs={2}>
    <SimpleCard />
    </Grid>
    <Grid item xs={2}>
    <SimpleCard />
    </Grid>
    <Grid item xs={2}>
    <SimpleCard />
    </Grid>
    <Grid item xs={2}>
    <SimpleCard />
    </Grid>
{/*     <Grid item xs={6}>
      <GraficoTorta data={data} />
    </Grid>
 */}  </Grid>
}
 
export default DashboardAdministrador;