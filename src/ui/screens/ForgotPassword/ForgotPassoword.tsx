import React, {useState} from "react";
import axios from "axios";

// export function ForgotPassword() {
//
//     const [email, setEmail] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
//
//     const forgotPasswordHandler = async (e:any) => {
//         e.preventDefault();
//
//         const config:any = {
//             method: "POST",
//             header: {
//                 "Accept":"application/json",
//                 "Content-Type": "application/json",
//             },
//         };
//
//         try {
//             const { data } = await axios.post(
//                 "https://cards-nya-back.herokuapp.com/1.0/forgotpassword",
//                 { email },
//                 config
//             );
//
//             setSuccess(data.data);
//         } catch (error) {
//             setError(error.response.data.error);
//             setEmail("");
//             setTimeout(() => {
//                 setError("");
//             }, 5000);
//         }
//     };
//
//
//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <img
//                     className="mx-auto h-12 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt="Workflow"
//                 />
//                 <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
//             </div>
//
//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <form className="space-y-6"  onSubmit={forgotPasswordHandler}>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email address
//                             </label>
//                             {error && <span className="error-message">{error}</span>}
//                             {success && <span className="success-message">{success}</span>}
//                             <div className="mt-1">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
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
//                                 Send Email
//                             </button>
//                         </div>
//                     </form>
//
//
//                 </div>
//             </div>
//         </div>
//     )
// }

export const ForgotPassword = ({history}: any) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Send email'
    })

    const {email, buttonText} = values;

    const handleChange = (name: any) => (event: any) => {
        // console.log(event.target.value);
        setValues({...values, [name]: event.target.value});
    };
    const clickSubmit = (event: any) => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'POST',
            url: `https://neko-back.herokuapp.com/2.0/auth/forgot`,
            data: {email}
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
                // @ts-ignore
                setValues({...values, name: '', email: '', password: '', buttonText: 'Request'});
                // save the response(user, token) localstorage/cookie
                alert(response.data.message);
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                alert(error.response.data.error);
                setValues({...values, buttonText: 'Request password reset link'});
            });
    };


    const passwordForgotForm = () => (
        <div>
            <div>
                <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
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
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={handleChange('email')}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <div className="col-d-6 offset-md-3">
                {passwordForgotForm()}
            </div>
        </div>
    );
};


