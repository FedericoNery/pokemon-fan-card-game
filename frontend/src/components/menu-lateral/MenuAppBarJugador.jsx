import { useTheme } from '@emotion/react';
import { ChevronLeft, MenuOutlined } from '@mui/icons-material';
import { AppBar as MuiAppBar, CssBaseline, Divider, Drawer as MuiDrawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { desloguearse } from '../../redux/actionCreators/authenticate';
import { To } from '../../utils/routes';
import ListJugador from '../opciones-menu-lateral/ListJugador';
import ListJugadorResponsive from '../opciones-menu-lateral/ListJugadorResponsive';
import ButtonDrawer from './atoms/ButtonDrawer';
import ButtonToggleMode from './atoms/ButtonToggleMode';
import MenuDesplegableUsuario from './atoms/MenuDesplegableUsuario';
import PokemonCardGameTypography from './atoms/PokemonCardGameTypography';


const drawerWidth = 250;

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
        width: 90,//TODO: Si estoy en mobile hacerlo más chico
        [theme.breakpoints.up('sm')]: {
          width: 90,
        },
      }),
    },
  }),
);

const MenuAppBarJugador = (props) => {
  const { history, desloguearse } = props
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isLowerMd = useMediaQuery(theme.breakpoints.down('md'));

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

  return <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarCustom
        position="absolute" open={open}
      >
        <Toolbar
          sx={{
            pr: '20px', // keep right padding when drawer closed
          }}>
          {
            !isLowerMd && <ButtonDrawer
            toggleDrawer={toggleDrawer}
            open={open} />
          }
          <PokemonCardGameTypography />
          {
            isLowerMd &&
            <ListJugadorResponsive />
          }
          <MenuDesplegableUsuario
            handleMenu={handleMenu}
            handleClose={handleClose}
            openMenuAppBar={openMenuAppBar}
            anchorEl={anchorEl}
            onLogout={onLogout}
            history={history}
          />
          <ButtonToggleMode />
        </Toolbar>
      </AppBarCustom>
      {!isLowerMd && <Drawer
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
      }
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

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { desloguearse }, dispatch
  )
}

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(MenuAppBarJugador)
