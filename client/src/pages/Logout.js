import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";

export default function () {

    let navigate = useNavigate();


    useAuth().logout();

    useEffect(() => {
        navigate('/')

    })

    return <h1>Loging out...</h1>
}