import { use, useCallback, useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import Products from "../components/products";
import axiosClient from "../webservices/getway";
import { apiUrls } from "../webservices/apiurls";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function Detailpage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ProductData, setProductData] = useState({})

  const goToCart = useCallback((prodData)=>{
       dispatch(addToCart(prodData))
        navigate("/cart")
  },[])

  useEffect(() => {
    (async () => {

      try {
        let res = await axiosClient.get(`${apiUrls.GET_SINGLE_PRODUCT}/${id}`);
        console.log(res);
        if (res.data) {
          setProductData(res.data)
        }
      } catch (error) {
        toast.error(error?.response.data.message)
      }

    })()
  }, [id])

  return (
    <>
      <Breadcrumb />
      {/* Shop Detail Start */}
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner bg-light">
                {ProductData?.images?.map((item, indx) => (
                  <div className={!indx ? "carousel-item active" : "carousel-item"} key={indx}>
                    <img
                      height={500}
                      width={500}
                      style={{ aspectRatio: 4 / 3, objectFit: "contain" }}
                      src={item}
                      alt={item}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{ProductData?.title}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  {new Array(Math.floor(ProductData?.rating ? ProductData?.rating : 0))?.fill(0)?.map((ele, indx) => (
                    <small className="fas fa-star" key={indx} />
                  ))}
                  <small className="fas fa-star-half-alt" />
                  {new Array(Math.floor(4 - Math.floor(ProductData && ProductData?.rating ? ProductData?.rating : 4)))?.fill(0)?.map((ele, indx) => (
                    <small className="far fa-star" key={indx} />
                  ))}
                </div>
                <small className="pt-1">({ProductData?.reviews?.length} Reviews)</small>
              </div>
              <del>₹{ProductData.price}&nbsp; </del><span>{ProductData?.discountPercentage}% off</span>
              <h3 className="font-weight-semi-bold mb-4 text-success">₹{Math.floor(ProductData?.price - Math.floor(ProductData.price * ProductData?.discountPercentage / 100))}</h3>
              <p className="mb-4">
                {ProductData.shippingInformation}
              </p>
              <div className="d-flex mb-3">
                <strong className="text-success mr-3">{ProductData.availabilityStatus}</strong>
              </div>
              {ProductData?.size ? <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-2"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-3"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-4"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="size-5"
                      name="size"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                  </div>
                </form>
              </div> : ""}
              {ProductData.color ? <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-1"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-1">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-2"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-2">
                      White
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-3"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-3">
                      Red
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-4"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-4">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-5"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-5">
                      Green
                    </label>
                  </div>
                </form>
              </div> : null}
              <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity mr-3" style={{ width: 130 }}>
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    defaultValue={ProductData.minimumOrderQuantity}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3" onClick={()=>{goToCart(ProductData)}}>
                  <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Minimum Order Quantity: <span className="text-danger">{ProductData?.minimumOrderQuantity}</span></strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a
                  className="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Description
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  Information
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                >
                  Reviews ({ProductData?.reviews?.length})
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>
                    {ProductData.description}
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>
                    {ProductData.description}
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          <strong>Brand :</strong>{ProductData.brand}
                        </li>
                        <li className="list-group-item px-0">
                          <strong>Category :</strong>{ProductData.category}
                        </li>
                        <li className="list-group-item px-0">
                          <strong>Dimensions : </strong>Height-&nbsp;{ProductData.dimensions?.height} Width- &nbsp;{ProductData.dimensions?.width} Depth- &nbsp;{ProductData.dimensions?.depth}
                        </li>
                        <li className="list-group-item px-0">
                          <strong>Return Policy : </strong>{ProductData.returnPolicy}
                        </li>
                        <li className="list-group-item px-0">
                          <strong>Weight : </strong>{ProductData.weight}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">{ProductData?.reviews?.length} review for {ProductData.title}</h4>
                      {ProductData?.reviews?.map((item, indx) => (
                        <div className="media mb-4" key={indx}>
                          <img
                            src="/img/user.jpg"
                            alt="Image"
                            className="img-fluid mr-3 mt-1"
                            style={{ width: 45 }}
                          />
                          <div className="media-body">
                            <h6>
                              {item.reviewerName} <small> - {item.date}</small>
                            </h6>
                            <div className="text-primary mb-2">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              {item.comment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>
                        Your email address will not be published. Required fields
                        are marked *
                      </small>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <form>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea
                            id="message"
                            cols={30}
                            rows={5}
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="submit"
                            defaultValue="Leave Your Review"
                            className="btn btn-primary px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Detail End */}
      <Products sectionTitle={"Related Products"} />
    </>)
}