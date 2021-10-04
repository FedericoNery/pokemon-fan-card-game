import './App.css';
import { Route, Switch } from 'react-router';
import ErrorBoundary from './components/errors/ErrorBoundary';
import { ROUTES } from './utils/routes';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import { makeStyles } from '@mui/styles';
import MenuPrincipal from './components/menus_principales/MenuPrincipal';
import AuthRoute from './components/routes/AuthRoute'
import ConfigurarMazos from './components/mazos/ConfigurarMazos';
import Dashboard from './components/dashboards/Dashboard';
import SeleccionarMazo from './components/mazos/SeleccionarMazo'
import ContainerEdicionDelMazo from './components/mazos/ContainerEdicionDelMazo'
import ContainerJuego from './components/juego/ContainerJuego'
import JuegoFinalizado from './components/juego/JuegoFinalizado'
import Tienda from './components/Tienda'
import DatosUsuario from './components/DatosUsuario'

const App = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.primary.main,
    }
  }));

  const classes = useStyles();
  
  return <>
    <div {...props} className={classes.root}>
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <AuthRoute>
              <MenuPrincipal>
                <Route exact path={ROUTES.MENU_PRINCIPAL} component={Dashboard} />
                <Route exact path={ROUTES.MAZOS} component={ConfigurarMazos} />
                <Route exact path={ROUTES.SELECCION_MAZO} component={SeleccionarMazo} />
                <Route exact path={ROUTES.JUEGO} component={ContainerJuego} />
                <Route exact path={ROUTES.JUEGO_FINALIZADO} component={JuegoFinalizado} />
                <Route exact path={ROUTES.DATOS_USUARIO} component={DatosUsuario} />
                <Route exact path={ROUTES.TIENDA} component={Tienda} />
                <Route exact path={ROUTES.MAZO_DETALLADO_WITH_ID} component={ContainerEdicionDelMazo} />
              </MenuPrincipal>
            </AuthRoute>
            <Route path="/" render={() => <Login />} />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
      </div>
  </>
}

export default App;
