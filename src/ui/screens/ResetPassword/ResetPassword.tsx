import React, {useEffect, useState} from "react";
import axios from "axios";
import jwt from 'jsonwebtoken';
import {WithSocial} from "../../../common/WithSocial";
import {Redirect} from "react-router-dom";

// export function ResetPassword({ history, match }:any) {
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
//
//     const resetPasswordHandler = async (e:any) => {
//         e.preventDefault();
//
//         const config:any = {
//             header: {
//                 "Content-Type": "application/json",
//             },
//         };
//
//         if (password !== confirmPassword) {
//             setPassword("");
//             setConfirmPassword("");
//             setTimeout(() => {
//                 setError("");
//             }, 5000);
//             return setError("Passwords don't match");
//         }
//
//         try {
//             const { data } = await axios.post(
//                 `https://neko-back.herokuapp.com/2.0/auth/set-new-password/${match.params.token}`,
//                 {
//                     password,
//                 },
//                 config
//             );
//
//             console.log(data);
//             setSuccess(data.data);
//         } catch (error) {
//             setError(error.response.data.error);
//             setTimeout(() => {
//                 setError("");
//             }, 5000);
//         }
//     };
//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <img
//                     className="mx-auto h-12 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt="Workflow"
//                 />
//                 <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
//             </div>
//
//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <form className="space-y-6" onSubmit={resetPasswordHandler}>
//
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                 Password
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 />
//                             </div>
//                         </div>
//
//
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                 Confirm Password
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="confirmpassword"
//                                     placeholder="Confirm new password"
//                                     name="confirmpassword"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 />
//                             </div>
//                         </div>
//
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 Sign in
//                             </button>
//                         </div>
//                     </form>
//
//                   <WithSocial/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// import 'react-toastify/dist/ReactToastify.min.css';


export const ResetPassword = ({match}: any) => { //props.match from React router DOM
    const [values, setValues] = useState({
        res: {},
        token: '',
        newPassword: '',
        buttonText: 'Reset password'
    })

    useEffect(() => {
        let token = match.params.token
        console.log(token)
        if (token) {
            setValues({...values, token})
        }
    }, [])

    const {token, newPassword, buttonText} = values;

    const handleChange = (event: any) => {
        setValues({...values, newPassword: event.target.value});
    };
    const clickSubmit = (event: any) => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'POST',
            url: `https://neko-back.herokuapp.com/2.0/auth/set-new-password`,
            data: {password: newPassword, resetPasswordToken: token}
        })
            .then(response => {
                console.log('RESET PASSWORD SUCCESS', response);

                setValues({...values, res: response, buttonText: 'Done'});
                // save the response(user, token) localstorage/cookie
                // alert(response.data.message);
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error);
                // alert(error.error);/
                setValues({...values, buttonText: 'Reset password'});
            });
    };


    const passwordResetForm = () => (

        <div>

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />sadasd asdasdasd
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="space-y-6">

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        placeholder="Type new password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={newPassword}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={clickSubmit}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>

                        <WithSocial/>
                    </div>
                </div>
            </div>


        </div>
    )

    return (

        <div>
            <div className="col-d-6 offset-md-3">
                {passwordResetForm()}
            </div>
        </div>
    );
};

export default ResetPassword;
