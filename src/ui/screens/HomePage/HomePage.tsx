import React from 'react';
import {Navigation} from "../../components/Nav/Navigation";
import {useSelector} from "react-redux";

export const HomePage = (props:any) => {

    const user = useSelector((state:any) => state.authorization.user)
    console.log(user)
    return(
        <div>
            {Object.keys(user)}
        </div>
    )
}