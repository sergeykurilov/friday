import {CardsAPI, CardsType} from "../../../../server/api";
import {Dispatch} from "redux";
import {setCards} from "../../actions/cards-actions";
import {ActionsType} from "../../reducers/cards/cards-reducer";
import {RootStateType} from "../../store/store";
import {ThunkDispatch} from "redux-thunk";


export const getCardsTC = (_id: string) => (dispatch: Dispatch<ActionsType>) => {
    return CardsAPI.getCards(_id)
        .then((res) => {
            dispatch(setCards(res.data.cards))
        })
        .catch((err) => {
            console.error(err)
        })
}

export const createCardsTC = (newCards: CardsType) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.createCards(newCards)
        .then((res) => {
            dispatch(getCardsTC(newCards.cardsPack_id))
        })
        .catch((err) => {
            console.error(err)
        })
}

export const deleteCardsTC = (cardsPack_id: string) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.deleteCards(cardsPack_id)
        .then((res) => {
            dispatch(getCardsTC(res.data.deletedCard.cardsPack_id))
        })
        .catch((err) => {
            console.error(err)
        })
}

export const updateCardsTC = (card: CardsType) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.updateCards(card)
        .then((res) => {
            const cardsPack_id = res.data.card.cardsPack_id
            dispatch(getCardsTC(cardsPack_id))
        })
        .catch((err) => {
            console.error(err)
        })
}