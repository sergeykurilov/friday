import {ActionTypes} from "../constants/constants";
import {ICardsPack, IResponsePacksType} from "../../../server/api";


export const getPacks = (cards: IResponsePacksType | undefined) => ({
    type: ActionTypes.GET_PACKS, payload: {...cards}
} as const)

export const setPacks = (name: string) => ({
    type: ActionTypes.SET_PACKS, payload: {name}
} as const)

export const deletePacks = (_id: string) => ({
    type: ActionTypes.DELETE_PACKS, payload: {_id}
} as const)

export const updatePacks = (_id: string, name: string) => ({
    type: ActionTypes.UPDATE_PACKS, payload: {_id, name}
} as const)

export const loadingPacks = (loading: boolean) => ({
    type: ActionTypes.LOADING_PACKS, payload: {loading}
} as const)

export const setCurrentPage = ( page: number) => ({
    type: ActionTypes.SET_CURRENT_PAGE, payload: {page} } as const )




