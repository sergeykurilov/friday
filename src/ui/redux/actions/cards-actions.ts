import {ActionTypes} from "../constants/constants";
import {CardsType} from "../../../server/api";


export const setCards = (cards: CardsType[]) => ({
    type: ActionTypes.SET_CARDS, payload: {cards}
} as const)

export const createCards = (cardsPack_id: string, question: string,answer: string) => ({
    type: ActionTypes.ADD_CARDS, payload: {cardsPack_id, question,answer}
} as const)

export const GET_CARDS_ID = (cardsPack_id: string) => ({
    type: ActionTypes.GET_CARDS_ID, payload: {cardsPack_id}
} as const);


export const setFilteredCards = (filteredCards:FilteredCardsType ) => ({
    type: ActionTypes.SET_FILTERED_CARDS, payload: {filteredCards}
} as const)

export const setCardsGrade = (_id: string,grade:number) => ({
    type: ActionTypes.SET_CARDS_GRADE, payload: {_id,grade}
} as const)

export type FilteredCardsType = {
    minGrade: number
    maxGrade: number
    packName: string
}
