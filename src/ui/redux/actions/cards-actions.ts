import {ActionTypes} from "../constants/constants";
import {CardsType} from "../../../server/api";


export const setCards = (cards: CardsType[]) => ({
    type: ActionTypes.SET_CARDS, payload: {cards}
} as const)

export const createCards = (newCards: CardsType) => ({
    type: ActionTypes.ADD_CARDS, payload: {newCards}
} as const)


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