import { TextField } from "@mui/material";
import React from "react";

const ConfirmPasswordInput = ({initialValue}) => {
    return <TextField
        required
        fullWidth
        name="confirmpassword"
        label="Confirm Password"
        type="password"
        id="password"
        autoComplete="new-password"
        defaultValue={initialValue}
    />
}

export default ConfirmPasswordInput;