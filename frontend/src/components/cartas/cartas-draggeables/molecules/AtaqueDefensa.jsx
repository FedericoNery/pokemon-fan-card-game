import React from "react";
const AtaqueDefensa = () => {
    return <Grid container spacing={1}>
        <Grid item xs={6} spacing={1}>
            <Typography variant="body2" color="textSecondary" component="p" align="left">
                Ataque: {ataque}
            </Typography>
        </Grid>
        <Grid item xs={6} spacing={1}>
            <Typography variant="body2" color="textSecondary" component="p" align="right">
                Defensa: {defensa}
            </Typography>
        </Grid>
    </Grid>
}

export default AtaqueDefensa;