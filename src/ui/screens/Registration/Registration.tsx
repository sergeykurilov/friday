import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store/store";
import {RequestStatusType} from "../../redux/reducers/registration/registration-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from '../../components/Nav/Navigation';
import {userRegistrationTC} from "../../redux/thunk/registration/registration-thunk";
import { WithSocial } from '../../../common/WithSocial';


export default function Registration() {
        ////asdasd
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState(false)


    const [passwordError, setPasswordError] = React.useState<string | null>(null);
    const [emailError, setEmailError] = React.useState<string | null>(null);

    const isRegistration = useSelector<RootStateType, boolean>(registration => registration.registration.isRegistration)


    const status = useSelector<RootStateType, RequestStatusType>(registration => registration.registration.status)
    const dispatch = useDispatch();
    const resData = {email,password, rememberMe}




    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);

        //
        // let sAddrSpec = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //
        //
        // let sValidEmail = '^' + sAddrSpec + '$';
        // let emailRegex = new RegExp(sValidEmail);


        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
        var emailRegex = new RegExp(sValidEmail);


        if (e.currentTarget.value.match(emailRegex)) {
            setEmailError(null);
        } else {
            setEmailError('Valid email required');
        }
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)

        let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (e.currentTarget.value.match(passwordRegex)) {
            setPasswordError(null);
        } else {
            setPasswordError('At least 8 digits, 1 uppercase, 1 number and 1 special character');
        }
    }



    ///////


    ///////





    // const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.currentTarget.value)
    // }

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

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {emailError &&
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <strong className="font-bold">{emailError}</strong>
                        </div>}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        {passwordError &&	  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                                    role="alert">
                            <strong className="font-bold">{passwordError}</strong>
                        </div>}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onClick={() => setRememberMe(true)}
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
                                onClick={() => dispatch(userRegistrationTC(resData))}
                            >
                                Sign up
                            </button>

                        </div>
                    </div>


                       <WithSocial/>

                </div>
            </div>
        </div>
    )
}
