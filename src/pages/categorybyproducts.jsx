import React, { useEffect, useState } from 'react'
import ShopPage from './shopPage/main'
import { useParams } from 'react-router'
import axiosClient from '../webservices/getway'
import { apiUrls } from '../webservices/apiurls'
import { toast } from 'react-toastify'

export default function Categorybyproducts() {
    const {slug} = useParams();
    const [ProductData, setProductData] = useState([])

    useEffect(() => {
        (async () => {

            try {
                let res = await axiosClient.get(`${apiUrls.GET_PRODUCT_BY_CATEGORY}/${slug}`);
                if (res.data.products.length) {
                    setProductData(res.data.products)
                }
            } catch (error) {
                toast.error(error?.response.data.message)
            }

        })()
    }, [slug])


    return (
        <>
            <ShopPage ProductData={ProductData}/>
        </>
    )
}
