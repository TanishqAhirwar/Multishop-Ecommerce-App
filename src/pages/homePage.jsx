import Carousal from "../components/carousal";
import Categories from "../components/categories";
import Featured from "../components/featured";
import Offer from "../components/offer";
import Product2 from "../components/product2";
import Products from "../components/products";
import Vendor from "../components/vendor";

export default function Home({allCategories}) {
    
    return (
        <>
            <Carousal />
            <Featured />
            <Categories allCategories={allCategories}/>
            <Products sectionTitle={"Recent Products"}/>
            <Offer />
            <Product2 sectionTitle={"Featured Products"}/>
            <Vendor />
        </>
    )
}