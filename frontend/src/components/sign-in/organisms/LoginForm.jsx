import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { To } from "../../../utils/routes";
import { ContextToastContainer } from "../../ui/toasts/ToastContainer";
import ButtonSubmit from "../atoms/ButtonSubmit";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
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
    const toast = useContext(ContextToastContainer)

    const onLogin = async (event) => {
        event.preventDefault();
        const payload = { email: event.target.email.value, password: event.target.password.value }
        try {
            await loguearse(payload)
            toast.success("Se logueó correctamente")
            history.push(To.menuPrincipal())
        }
        catch (error) {
            toast.error(error?.message)
        }
    }

    return <form className={classes.form} noValidate onSubmit={(values) => onLogin(values)}>
        <EmailInput />
        <PasswordInput />
        <ButtonSubmit />
        <ForgotPasswordSignUp />
        <BoxCopyright />
    </form>
}

export default LoginForm;
