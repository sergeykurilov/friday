import React, {useEffect} from 'react';
import {Navigation} from "../../components/Nav/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {loginAPI} from "../../../server/api";
import {setAuthUserData} from "../../redux/thunk/login/login-thunk";
import {Redirect} from "react-router-dom";


export const HomePage = (props: any) => {


    const user = useSelector((state: any) => state.login.user)
    const dispatch = useDispatch()



    useEffect(() => {
        if(!user){
            dispatch(setAuthUserData())
        }
    }, [])

    return (
        <div style={{maxWidth: "80%", margin: "auto"}}>
            <img src={user?.avatar} alt=""/>
            <p>{user?.email}</p>
            <p>{user?.name}</p>
        </div>
    )
}