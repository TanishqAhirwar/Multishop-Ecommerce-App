import { useEffect } from "react"
import { Link, useLocation } from "react-router"

export default function Breadcrumb() {
  const pathname = useLocation().pathname

  useEffect(()=>{
  window.scrollTo(0, 0)
  },[])

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <Link className="breadcrumb-item text-dark" to="/">
              Home
            </Link>
            {/* <a className="breadcrumb-item text-dark" href="#">
              {pathname.replace("/","")}
            </a> */}
            <span className="breadcrumb-item active">{pathname.replace("/","")}</span>
          </nav>
        </div>
      </div>
    </div>

  )
}