import {ActionTypes} from "../../constants/constants";
import {
    createCards,
    FilteredCardsType,
    GET_CARDS_ID,
    setCards,
    setCardsGrade,
    setFilteredCards
} from "../../actions/cards-actions";
import {CardsType} from "../../../../server/api";


const initialState = {
    cards: [] as CardsType[],
    cardsTotalCount: 3,
    filteredCards: {
        packName: "",
        maxGrade: 15,
        minGrade:0
    } as FilteredCardsType,
    page: 1,
    pageCount: 4,
    packUserId: "",
    loading: false,
    cardsPack_id: ""
}


export default function cardsReducer(state = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case ActionTypes.ADD_CARDS:
            return {
                ...state,
                ...action.payload
                }
        case ActionTypes.SET_CARDS:
            return {
                    ...state,
                    cards: action.payload.cards
            }
        case ActionTypes.GET_CARDS_ID:
            return {
                ...state,
                cardsPack_id: action.payload.cardsPack_id
            }
        case ActionTypes.SET_FILTERED_CARDS:
            return {
              ...state,
                filteredCards: action.payload.filteredCards
            }
        case ActionTypes.SET_CARDS_GRADE:
            return {
                ...state,
                cards: state.cards.map(
                    (c => c._id === action.payload._id
                        ? {...c, grade: action.payload.grade}
                        : c
                    ))
            }
        default:
            return state
    }
}


export type ActionsType =  ReturnType<typeof setCards>
    |  ReturnType<typeof createCards>
    |  ReturnType<typeof setFilteredCards>
    |  ReturnType<typeof setCardsGrade>
    |  ReturnType<typeof GET_CARDS_ID>


type InitialStateType = typeof initialState

