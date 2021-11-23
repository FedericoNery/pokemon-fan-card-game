import { TextField } from "@mui/material";
import React from "react";

const FirstNameInput = ({initialValue}) => {
    return <TextField
        autoComplete="given-name"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
        defaultValue={initialValue}
    />
}

export default FirstNameInput;