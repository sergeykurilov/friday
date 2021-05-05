import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../components/Input/Input";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/thunk/login/login-thunk";
import {handleEmailChange, handlePasswordChange, ValidateInput} from "../../components/Input/ValidateInput";
import {WithSocial} from "../../../common/WithSocial";
import {RootStateType} from "../../redux/store/store";

export const Login:React.FC = (props) => {
    const isAuth = useSelector<RootStateType,boolean>(state => state.login.isAuth)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [emailError, setEmailError] = React.useState<string | null>(null);
    const [passwordError, setPasswordError] = React.useState<string | null>(null);
    const resData = {email,password,rememberMe}
    const dispatch = useDispatch()

    if(isAuth === true){
        return <Redirect to="/home"/>
    }

    const onLoginCallback = () => dispatch(loginTC(resData))

    let onChangePassword = handlePasswordChange(setPassword, setPasswordError);
    let onChangeEmail = handleEmailChange(setEmail, setEmailError);
    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="space-y-6">
                            <div>
                                <div className="mt-1">
                                    <ValidateInput funcName={"Email address"}
                                                   value={email}
                                                   onChange={onChangeEmail}
                                                   required={true}
                                                   type={"email"}
                                                   name={"email"}
                                                   id={"email"}
                                                   error={emailError}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-1">
                                    <ValidateInput funcName={"Password"}
                                                   value={password}
                                                   onChange={onChangePassword}
                                                   required={true}
                                                   type="password"
                                                   name="password"
                                                   id="password"
                                                   error={passwordError}/>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Input
                                        value={rememberMe}
                                        setValue={setRememberMe}
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Reset Password
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={onLoginCallback}
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <WithSocial/>
                    </div>
                </div>
            </div>
        </div>
    )
}
