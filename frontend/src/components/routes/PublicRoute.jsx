import { Redirect } from 'react-router-dom';
import { useIsLogged } from '../../hooks/useIsLogged'
import { ROUTES } from '../../utils/routes';

const PublicRoute = (props) => {
    const isLogged = useIsLogged()
    return isLogged ? <Redirect to={ROUTES.MENU_PRINCIPAL}/> : props.children
}
 
export default PublicRoute;