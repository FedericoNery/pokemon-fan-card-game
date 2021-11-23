import { Button } from "@mui/material";
import React from "react";

const ButtonSignUp = () => {
    return <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Sign Up
    </Button>
}

export default ButtonSignUp;