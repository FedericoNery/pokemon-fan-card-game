import { TextField } from "@mui/material";
import React from "react";

const LastNameInput = () => {
    return <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
    />
}

export default LastNameInput;