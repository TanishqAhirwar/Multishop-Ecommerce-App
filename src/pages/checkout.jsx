import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { FcFullTrash } from "react-icons/fc";
import { toast } from 'react-toastify';

export default function Checkout() {
    const { User } = useSelector(store => store.user);
    const cartData = useSelector(store => store.cart.value);
    const [orderData, setOrderData] = useState(cartData);

    const totalPrice = useMemo(() => {
        return orderData && orderData.reduce((pre, curr) => pre + curr.price * curr.quantity, 0)
    }, [orderData]);

    const Remove = useCallback((id) => {
        setOrderData(orderData.filter((item) => item.id !== id))
        toast.success("Item Removed From Order")
    }, [orderData])

    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Billing Address</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder="John" defaultValue={User?.firstName} />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="text" placeholder="Doe" defaultValue={User?.lastName} />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="example@email.com"
                                        defaultValue={User?.email}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Mobile No</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+123 456 789"
                                        defaultValue={User?.phone}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 1</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="123 Street"
                                        defaultValue={User?.address?.address}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 2</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="123 Street"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Country</label>
                                    <select className="custom-select" >
                                        <option selected={User?.address?.country}>United States</option>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>City</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="New York"
                                        defaultValue={User?.address?.city}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>State</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="New York"
                                        defaultValue={User?.address?.state}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>ZIP Code</label>
                                    <input className="form-control" type="text" placeholder={123} defaultValue={User?.address?.postalCode} />
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="newaccount"
                                        />
                                        <label className="custom-control-label" htmlFor="newaccount">
                                            Create an account
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="shipto"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="shipto"
                                            data-toggle="collapse"
                                            data-target="#shipping-address"
                                        >
                                            Ship to different address
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse mb-5" id="shipping-address">
                            <h5 className="section-title position-relative text-uppercase mb-3">
                                <span className="bg-secondary pr-3">Shipping Address</span>
                            </h5>
                            <div className="bg-light p-30">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="John" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text" placeholder="Doe" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Mobile No</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="+123 456 789"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 1</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 2</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Country</label>
                                        <select className="custom-select">
                                            <option selected="">United States</option>
                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>State</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>ZIP Code</label>
                                        <input className="form-control" type="text" placeholder={123} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Order Total</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom">
                                <div className='d-flex justify-content-between'>
                                    <h6 className="mb-3">Products</h6>
                                    <h6 className="mb-3">Quantity</h6>
                                    <h6 className="mb-3">Total Price</h6>
                                </div>
                                {orderData && orderData.map((ele, indx) => (
                                    <div className="d-flex justify-content-between mb-3" style={{ gap: "4px" }} key={indx}>
                                        <p className='pt-4'>{indx + 1}. &nbsp;{ele.title}</p>
                                        <p className='pt-4'>{ele.quantity}</p>
                                        <div className='d-flex align-items-center' style={{ gap: "4px" }}>
                                            <p className='pt-4'>₹{ele.price * ele.quantity}</p>
                                            <button className='btn' onClick={() => { Remove(ele.id) }}>
                                                <FcFullTrash size={30} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-bottom pt-3 pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>₹{totalPrice}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">₹0</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>₹{totalPrice}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h5 className="section-title position-relative text-uppercase mb-3">
                                <span className="bg-secondary pr-3">Payment</span>
                            </h5>
                            <div className="bg-light p-30">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="paypal"
                                        />
                                        <label className="custom-control-label" htmlFor="paypal">
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="directcheck"
                                        />
                                        <label className="custom-control-label" htmlFor="directcheck">
                                            Direct Check
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="banktransfer"
                                        />
                                        <label className="custom-control-label" htmlFor="banktransfer">
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold py-3">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
