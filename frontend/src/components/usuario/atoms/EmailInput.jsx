import { TextField } from "@mui/material";
import React from "react";

const EmailInput = ({initialValue}) => {
    return <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        defaultValue={initialValue}
    />
}

export default EmailInput;