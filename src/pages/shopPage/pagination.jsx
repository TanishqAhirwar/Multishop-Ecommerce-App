import React, { useCallback } from 'react'

export default function Pagination({ itemsPerPage, setStartPage, startPage, setCurrentPage, currentPage, TotalCount }) {

    const totalPage = Math.floor(TotalCount / itemsPerPage) + (TotalCount % itemsPerPage !== 0 ? 1 : 0)

    const Previous = useCallback(() => {
        setCurrentPage(currentPage - 1)
        setStartPage(startPage - itemsPerPage)
    }, [startPage, currentPage])

    const Next = useCallback(() => {
        setCurrentPage(currentPage + 1)
        setStartPage(startPage + itemsPerPage)
    }, [currentPage, startPage])

    const loadPage = useCallback((num) => {
        setCurrentPage(num)
        setStartPage(itemsPerPage * (num - 1))
    }, [])

    return (
        <>
            <div className="col-12">
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={currentPage > 1 ? "page-item" : "page-item disabled"}>
                            <button className="page-link" onClick={Previous} disabled={currentPage > 1 ? false : true}>
                                Previous
                            </button>
                        </li>
                        {new Array(totalPage)?.fill("page").map((item, indx) => (
                            <li className={currentPage === indx + 1 ? "page-item active" : "page-item"} key={indx}>
                                <button className="page-link" onClick={() => { loadPage(indx + 1) }}>
                                    {indx + 1}
                                </button>
                            </li>
                        ))}
                        <li className={(startPage * currentPage > TotalCount) || (TotalCount <= itemsPerPage) ? "page-item disabled" : "page-item"}>
                            <button className="page-link" onClick={Next} disabled={startPage * currentPage > TotalCount ? true : false}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
