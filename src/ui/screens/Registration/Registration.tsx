import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store/store";
import {RequestStatusType} from "../../redux/reducers/registration/registration-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from '../../components/Nav/Navigation';
import {userRegistrationTC} from "../../redux/thunk/registration/registration-thunk";
import {WithSocial} from "../../components/Common/WithSocial";


export default function Registration() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const isRegistration = useSelector<RootStateType, boolean>(registration => registration.registration.isRegistration)
    const status = useSelector<RootStateType, RequestStatusType>(registration => registration.registration.status)
    const dispatch = useDispatch();

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onChangeRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    const onRegistrationCallback = () => {
        dispatch(userRegistrationTC({email, password, rememberMe}))
    }

    // isAuth && <Redirect to={PATH.LOGIN}/>

    if (isRegistration) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/*<img*/}
                {/*    className="mx-auto h-12 w-auto"*/}
                {/*    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"*/}
                {/*    alt="Workflow"*/}
                {/*/>*/}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    value={email}
                                    onChange={onChangeEmailHandler}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    value={password}
                                    onChange={onChangePasswordHandler}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={onChangeRememberMeHandler}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <NavLink to={PATH.RESET} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </NavLink>
                            </div>

                        </div>

                        <div>
                            <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                //  disabled={status === "loading"}
                                    onClick={onRegistrationCallback}
                            >
                                Sign up
                            </button>

                        </div>
                    </form>
                   <WithSocial/>
                </div>
            </div>
        </div>
    )
}
