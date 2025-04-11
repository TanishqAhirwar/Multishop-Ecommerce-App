import { Outlet } from "react-router";
import Footer from "../components/footer"
import Topbar from "../components/header"
import Navbar from "../components/navbar"
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { apiUrls } from "../webservices/apiurls";
import axiosClient from "../webservices/getway";
import { useDispatch } from "react-redux";

function PublicRoute({allCategories}) {
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            let token = localStorage.getItem("userToken")
            if (token) {
                try {
                    let res = await axiosClient.get(apiUrls.ME, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    dispatch({type:"user/loginUserdata",payload : res.data})
                    
                } catch (error) {
                    toast.error(error?.response.data.message)
                }
            }
        })()
    }, [])


    return (
        <>
            <Topbar />
            <Navbar allCategories={allCategories}/>
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default PublicRoute;