import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store/store";
import {RequestStatusType} from "../../redux/reducers/registration/registration-reducer";

export const handlePasswordChange = (setPassword: any, setPasswordError: any) =>  (e: any) => {
    setPassword(e.currentTarget.value)
    let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (e.currentTarget.value.match(passwordRegex)) {
        setPasswordError(null);
    } else {
        setPasswordError('At least 8 digits, 1 uppercase, 1 number and 1 special character');
    }
}


export const handleEmailChange = (setEmail: any, setEmailError: any) => (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    //
    // let sAddrSpec = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //
    //
    // let sValidEmail = '^' + sAddrSpec + '$';
    // let emailRegex = new RegExp(sValidEmail);
    const sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    const sText = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    const sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    const sQuotedPair = '\\x5c[\\x00-\\x7f]';
    const sDomainLiteral = '\\x5b(' + sText + '|' + sQuotedPair + ')*\\x5d';
    const sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
    const sSubDomain = '(' + sAtom + '|' + sDomainLiteral + ')';
    const sWord = '(' + sAtom + '|' + sQuotedString + ')';
    const sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
    const sLocalPart = sWord + '(\\x2e' + sWord + ')*';
    const sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
    const sValidEmail = '^' + sAddrSpec + '$'; // as whole string
    const emailRegex = new RegExp(sValidEmail);


    if (e.currentTarget.value.match(emailRegex)) {
        setEmailError(null);
    } else {
        setEmailError('Valid email required');
    }
}


export const ValidateInput = ({funcName, value, onChange, required, type, name, id, error}: any) => {

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {funcName}
            </label>
            <div className="mt-1">
                <input
                    id="email"
                    value={value}
                    onChange={onChange}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {error &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                 role="alert">
                <strong className="font-bold">{error}</strong>
            </div>}
        </div>
    );
};


// TODO!
export function collateData() {

}