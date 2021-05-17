import {CardsAPI, CardsType} from "../../../../server/api";
import {Dispatch} from "redux";
import {createCards, GET_CARDS_ID, setCards} from "../../actions/cards-actions";
import {ActionsType} from "../../reducers/cards/cards-reducer";
import {RootStateType} from "../../store/store";
import {ThunkDispatch} from "redux-thunk";
import {logoutTC} from "../login/login-thunk";


export const getCardsTC = (_id: string) => (dispatch: Dispatch<ActionsType>) => {
    return CardsAPI.getCards(_id)
        .then((res) => {
            dispatch(setCards(res.data.cards))
        }).then((res: any) => {
            let cardsPack_id = res.data.newCard.cardsPack_id
            dispatch(GET_CARDS_ID(cardsPack_id))
            console.log(cardsPack_id)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const createCardsTC = (cardsPack_id: string, question: string, answer: string) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.createCards(cardsPack_id, question, answer)
        .then((res:any) => {
            dispatch(createCards(cardsPack_id, question, answer))
            dispatch(GET_CARDS_ID(res.newCard._id))
        })
        .catch((error) => {
            alert(error.response.data.error)
        })
}

export const deleteCardsTC = (cardsPack_id: string) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.deleteCards(cardsPack_id)
        .then((res) => {
            dispatch(getCardsTC(res.data.deletedCard.cardsPack_id))
        })
        .catch((err) => {
            console.log(err)
        })
}

export const updateCardsTC = (cards: CardsType) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    return CardsAPI.updateCards(cards)
        .then((res) => {
            dispatch(getCardsTC(res.data.card.cardsPack_id))
        })
        .catch((err) => {
            console.error(err)
        })
}
