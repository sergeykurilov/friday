import axios from "axios";
import {RegistrationRequestType, RegistrationResponseType} from "../ui/redux/thunk/registration/registration-thunk";
import {LoginRequestType, LoginResponseType} from "../ui/redux/thunk/login/login-thunk";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://neko-back.herokuapp.com/2.0/",
});

///Обьединить в один инстанс как в тудулисте

export const registerAPI = {
    registerUsers(regData: RegistrationRequestType) {
        return instance.post<RegistrationResponseType>(`auth/register`, {...regData})
    }
};
export const loginAPI = {
    loginUser(loginData: LoginRequestType) {
        return instance.post<LoginResponseType>(`auth/login`, {...loginData}).then((res: any) => res.data)
    },
    me() {
        return instance
            .post<any>(`auth/me`, {})
            .then((response) => {
                console.log(response)
                return response.data;
            });
    },
    meDelete() {
        return instance
            .delete<any>(`auth/me`, {})
            .then((response) => {
                return response.data;
            });
    }
}

export const packsAPI = {
    // async getCards(packUser_id: string) {
    async getCards(page: number | undefined, pageCount: number | undefined) {
        console.log(pageCount)
        const response = await instance.get<IResponsePacksType>(
            `/cards/pack?`
            + `pageCount=${pageCount}`
            + `&page=${page}`
            // + (packUser_id ? `&user_id=${packUser_id}` : "")
            // + `&packName=o`
            // + `&min=2`
            // + `&max=${pageCount}`
            // + `&sortPacks=0updated`
        );
        return response.data;
    },
    addPack: async (name: string) => {
        const response = await instance.post<any>("/cards/pack", {
            cardsPack: {
                name: name,
            }
        });

        return response.data;
    },
    setCard(packData: ICardsPack) {
        return instance.post<ICardsPack>(`cards/pack`, {...packData}).then((response) => {
            return response.data
        })
    },
    deleteCards(_id: string) {
        return instance.delete(`cards/pack/?id=${_id}`)
    },
    updateCards(_id: string, name: string) {
        return instance.put(`cards/pack`, {cardsPack: {_id, name}})
    }
}

export const cardsAPI = {
    getCards() {
        return instance.get<IResponsePacksType>(`cards/pack`).then((response) => {
            return response.data
        })
    },
    setCard(packData: ICardsPack) {
        return instance.post<ICardsPack>(`cards/pack`, {...packData}).then((response) => {
            return response.data
        })
    },
    deleteCards(_id: string) {
        return instance.delete(`cards/pack/?id=${_id}`)
    },
    updateCards(_id: string, name: string) {
        return instance.put(`cards/pack`, {cardsPack: {_id, name}})
    }
}


type deckCoverType = "url" | "base64"

export interface ICardsPack {
    name: string // если не отправить будет таким
    path: string // если не отправить будет такой
    grade: number // не обязателен
    shots: number // не обязателен
    rating: number // не обязателен
    deckCover: deckCoverType // не обязателен
    private: boolean // если не отправить будет такой
    type: string // если не отправить будет таким
}


export type CardPacks = [
    {
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
    },
];

export interface IResponsePacksType {
    cardPacks: CardPacks
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
    loading: boolean
}


export const CardsAPI = {
    async getCards(cardsPack_id: string) {
        const response = await instance.get<getCardsResponseType>(`/cards/card?`
            + `cardsPack_id=${cardsPack_id}`
            + "&pageCount=1000"
            // + "&cardQuestion=ne"
            // + "&min=2"
            // + "&max=3"
        )
        return response
    },
    // createCards(cardsPack: CardsType,cardsPack_id: string) {
    //     return instance.post(`cards/card/`, {...cardsPack, cardsPack_id: cardsPack.cardsPack_id})
    //
    // },
    createCards: async (cardsPack_id: string,question: string,answer: string) => {
        const response = await instance.post<any>("/cards/card", {
            card: {
                cardsPack_id,
                answer: answer,
                question: question,
                grade: Math.random() * 5,
                questionImg: "some img",
            },
        });

        return response.data;
    },
    deleteCards(cardsPack_id: string) {
        return instance.delete<deleteCardsResponseType>(`cards/card/?id=${cardsPack_id}`)
    },
    updateCards(card: CardsType) {
        return instance.put<updatedCardResponseType>(`cards/card`, {card})
    }
}

type getCardsResponseType = {
    cards: CardsType[],
    page: number,
    pageCount: number,
    cardsTotalCount: number,
    packUserId: string,
}

type deleteCardsResponseType = {
    deletedCard: {
        cardsPack_id: string
    }
}

export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

type updatedCardResponseType = {
    card: {
        cardsPack_id: string
    }
}
