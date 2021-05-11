import React, {useState} from 'react';
import {useTypedSelector} from "../../redux/store/store";
import {useDispatch} from "react-redux";
import {CardsType} from "../../../server/api";
import {Redirect} from "react-router-dom";
import {PATH} from "../../components/Nav/Navigation";

export const Cards = () => {

    const cards: CardsType[] = useTypedSelector(state => state.cards.cards)
    const isAuth: boolean = useTypedSelector(state => state.login.isAuth)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newQuestion, setNewQuestion] = useState<string>("")
    const [newAnswer, setAnswer] = useState<string>("")
    const dispatch = useDispatch()


    if(!isAuth){
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <label className="inline-flex items-center mt-3">
                <span className="ml-2 text-gray-700">Cards</span>
            </label>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Question
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Answer
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Grade
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Updated
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Url
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                            ADD
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {cards?.map((cards) => {
                    return (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.question}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cards.answer}</td>


                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.grade}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.updated}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{"some img"}</td>


                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    type="button"
                                    className="inline-flex mr-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex mr-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>)
}