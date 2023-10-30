import { TextField } from "@mui/material";
import React from "react";

const UsernameInput = ({initialValue}) => {
    return <TextField
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        disabled={true}
        defaultValue={initialValue}
        autoFocus
    />
}

export default UsernameInput;