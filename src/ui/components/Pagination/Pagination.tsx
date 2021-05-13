
type PropsType = {
    numberOfPages: number
    currentPage: number
    changePage: (page: number) => void
}

export const Pagination = (props: PropsType) => {
    const arrayOfPages: number[] = []
    for (let i = props.currentPage - 4; i <= props.currentPage + 4 && i < props.numberOfPages; i++) {
        if (i < 2)
            i = 2
        arrayOfPages.push(i)
    }
    const PageButton = ({value}: { value: number }) =>
        <button
            onClick={() => {
                props.changePage(value)
            }}
        >{value}
        </button>
    return <div>
        <PageButton value={1}/> {arrayOfPages[0] !== 2 ? "... " : ""}
        {arrayOfPages.map((value, i) => <> <PageButton key={i} value={value}/> </>)}
        {arrayOfPages[arrayOfPages.length - 1] !== props.numberOfPages - 1 ? " ... " : ""}
        <PageButton value={props.numberOfPages}/>
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
