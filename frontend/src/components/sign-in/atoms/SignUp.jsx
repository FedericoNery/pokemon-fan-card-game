import { Link } from '@mui/material';
import React from 'react'
import WithHistory from '../../hoc/WithHistory'
import {To} from '../../../utils/routes'

const SignUp = ({ history }) => {
    return <Link variant="body2" onClick={() => history.push(To.signup())}>
        {"Don't have an account? Sign Up"}
    </Link>
}

const SignUpHistory = () => {
    return WithHistory(SignUp)
}

export default SignUpHistory;