import {deletePacks, getPacks, loadingPacks, setPacks, updatePacks} from "../../actions/packs-actions";

import {ICardsPack, IResponsePacksType, packsAPI} from "../../../../server/api";
import {Dispatch} from "redux";
import {PacksActionsType} from "../../reducers/packs/packs-reducer";


export const getPacksTC = (page?: number, pageCount?: number) => (dispatch: Dispatch<PacksActionsType>) => {
    dispatch(loadingPacks(false))
    return packsAPI.getCards(page,pageCount)
        .then((res: IResponsePacksType | undefined) => {
            console.log(res)
            dispatch(getPacks(res))
            dispatch(loadingPacks(true))
        })
        .catch((err) => {
            dispatch(loadingPacks(false))
            console.error(err)
        })
}

export const setPacksTC = (name: string) => (dispatch: Dispatch<PacksActionsType>) => {
    dispatch(loadingPacks(false))
    return packsAPI.addPack(name)
        .then((cards) => {
            console.log(cards)
            dispatch(setPacks(name))
            dispatch(loadingPacks(true))
        })
        .catch((err) => {
            dispatch(loadingPacks(false))
            console.error(err)
        })
}

export const deletePacksTC = (_id: string) => (dispatch: Dispatch<PacksActionsType>) => {
    dispatch(loadingPacks(false))
    return packsAPI.deleteCards(_id)
        .then(() => {
            dispatch(deletePacks(_id))
            dispatch(loadingPacks(true))
        })
        .catch((err) => {
            dispatch(loadingPacks(false))
            console.error(err)
        })
}

export const updatePacksTC = (_id: string, name: string) => (dispatch: Dispatch<PacksActionsType>) => {
    dispatch(loadingPacks(false))
    return packsAPI.updateCards(_id, name)
        .then(() => {
            dispatch(updatePacks(_id, name))
            dispatch(loadingPacks(true))
        })
        .catch((err) => {
            dispatch(loadingPacks(false))
            console.error(err)
        })
}
