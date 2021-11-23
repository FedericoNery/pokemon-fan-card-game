import { Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonEditarUsuario = () => {
    return <>
        <Grid item xs={12}>
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12} >
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12} >
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12}>
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12}>
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12}>
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
        <Grid item xs={12}>
            <Skeleton variant="rectangular" width={210} height={118} />
        </Grid>
    </>
}

export default SkeletonEditarUsuario;