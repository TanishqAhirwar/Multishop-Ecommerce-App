import React, { useState } from 'react'
import Pagination from './pagination'
import Breadcrumb from '../../components/breadcrumb'
import Filters from './filters'
import ProductCard from '../../components/productCard'
import { TailSpin } from 'react-loader-spinner'

export default function ShopPage({ ProductData }) {

    const [currentPage, setCurrentPage] = useState(1)
    const [startPage, setStartPage] = useState(0)
    const [itemsPerPage, setItemPerPage] = useState(10)


    return (
        <>
            <Breadcrumb />

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div class="col-lg-3 col-md-4">

                        {/* filter Start */}
                        <Filters />
                        {/* filter End */}

                    </div>
                    {/* Shop Product Start */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button className="btn btn-sm btn-light ml-2">
                                            <i className="fa fa-bars" />
                                        </button>
                                        &nbsp;
                                        <button className="btn btn-sm btn-light active">
                                            <i className="fa fa-th-large" />
                                        </button>
                                    </div>

                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Sorting
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Latest
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Popularity
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Best Rating
                                                </a>
                                            </div>
                                        </div>
                                        <div className="btn-group ml-2">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Showing
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className={itemsPerPage === 10 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemPerPage(10) }}>
                                                    10
                                                </button>
                                                <button className={itemsPerPage === 15 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemPerPage(15) }}>
                                                    15
                                                </button>
                                                <button className={itemsPerPage === 20 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemPerPage(20) }}>
                                                    20
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {!ProductData?.length ? <TailSpin
                                visible={true}
                                height="80"
                                width="80"
                                color="#FFD333"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{ margin: "20%", marginLeft: "40%" }}
                                wrapperClass="d-flex justify-content-center align-items-center"
                            /> : null}

                            {ProductData && ProductData.slice(startPage, itemsPerPage * currentPage)?.map((item, index) => (
                                <ProductCard Data={item} key={index} />
                            ))}

                            {/* pagination start */}
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                startPage={startPage}
                                setStartPage={setStartPage}
                                itemsPerPage={itemsPerPage}
                                TotalCount={ProductData && ProductData.length}
                            />
                            {/* pagination End */}

                        </div>
                    </div>
                    {/* Shop Product End */}
                </div>
            </div>
        </>
    )
}
