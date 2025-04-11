import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Categories from '../components/categories'
import Product2 from '../components/product2'

export default function CategoryPage({ allCategories }) {
    return (
        <>
            <Breadcrumb />
            <Categories allCategories={allCategories}/>
            <Product2 sectionTitle={"Recent Products"}/>
        </>
    )
}
