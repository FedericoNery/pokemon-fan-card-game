import { TextField } from "@mui/material";
import React from "react";

const PasswordInput = () => {
    return <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
    />
}

export default PasswordInput;