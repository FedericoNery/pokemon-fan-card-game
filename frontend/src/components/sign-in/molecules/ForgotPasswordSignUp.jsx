import { Grid } from "@mui/material";
import React from "react";
import ForgotPassword from '../atoms/ForgotPassword'
import SignUp from '../atoms/SignUp'

const ForgotPasswordSignUp = () => {
    return <Grid container>
        <Grid item xs>
            <ForgotPassword />
        </Grid>
        <Grid item>
            <SignUp />
        </Grid>
    </Grid>
}

export default ForgotPasswordSignUp;