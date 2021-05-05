import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType, useTypedSelector} from "../../redux/store/store";
import {RequestStatusType} from "../../redux/reducers/registration/registration-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from '../../components/Nav/Navigation';
import {userRegistrationTC} from "../../redux/thunk/registration/registration-thunk";
import {WithSocial} from '../../../common/WithSocial';
import {handleEmailChange, handlePasswordChange, ValidateInput} from "../../components/Input/ValidateInput";


export default function Registration() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState(false)
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const isRegistration = useTypedSelector<boolean>(state => state.registration.isRegistration)
    const status = useTypedSelector<RequestStatusType>(state => state.registration.status)
    const dispatch = useDispatch();
    const onRegistrationCallback = () => {
        dispatch(userRegistrationTC({email, password, rememberMe}))
    }
    if (isRegistration) {
        return <Redirect to={PATH.LOGIN}/>
    }

    let onChange = handleEmailChange(setEmail, setEmailError);
    let onRememberMeHandler = () => setRememberMe(true);
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <ValidateInput funcName={"Email address"}
                                   value={email}
                                   onChange={onChange}
                                   required={true}
                                   type={"email"}
                                   name={"email"}
                                   id={"email"}
                                   error={emailError}
                    />
                    <ValidateInput funcName={"Password"}
                                   value={password}
                                   onChange={handlePasswordChange(setPassword, setPasswordError)}
                                   required={true}
                                   type="password"
                                   name="password"
                                   id="password"
                                   error={passwordError}/>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                checked={rememberMe}
                                onClick={onRememberMeHandler}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            // disabled={status === "loading"}
                            onClick={onRegistrationCallback}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <WithSocial/>
            </div>
        </div>
    )
}
