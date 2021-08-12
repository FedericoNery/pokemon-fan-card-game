import './App.css';
import { Route, Switch } from 'react-router';
import ErrorBoundary from './components/errors/ErrorBoundary';
import { ROUTES } from './utils/routes';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import MenuPrincipal from './components/MenuPrincipal';
import SeleccionarMazo from './components/SeleccionarMazo';
import DatosUsuario from './components/DatosUsuario';
import Juego from './components/Juego';
import JuegoFinalizado from './components/JuegoFinalizado';
import ConfigurarMazos from './components/ConfigurarMazos';
import Tienda from './components/Tienda';
import AuthRoute from './components/routes/AuthRoute';
import Dashboard from './components/Dashboard';
import CartasDelMazo from './components/CartasDelMazo';

const App = (props) => {
  return <>
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
              <Route exact path={ROUTES.JUEGO} component={Juego} />
              <Route exact path={ROUTES.JUEGO_FINALIZADO} component={JuegoFinalizado} />
              <Route exact path={ROUTES.DATOS_USUARIO} component={DatosUsuario} />
              <Route exact path={ROUTES.TIENDA} component={Tienda} />
              <Route exact path={ROUTES.MAZO_DETALLADO_WITH_ID} component={CartasDelMazo} />
            </MenuPrincipal>
          </AuthRoute>
          <Route path="/" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </>
}

export default App;
