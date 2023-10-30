import { useHistory } from "react-router";

const WithHistory = Component => {
    const history = useHistory()
    return <Component history={history} />
}
 
export default WithHistory;