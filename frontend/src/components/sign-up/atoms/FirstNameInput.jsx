import { TextField } from "@mui/material";
import React from "react";

const FirstNameInput = () => {
    return <TextField
        autoComplete="given-name"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
    />
}

export default FirstNameInput;