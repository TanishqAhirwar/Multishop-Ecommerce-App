import { Link } from "react-router";

export default function Categories({ allCategories }) {
    return (
        <>
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Categories</span>
                </h2>
                <div className="row px-xl-5 pb-3">

                    {allCategories && allCategories.map((item,indx) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={indx}>
                            <Link className="text-decoration-none" to={`/categories/${item.slug}`}>
                                <div className="cat-item d-flex align-items-center mb-4">
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        {/* <img className="img-fluid" src="img/cat-1.jpg" alt="" /> */}
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>{item.name}</h6>
                                        {/* <small className="text-body">100 Products</small> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}