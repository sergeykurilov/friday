import React from 'react';

const Pagination = (props:any) => {
    console.log(">>>>>>>>>>>>>>>")
    console.log(props.cardsPack)
    return (
        <div>
            <div
                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing {props.cardsPack.page} to {props.cardsPack.pageCount} of {props.cardsPack.cardPacksTotalCount} Entries
                        </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                    </button>
                    <button
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;