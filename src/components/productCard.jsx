import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { addToCart } from '../redux/slices/cartSlice'

export default function ProductCard({ Data, className }) {

    const dispatch = useDispatch()

    const Cart = useCallback((Data) => {
        dispatch(addToCart(Data))
    }, [dispatch])

    return (
        <>
            <div className={`${className ? className : "col-lg-4 col-md-6 col-sm-6"} pb-1`}>
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" style={{ objectFit: "contain", aspectRatio: 3 / 2 }} src={Data.thumbnail} alt={Data.title} loading='lazy' />
                        {/* <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href="">
                                <i className="fa fa-shopping-cart" />
                            </a>
                            <a className="btn btn-outline-dark btn-square" href="">
                                <i className="far fa-heart" />
                            </a>
                            <a className="btn btn-outline-dark btn-square" href="">
                                <i className="fa fa-sync-alt" />
                            </a>
                            <a className="btn btn-outline-dark btn-square" href="">
                                <i className="fa fa-search" />
                            </a>
                        </div> */}
                    </div>
                    <div className="text-center py-4">
                        <p>
                            <Link className="h6 text-decoration-none text-truncate text-wrap" to={`/products/${Data.id}`}>
                                {Data.title}
                            </Link>
                        </p>
                        <div className=" mt-2">
                            <h6 className="text-muted ml-2">
                                <del>₹{Data.price}&nbsp; </del><span>{Data?.discountPercentage}% off</span>
                            </h6>
                            <h5 className='text-success'> ₹{Math.floor(Data?.price - Math.floor(Data.price * Data?.discountPercentage / 100))}</h5>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small className="fa fa-star text-primary mr-1" />
                            <small>(99)</small>
                        </div> */}
                        <button className="btn btn-primary px-3 mb-1 mt-2" onClick={() => { Cart(Data) }}>
                            <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
