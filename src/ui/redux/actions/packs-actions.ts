import {ActionTypes} from "../constants/constants";
import {InitialPacksStateType} from "../reducers/packs/packs-reducer";
import {CardPacks, ICardsPack, IResponsePacksType} from "../../../server/api";
import {AxiosResponse} from "axios";


export const getPacks = (cards: IResponsePacksType | undefined) => ({
    type: ActionTypes.GET_PACKS, payload: {...cards}
} as const)

export const setPacks = (cards: ICardsPack) => ({
    type: ActionTypes.SET_PACKS, payload: {...cards}
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