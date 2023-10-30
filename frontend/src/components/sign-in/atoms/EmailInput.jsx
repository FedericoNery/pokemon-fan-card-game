import { TextField } from "@mui/material";
import React from "react";

const EmailInput = () => {
    return <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
    />
}

export default EmailInput;