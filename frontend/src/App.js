import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { createContext, useRef } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContainerUsuarios from './components/administrador/ContainerUsuarios';
import ContainerApp from './components/ContainerApp';
import Dashboard from './components/dashboards/Dashboard';
import ErrorBoundary from './components/errors/ErrorBoundary';
import JuegoFinalizado from './components/juego/JuegoFinalizado';
import ConfigurarMazos from './components/mazos/ConfigurarMazos';
import ContainerEdicionDelMazo from './components/mazos/ContainerEdicionDelMazo';
import MenuPrincipal from './components/menus_principales/MenuPrincipal';
import CreateRoom from './components/multiplayer/CreateRoom';
import EsperandoJugadorRival from './components/multiplayer/EsperandoJugadorRival';
import InyectorMultiplayerGame from './components/multiplayer/InjectorMultiplayerGame';
import ListadoRooms from './components/multiplayer/ListadoRooms';
import SeleccionarMazoMultiplayer from './components/multiplayer/SeleccionarMazoMultiplayer';
import WaitingRoom from './components/multiplayer/WaitingRoom';
import AuthRoute from './components/routes/AuthRoute';
import Login from './components/sign-in/pages/Login';
import Signup from './components/sign-up/SignUp';
import TestMultiplayerGame from './components/TestMultiplayerGame';
import ContainerTiendaStrategy from './components/tienda/ContainerTiendaStrategy';
import DatosUsuario from './components/usuario/DatosUsuario';
import EditarUsuario from './components/usuario/EditarUsuario';
import useColorMode from './hooks/ui-config/useColorMode';
import useTheme from './hooks/ui-config/useTheme';
import { ROUTES } from './utils/routes';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const App = (props) => {

  const { theme, setMode } = useTheme()
  const colorMode = useColorMode(setMode)
  const ref = useRef(null)

  return <>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}
        ref={ref}
        autoHideDuration={3000}
        preventDuplicate={true}
        action={(snackbarId) => (
          <IconButton aria-label="delete" /* onClick={() => closeSnackbar(snackbarId)} */>
            <CloseIcon />
          </IconButton>
        )}>

        <ColorModeContext.Provider value={colorMode}>
          <ContainerApp theme={theme} colorMode={colorMode}>
            <ErrorBoundary>
              <BrowserRouter>
                <Switch>
                  <Route exact path={ROUTES.LOGIN} component={Login} />
                  <Route exact path={ROUTES.SIGNUP} component={Signup} />
                  <AuthRoute>
                    <MenuPrincipal>
                      <Route exact path={ROUTES.MENU_PRINCIPAL} component={Dashboard} />
                      <Route exact path={ROUTES.MAZOS} component={ConfigurarMazos} />
                      <Route exact path={ROUTES.SELECCION_MAZO_MULTIPLAYER} component={SeleccionarMazoMultiplayer} />
                      <Route exact path={ROUTES.CREATE_OR_JOIN_ROOM} component={WaitingRoom} />
                      <Route exact path={ROUTES.CREATE_ROOM} component={CreateRoom} />
                      <Route exact path={ROUTES.LISTADO_DE_ROOMS} component={ListadoRooms} />
                      <Route exact path={ROUTES.ESPERANDO_OTRO_JUGADOR} component={EsperandoJugadorRival} />
                      <Route exact path={ROUTES.JUEGO} component={InyectorMultiplayerGame} />
                      <Route exact path={ROUTES.JUEGO_FINALIZADO} component={JuegoFinalizado} />
                      <Route exact path={ROUTES.DATOS_USUARIO} component={DatosUsuario} />
                      <Route exact path={ROUTES.PERFIL_USUARIO} component={EditarUsuario} />
                      <Route exact path={ROUTES.TIENDA} component={ContainerTiendaStrategy} />
                      <Route exact path={ROUTES.MAZO_DETALLADO_WITH_ID} component={ContainerEdicionDelMazo} />
                      <Route exact path={ROUTES.LISTADO_USUARIOS} component={ContainerUsuarios} />
                      <Route exact path={"/test-juego"} component={TestMultiplayerGame} />
                      <Route exact path="/" component={Dashboard}></Route>
                    </MenuPrincipal>
                  </AuthRoute>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch>
              </BrowserRouter>
            </ErrorBoundary>
          </ContainerApp>
        </ColorModeContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </>
}

export default App;
