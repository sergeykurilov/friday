import {useDispatch} from "react-redux";
import {getPacksTC} from "../../redux/thunk/packs/packs-thunk";
import React from "react";

type PropsType = {
    numberOfPages: number
    currentPage: number
    page: number
    setPage: (page: number) => void
}


export const Pagination = (props: PropsType) => {
    console.log(props)
    let dispatch = useDispatch()

    const arrayOfPages: number[] = []
    for (let i = props.currentPage - 4; i <= props.currentPage + 4 && i < props.numberOfPages; i++) {
        if (i < 2)
            i = 2
        arrayOfPages.push(i)
    }
    const PageButton = ({value}: { value: number }) => {
     return <button
            className={`${value === props.page ? "bg-red-500 text-black" : "" } ${"text-sm ml-1 mr-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"}`}
            onClick={() => {
                props.setPage(value)
                dispatch(getPacksTC(props.page))
            }}
        >{value}
        </button>
    }
    return <div>
        <div
            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing {props.page} to {props.currentPage} of {props.numberOfPages} Entries
                        </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <PageButton value={1}/> {arrayOfPages[0] !== 2 ? "... " : ""}
                {arrayOfPages.map((value, i) => <> <PageButton key={i} value={value}/> </>)}
                {arrayOfPages[arrayOfPages.length - 1] !== props.numberOfPages - 1 ? " ... " : ""}
                <PageButton value={props.numberOfPages}/>
            </div>
        </div>

    </div>;
}
// От Антон Щёголев всем:  09:45 PM
// type PropsType = {
//     numberOfPages: number
//     currentPage: number
//     changePage: (page: number) => void
// }
//
// export const Pagination = (props: PropsType) => {
//     const arrayOfPages: number[] = []
//     for (let i = props.currentPage - 4; i <= props.currentPage + 4 && i < props.numberOfPages; i++) {
//         if (i < 2)
//             i = 2
//         arrayOfPages.push(i)
//     }
//     const PageButton = ({value}: { value: number }) => <SuperButton
//         red={value === props.currentPage}
//         onClick={() => {
//             props.changePage(value)
//         }}>{value} </SuperButton>
//     return <div>
//         <PageButton value={1}/> {arrayOfPages[0] !== 2 ? "... " : ""}
//         {arrayOfPages.map((value, i) => <PageButton key={i} value={value}/>)}
//         {arrayOfPages[arrayOfPages.length - 1] !== props.numberOfPages - 1 ? " ... " : ""}
//         <PageButton value={props.numberOfPages}/>
//     </div>;
// }
