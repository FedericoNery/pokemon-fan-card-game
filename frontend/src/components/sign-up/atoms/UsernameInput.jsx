import { TextField } from "@mui/material";
import React from "react";

const UsernameInput = () => {
    return <TextField
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoFocus
    />
}

export default UsernameInput;