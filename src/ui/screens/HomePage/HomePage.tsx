import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAuthUserData} from "../../redux/thunk/login/login-thunk";
import {Redirect} from "react-router-dom";
import {useTypedSelector} from "../../redux/store/store";


export const HomePage = (props: any) => {

    const isAuth = useTypedSelector<boolean>(state => state.login.isAuth)
    const user = useSelector((state: any) => state.login.user)
    const dispatch = useDispatch()



    useEffect(() => {
        if(!user){
            dispatch(setAuthUserData())
        }
    }, [])
    if(!isAuth){
        return <Redirect to="/login"/>
    }
    return (
        <div style={{maxWidth: "80%", margin: "auto"}}>
            <img src={user?.avatar} alt=""/>
            <p>{user?.email}</p>
            <p>{user?._id}</p>
            <p>{user?.name}</p>
        </div>
    )
}