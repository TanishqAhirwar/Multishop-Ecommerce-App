import { Route, Routes } from "react-router"
import PublicRoute from "./routes/publicRoute"
import Home from "./pages/homePage"
import ContactPage from "./pages/ContactPage"
import ShopPage from "./pages/shopPage/main"
import Detailpage from "./pages/Detail"
import CartPage from "./pages/cartPage"
import Checkout from "./pages/checkout"
import Login from "./pages/login"
import ProtectedRoute from "./routes/protectedRoute"
import CategoryPage from "./pages/categoryPage"
import { useEffect, useState } from "react"
import axiosClient from "./webservices/getway"
import { apiUrls } from "./webservices/apiurls"
import { toast } from "react-toastify"
import Layout from "./components/layout"
import Categorybyproducts from "./pages/categorybyproducts"
import { useDispatch } from "react-redux"
import UserProfle from "./pages/profile/userProfle"
import Signup from "./pages/signup"
import Orders from "./pages/orders"

function App() {

  const dispatch = useDispatch()

  const [ProductData, setProductData] = useState([])
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    (async () => {

      try {
        let res = await axiosClient.get(apiUrls.GET_ALL_PRODUCTS);
        if (res.data.products.length) {
          setProductData(res.data.products)
          dispatch({ type: "products/fetchFromApi", payload: res.data.products })
        }
      } catch (error) {
        toast.error(error?.response.data.message)
      }

    })()
  }, [])

  useEffect(() => {
    (async () => {

      try {
        let res = await axiosClient.get(apiUrls.GET_ALL_PRODUCTS_CATEGORY);
        if (res.data.length) {
          setAllCategories(res.data)
        }
      } catch (error) {
        toast.error(error?.response.data.message)
      }

    })()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute allCategories={allCategories} />}>

          <Route index element={<Home allCategories={allCategories} />} />
          <Route path="contact" element={<ContactPage />} />


          <Route path="products" element={<Layout />}>
            <Route index element={<ShopPage ProductData={ProductData} />} />
            <Route path=":id" element={<Detailpage />} />
          </Route>

          <Route path="categories" element={<Layout />} >
            <Route index element={<CategoryPage allCategories={allCategories} />} />
            <Route path=":slug" element={<Categorybyproducts />} />
          </Route>

          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />

          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="my-profile" element={<UserProfle />} />
            <Route path="orders" element={<Orders />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
