import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../redux/store/store";
import {useDispatch} from "react-redux";
import {CardsType} from "../../../server/api";
import {useParams} from "react-router-dom";
import {Dispatch} from "redux";
import {PacksActionsType} from "../../redux/reducers/packs/packs-reducer";
import {createCardsTC, deleteCardsTC, getCardsTC, updateCardsTC} from "../../redux/thunk/cards/cards-thunk";
import {ModalComponent} from '../../../common/Modal';

export const Cards = () => {
    const {_id}: { _id: string } = useParams();
    const dispatch = useDispatch()

    const cards: CardsType[] = useTypedSelector(state => state.cards.cards)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const cardsPackData: any = {
        card: {
            cardsPack_id: "609944dfe00ab80004f46989",
            question: question, // если не отправить будет таким
            answer: answer, // если не отправить будет таким
            grade: 0, // 0..5, не обязателен
            shots: 0, // не обязателен
            rating: 0, // не обязателен
            answerImg: "base 64", // не обязателен
            questionImg: "base 64", // не обязателен
            questionVideo: "base 64", // не обязателен
            answerVideo: "base 64", // не обязателен
            type: "card", // если не отправить будет таким
        }
    }


    let addPackResolver: () => (dispatch: Dispatch<PacksActionsType>) => Promise<void> = () => dispatch(createCardsTC(cardsPackData));


    useEffect(() => {
        console.log("GET CARDS")
        dispatch(getCardsTC(_id));
    }, [dispatch,_id,answer,question])

    const [open, setOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setOpen(!open)}>Open</button>
            <ModalComponent setQuestion={setQuestion} setAnswer={setAnswer} answer={answer} question={question}
                            addCard={addPackResolver} open={open} setOpen={setOpen}/>
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
                        {/*<button*/}
                        {/*    onClick={addPackResolver}*/}
                        {/*    type="button"*/}
                        {/*    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                        {/*>*/}
                        {/*    ADD*/}
                        {/*</button>*/}
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {cards?.map((cards) => {
                    const updatedQuestion: any = {
                        cardsPack_id: "609944dfe00ab80004f46989",
                        _id: cards._id,
                        question: "nopenopenope", // если не отправить будет таким
                        answer: "no answer", // если не отправить будет таким
                        grade: 0, // 0..5, не обязателен
                        shots: 0, // не обязателен
                        rating: 0, // не обязателен
                        answerImg: "base 64", // не обязателен
                        questionImg: "base 64", // не обязателен
                        questionVideo: "base 64", // не обязателен
                        answerVideo: "base 64", // не обязателен
                        type: "card", // если не отправить будет таким
                    }
                    return (
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.question}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cards.answer}</td>


                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.grade}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.updated}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{"some img"}</td>


                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => {
                                        return dispatch(deleteCardsTC(cards._id))
                                    }}
                                    type="button"
                                    className="inline-flex mr-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        return dispatch(updateCardsTC(updatedQuestion))
                                    }}
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
