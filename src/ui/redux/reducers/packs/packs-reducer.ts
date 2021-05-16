import {ActionTypes} from "../../constants/constants";
import {deletePacks, getPacks, loadingPacks, setCurrentPage, setPacks, updatePacks} from "../../actions/packs-actions";


const initialState = {
    cardPacks: [
        {
            _id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            path: "/def", // папка
            cardsCount: 25,
            grade: 0, // средняя оценка карточек
            shots: 0,// количество попыток
            rating: 0, // лайки
            type: "pack",// ещё будет "folder" (папка)
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            __v: 0,
        },
    ],
    cardPacksTotalCount: 14, // количество колод
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,// выбранная страница
    pageCount: 4, // количество элементов на странице
    loading: false,
}

export type PacksActionsType =
    GetActionPacksType
    | LoadingPacksType
    | SetActionPacksType
    | DeletePacksType
    | UpdatePacksType
    | SetCurrentPageType


type GetActionPacksType = ReturnType<typeof getPacks>
type SetActionPacksType = ReturnType<typeof setPacks>
type LoadingPacksType = ReturnType<typeof loadingPacks>
type DeletePacksType = ReturnType<typeof deletePacks>
type UpdatePacksType = ReturnType<typeof updatePacks>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>

export type InitialPacksStateType = typeof initialState


export default function packsReducer(state = initialState, action: PacksActionsType): InitialPacksStateType {
    //// Собрать все редюсеры в один кейс (будет один пейлоад и стейт :) )
    switch (action.type) {
        case ActionTypes.GET_PACKS:
        case ActionTypes.LOADING_PACKS:
        case ActionTypes.DELETE_PACKS:
        case ActionTypes.SET_CURRENT_PAGE:
        case ActionTypes.SET_PACKS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}



export function createPages(pages: number[] = [], pageCount: number, page: number) {
    if (page > 10) {
        if (page > 5) {
            for (let i = page - 4; i <= page + 5; i++) {
                pages.push(i)
                if (i == pageCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i == pageCount) break
            }
        }
    } else {
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
    }
}



