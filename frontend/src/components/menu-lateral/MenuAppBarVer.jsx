import { useTheme } from '@emotion/react';
import { ChevronLeft, ChevronRight, MenuOutlined } from '@mui/icons-material';
import { AppBar as MuiAppBar, CssBaseline, Divider, Drawer as MuiDrawer, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { desloguearse } from '../../redux/actionCreators/authenticate';
import { To } from '../../utils/routes';
import ListJugador from '../opciones-menu-lateral/ListJugador';
import ButtonToggleMode from './atoms/ButtonToggleMode';
import IconButtonUsuarioAutenticado from './IconButtonUsuarioAutenticado';
import MenuUsuarioAutenticado from './MenuUsuarioAutenticado';


const drawerWidth = 240;

const AppBarCustom = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const data = [
  { country: 'Ganadas sin perder rondas', area: 50 },
  { country: 'Ganadas perdiendo una ronda', area: 25 },
  { country: 'Ganadas perdiendo dos rondas', area: 25 },
]



const MenuAppBarVer = (props) => {
  const { history, desloguearse } = props
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  const theme = useTheme();

  const openMenuAppBar = Boolean(anchorEl);

  const onLogout = () => {
    desloguearse()
    history.push(To.login())
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarCustom
          position="absolute" open={open}
          >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuOutlined />
            </IconButton>
            <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1}}>
              Mini variant drawer
            </Typography>
            {auth && (
              <div>
                <IconButtonUsuarioAutenticado onClick={handleMenu} />
                <MenuUsuarioAutenticado
                  isOpen={openMenuAppBar}
                  onClose={handleClose}
                  anchorEl={anchorEl}>
                  <MenuItem onClick={() => history.push(To.perfilUsuario())}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </MenuUsuarioAutenticado>
              </div>
            )}
            <ButtonToggleMode />
          </Toolbar>
        </AppBarCustom>
        <Drawer
          variant="permanent"
          open={open}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <ListJugador />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { desloguearse }, dispatch
  )
}

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(MenuAppBarVer)
