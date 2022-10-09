import './App.css';
import { Route, Switch } from 'react-router';
import ErrorBoundary from './components/errors/ErrorBoundary';
import { ROUTES } from './utils/routes';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/sign-in/pages/Login';
import { makeStyles } from '@mui/styles';
import MenuPrincipal from './components/menus_principales/MenuPrincipal';
import AuthRoute from './components/routes/AuthRoute'
import ConfigurarMazos from './components/mazos/ConfigurarMazos';
import Dashboard from './components/dashboards/Dashboard';
import SeleccionarMazo from './components/mazos/SeleccionarMazo'
import SeleccionarMazoMultiplayer from './components/multiplayer/SeleccionarMazoMultiplayer'
import ContainerEdicionDelMazo from './components/mazos/ContainerEdicionDelMazo'
import ContainerJuego from './components/juego/ContainerJuego'
import JuegoFinalizado from './components/juego/JuegoFinalizado'
import Tienda from './components/tienda/Tienda'
import DatosUsuario from './components/usuario/DatosUsuario'
import ListadoUsuarios from './components/administrador/ListadoUsuarios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContainerApp from './components/ContainerApp';
import { useState } from 'react';
import { useMemo } from 'react';
import { createContext } from 'react';
import Signup from './components/sign-up/SignUp';
import EditarUsuario from './components/usuario/EditarUsuario';
import ContainerTiendaStrategy from './components/tienda/ContainerTiendaStrategy';
import ContainerLoaderTienda from './components/tienda/ContainerLoaderTienda';
import WaitingRoom from './components/multiplayer/WaitingRoom';
import PublicRoute from './components/routes/PublicRoute';
import ListadoRooms from './components/multiplayer/ListadoRooms';
import CreateRoom from './components/multiplayer/CreateRoom';
import EsperandoJugadorRival from './components/multiplayer/EsperandoJugadorRival';
import { Redirect } from 'react-router-dom'

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

/*
 *  Frontend flow: 
 * 
 * 1. user first opens this app in the browser. 
 * 2. a screen appears asking the user to send their friend their game URL to start the game.
 * 3. the user sends their friend their game URL
 * 4. the user clicks the 'start' button and waits for the other player to join. 
 * 5. As soon as the other player joins, the game starts. 
 * 
 * 
 * Other player flow:
 * 1. user gets the link sent by their friend
 * 2. user clicks on the link and it redirects to their game. If the 'host' has not yet 
 *    clicked the 'start' button yet, the user will wait for when the host clicks the start button.  
 *    If the host decides to leave before they click on the "start" button, the user will be notified
 *    that the host has ended the session. 
 * 3. Once the host clicks the start button or the start button was already clicked on
 *    before, that's when the game starts. 
 * Onboarding screen =====> Game start. 
 * 
 * Every time a user opens our site from the '/' path, a new game instance is automatically created
 * on the back-end. We should generate the uuid on the frontend, send the request with the uuid
 * as a part of the body of the request. If any player leaves, then the other player wins automatically.  
 * 
 */


const App = (props) => {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return <>
    <ThemeProvider theme={theme}>
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
                    <Route exact path={ROUTES.SELECCION_MAZO} component={SeleccionarMazo} />
                    <Route exact path={ROUTES.SELECCION_MAZO_MULTIPLAYER} component={SeleccionarMazoMultiplayer} />
                    <Route exact path={ROUTES.CREATE_OR_JOIN_ROOM} component={WaitingRoom} />
                    <Route exact path={ROUTES.CREATE_ROOM} component={CreateRoom} />
                    <Route exact path={ROUTES.LISTADO_DE_ROOMS} component={ListadoRooms} />
                    <Route exact path={ROUTES.ESPERANDO_OTRO_JUGADOR} component={EsperandoJugadorRival} />
                    <Route exact path={ROUTES.JUEGO} component={ContainerJuego} />
                    <Route exact path={ROUTES.JUEGO_FINALIZADO} component={JuegoFinalizado} />
                    <Route exact path={ROUTES.DATOS_USUARIO} component={DatosUsuario} />
                    <Route exact path={ROUTES.PERFIL_USUARIO} component={EditarUsuario} />
                    <Route exact path={ROUTES.TIENDA} component={ContainerTiendaStrategy} />
                    <Route exact path={ROUTES.MAZO_DETALLADO_WITH_ID} component={ContainerEdicionDelMazo} />
                    <Route exact path={ROUTES.LISTADO_USUARIOS} component={ListadoUsuarios} />
                   {/*  <Route path="/" component={Dashboard}></Route> */}
                    <Redirect to="/menu-principal"/>
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
    </ThemeProvider>
  </>
}

export default App;
