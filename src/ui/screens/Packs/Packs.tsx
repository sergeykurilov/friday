import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType, useTypedSelector} from "../../redux/store/store";
import {deletePacksTC, getPacksTC, setPacksTC, updatePacksTC} from "../../redux/thunk/packs/packs-thunk";
import {PacksActionsType} from "../../redux/reducers/packs/packs-reducer";
import {Dispatch} from "redux";
import {Link} from 'react-router-dom';
import {PATH} from "../../components/Nav/Navigation";
import {Pagination} from "../../components/Pagination/Pagination";

interface ICardsPackType {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}


const Packs = () => {
    const dispatch = useDispatch()

    let addPackResolver: () => (dispatch: Dispatch<PacksActionsType>) => Promise<void> = () => dispatch(setPacksTC(cardsPackData));
    let cardsPack = useSelector<RootStateType, any>((state) => {
        return state.packs.cardPacks
    })

    let packs = useSelector<RootStateType, any>((state) => {
        return state.packs
    })
    const cardsPackData: any = {
        cardsPack: {
            name: "no Name", // если не отправить будет таким
            path: "/def", // если не отправить будет такой
            grade: 0,// не обязателен
            shots: 0,// не обязателен
            rating: 0,// не обязателен
            deckCover: "url",// не обязателен
            private: false, // если не отправить будет такой
            type: "pack",// если не отправить будет таким
        }
    }

    const [open, setOpen] = useState<boolean>(false)

    let [onc, seOnc] = useState<string>("")
    let [cardId, setId] = useState<string>("")


    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])


    const currentPage = useTypedSelector(state => state.packs.page)
    const totalCount = useTypedSelector(state => Math.ceil(state.packs.cardPacksTotalCount/state.packs.pageCount))



    return (

        <div className="mt-4 flex flex-col">
            <div className="-my-1  sm:-mx-5 lg:-mx-5">
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"/><span
                    className="ml-2 text-gray-700">My Packs</span>
                </label>
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Pack Id
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>


                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Created
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Rating
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Cards Count
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Shots
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
                                    Path
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <button
                                        onClick={addPackResolver}
                                        type="button"
                                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >

                                        Add pack
                                    </button>
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {cardsPack?.map((cards: ICardsPackType) => {
                                const deletePackResolver: () => (dispatch: Dispatch<PacksActionsType>) => Promise<void> = () => dispatch(deletePacksTC(cards._id));


                                return (
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards._id}</td>
                                        {cardId === cards._id && open ?
                                            <input type="text"
                                                   onBlur={() => {
                                                       console.log(cards._id)
                                                       setId(cards._id)
                                                       setOpen(false)
                                                   }}
                                                   autoFocus
                                                   onChange={(e) => seOnc(e.currentTarget.value)}
                                                   placeholder="Custom focus style"
                                                   className="mt-5 focus:outline-none focus:ring focus:border-blue-300 rounded-sm border-indigo-900"
                                            />
                                            :
                                            <td onDoubleClick={() => {
                                                setId(cards._id)
                                                setOpen(true)
                                            }}
                                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cards.name}</td>

                                        }
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.created}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.rating}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.cardsCount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.shots}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.grade}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cards.path}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={deletePackResolver}
                                                type="button"
                                                className="inline-flex mr-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => dispatch(updatePacksTC(cards._id, onc))}
                                                type="button"
                                                className="inline-flex mr-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Update
                                            </button>
                                            <Link to={`${PATH.CARDS}${cards._id}`}>
                                                Cards
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} numberOfPages={totalCount} changePage={(page)=>dispatch(getPacksTC(page))}/>
        </div>
    )
}


export default Packs;