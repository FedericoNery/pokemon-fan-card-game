import { TextField } from "@mui/material";
import React from "react";

const EmailInput = () => {
    return <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
    />
}

export default EmailInput;