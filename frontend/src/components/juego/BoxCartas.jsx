import { Box } from '@mui/system';
import React from 'react'

const BoxCartas = (props) => {
    return <Box display="flex" p={1} m={1} flexWrap="nowrap" justifyContent="center" alignItems="flex-end" sx={{
        maxWidth: "100%", height: "40%", margin: "0px", maxHeight: "40%",
        padding: "0px",
    }}>
        {props.children}
        </Box>
}
 
export default BoxCartas;