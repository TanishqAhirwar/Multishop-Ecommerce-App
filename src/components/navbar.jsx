import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

export default function Navbar({ allCategories }) {
    const cartData = useSelector(store => store.cart.value)
    const pathname = useLocation().pathname
    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={{ height: 65, padding: "0 30px" }}
                        >
                            <h6 className="text-dark m-0">
                                <i className="fa fa-bars mr-2" />
                                Categories
                            </h6>
                            <i className="fa fa-angle-down text-dark" />
                        </a>
                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            id="navbar-vertical"
                            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                        >
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Dresses <i className="fa fa-angle-right float-right mt-1" />
                                    </a>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <a href="" className="dropdown-item">
                                            Men's Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Women's Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Baby's Dresses
                                        </a>
                                    </div>
                                </div>

                                {allCategories && allCategories.map((item, indx) => (
                                    <Link to={`/categories/${item.slug}`} className="nav-item nav-link" key={indx}>
                                        {item.name}
                                    </Link>
                                ))}

                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">
                                    Multi
                                </span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                    Shop
                                </span>
                            </Link>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapses navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className={pathname==="/"?"nav-item nav-link active":"nav-item nav-link"}>
                                        Home
                                    </Link>
                                    <Link to="/products" className={pathname.includes("/products")?"nav-item nav-link active":"nav-item nav-link"}>
                                        Shop
                                    </Link>
                                    <Link to="/categories" className={pathname.includes("/categories")?"nav-item nav-link active":"nav-item nav-link"}>
                                        Categories
                                    </Link>
                                    {/* <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages <i className="fa fa-angle-down mt-1" />
                                        </a>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <Link to="/cart" className="dropdown-item">
                                                Shopping Cart
                                            </Link>
                                            <Link to="/checkout" className="dropdown-item">
                                                Checkout
                                            </Link>
                                        </div>
                                    </div> */}
                                    <Link to="/contact" className={pathname.includes("/contact")?"nav-item nav-link active":"nav-item nav-link"}>
                                        Contact
                                    </Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link to="/cart" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary" />
                                        {cartData.length && <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: 2 }}
                                        >
                                            {cartData.length}
                                        </span>}
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}