import React from "react";
const TipoEnergia = () => {
    return <Grid container spacing={1}>
        <Grid item xs={6} spacing={1}>
            <Typography variant="body2" color="textSecondary" component="p" align="left">
                Tipo: {tipo_energia}
            </Typography>
        </Grid>
        <Grid item xs={6} spacing={1}>
            <Typography variant="body2" color="textSecondary" component="p" align="right">
                Energía: {cantidad_energia}
            </Typography>
        </Grid>
    </Grid>
}

export default TipoEnergia;