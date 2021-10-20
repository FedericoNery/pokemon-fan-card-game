import { makeStyles } from "@mui/styles";
import { To } from "../../../utils/routes";
import ButtonSubmit from "../atoms/ButtonSubmit";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import RememberMe from "../atoms/RememberMe";
import BoxCopyright from "../molecules/BoxCopyright";
import ForgotPasswordSignUp from "../molecules/ForgotPasswordSignUp";


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}));

const LoginForm = (props) => {
    const { history, loguearse } = props
    const classes = useStyles();

    const onLogin = async (event) => {
        event.preventDefault();
        const payload = { email: event.target.email.value, password: event.target.password.value }
        try {
            await loguearse(payload)
            history.push(To.menuPrincipal())
        }
        catch (error) {
            console.log(error)
        }
    }

    return <form className={classes.form} noValidate onSubmit={(values) => onLogin(values)}>
        <EmailInput />
        <PasswordInput />
        {/* <RememberMe /> */}
        <ButtonSubmit />
        <ForgotPasswordSignUp />
        <BoxCopyright />
    </form>
}

export default LoginForm;