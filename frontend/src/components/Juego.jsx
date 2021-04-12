import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Carta from './Carta';

const useStyles = makeStyles((theme) => ({
    campo: {
        margin: "0px",
        padding: "0px",
    },
    campoPropio: {

    },

}));

const Juego = (props) => {
    const classes = useStyles();

    return <>
        <Box display="flex" flexWrap="nowrap" p={1} m={1} justifyContent="center" alignItems="flex-start" css={{
            maxWidth: "100%", height: "50%", margin: "0px",
            padding: "0px",
        }}>
            {/* <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                    <Grid item xs={2}>
                        <Carta />
                    </Grid>
                </Grid> */}
            <Box  p={1} m={1}>
                <Carta />
            </Box >
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
        </Box>
        <Button>Siguiente</Button>
        <Box display="flex" p={1} m={1} flexWrap="nowrap" justifyContent="center" alignItems="flex-end" css={{
            maxWidth: "100%", height: "50%", margin: "0px",
            padding: "0px",
        }}>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
            <Box p={1} m={1}>
                <Carta />
            </Box>
        </Box>
    </>
}

export default Juego;