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

const App = (props) => {
  return <>
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.MENU_PRINCIPAL} component={MenuPrincipal} />
          <Route exact path={ROUTES.SELECCION_MAZO} component={SeleccionarMazo} />
          <Route exact path={ROUTES.JUEGO} component={Juego} />
          <Route exact path={ROUTES.JUEGO_FINALIZADO} component={JuegoFinalizado} />
          <Route exact path={ROUTES.DATOS_USUARIO} component={DatosUsuario} />
          <Route path="/" render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </>
}

export default App;
