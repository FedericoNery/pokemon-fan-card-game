import { TextField } from "@mui/material";
import React from "react";

const PasswordInput = () => {
    return <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
    />
}

export default PasswordInput;