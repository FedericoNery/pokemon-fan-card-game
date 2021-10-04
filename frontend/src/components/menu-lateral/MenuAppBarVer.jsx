import React from 'react';
import clsx from 'clsx';
import ListJugador from '../opciones-menu-lateral/ListJugador';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { desloguearse } from '../../redux/actionCreators/authenticate';
import { withRouter } from 'react-router';
import { To } from '../../utils/routes';
import { AppBar as MuiAppBar, createTheme, CssBaseline, Divider, Drawer as MuiDrawer, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { AccountCircle, ChevronLeft, ChevronRight, MenuOutlined } from '@mui/icons-material';
import IconButtonUsuarioAutenticado from './IconButtonUsuarioAutenticado';
import MenuUsuarioAutenticado from './MenuUsuarioAutenticado';
import { Box, ThemeProvider } from '@mui/system';
import { styled } from '@mui/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
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

const theme = createTheme();


const MenuAppBarVer = (props) => {
  const { history, desloguearse } = props
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);

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

  const handleDrawerOpen = () => {
    debugger
    setOpen(true);
  };

  const handleDrawerClose = () => {
    debugger
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="absolute" open={open}>
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
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
            {auth && (
              <div>
                <IconButtonUsuarioAutenticado onClick={handleMenu} />
                <MenuUsuarioAutenticado
                  isOpen={openMenuAppBar}
                  onClose={handleClose}
                  anchorEl={anchorEl}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </MenuUsuarioAutenticado>
              </div>
            )}
          </Toolbar>
        </AppBar>
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
              {!open ? <ChevronRight /> : <ChevronLeft />}
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
