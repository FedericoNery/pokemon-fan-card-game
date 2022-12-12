import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ButtonToggleMode from './atoms/ButtonToggleMode';
import ContainerSignUpForm from './organisms/ContainerSignUpForm';

export default function SignUp() {

    return <Container fixed maxWidth="sm">
        <CssBaseline />
        <div style={{ position: "fixed", top: 50, right: 50 }}>
            <ButtonToggleMode />
        </div>
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
    </Container>
}
