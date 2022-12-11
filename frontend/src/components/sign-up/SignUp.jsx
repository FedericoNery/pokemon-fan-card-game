import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ButtonToggleMode from './atoms/ButtonToggleMode';
import Copyright from './atoms/Copyright';
import ContainerSignUpForm from './organisms/ContainerSignUpForm';

export default function SignUp() {

    return (
        <Container component="main" maxWidth="xs" sx={{display: "flow-root"}}>
            <CssBaseline />
            <ButtonToggleMode />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1 }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <ContainerSignUpForm />
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}
