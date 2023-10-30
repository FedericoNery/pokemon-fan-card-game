import { TextField } from "@mui/material";
import React from "react";

const LastNameInput = ({initialValue}) => {
    return <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        defaultValue={initialValue}
    />
}

export default LastNameInput;