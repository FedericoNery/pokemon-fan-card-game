import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const RememberMe = () => {
    return <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
    />
}

export default RememberMe;