import { useSelector } from "react-redux";
import ProductCard from "./productCard";
export default function Product2({ sectionTitle }) {

  const ProductData = useSelector(store => store.products?.Products)

  return (

    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">{sectionTitle}</span>
        </h2>
        <div className="row px-xl-5">
          {ProductData && ProductData.map((item, indx) => (
            <ProductCard Data={item} key={indx} className={"col-lg-3 col-md-4 col-sm-6"} />
          ))}
        </div>
      </div>
      {/* Products End */}
    </>


  )
}