import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router"
import jwtDecode from "jwt-decode";

import ROUTES from "../constants/routes.json"
import { setAuthToken } from "../utils/setAuthToken"

import { useDispatch } from "react-redux";
import { setAuth } from "../redux/userSlice";


export function useForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleEmailChange(e) {
        e.preventDefault()
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    async function handleSignIn(e) {
        e.preventDefault()

        const res = await axios.post(`/api/auth/signin`, { email, password })

        console.log({ res })

        if (res.status === 200) {
            console.log("success")
            window.localStorage.setItem('jwtToken', res.data.token);

            const decoded = jwtDecode(res.data.token);

            dispatch(setAuth(decoded));
            setAuthToken(res.data.token)

            navigate(ROUTES.HOME)
        }
    }

    async function handleSignUp(e) {
        e.preventDefault()
        const res = await axios.post(`/api/auth/signup`, { email, password })

        console.log({ res })

        if (res.status === 200) {
            navigate(ROUTES.SIGN_IN)
        }
    }



    return { email, password, handleEmailChange, handlePasswordChange, handleSignIn, handleSignUp }
}