import React, {useEffect} from 'react';
import {Navigation} from "../../components/Nav/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {loginAPI} from "../../../server/api";
import {setAuthUserData} from "../../redux/thunk/login/loginTh";
import {Redirect} from "react-router-dom";


export const HomePage = (props: any) => {


    const user = useSelector((state: any) => state.authorization.user)
    const dispatch = useDispatch()



    useEffect(() => {
        if(!user){
            dispatch(setAuthUserData())
        }
    }, [])

    return (
        <div>
            <img src={user.avatar} alt=""/>
            <p>{user?.email}</p>
            <p>{user?.name}</p>

        </div>
    )
}