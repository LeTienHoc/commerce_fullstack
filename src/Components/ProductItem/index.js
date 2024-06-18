import React, { useContext, useState } from 'react'
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import { MyContext } from '../../App';

const ProductItem = (props) => {
    const context = useContext(MyContext)
    const viewProductDetails = (id) => {
        context.setisOpenProductModel(true)
    }
    return (
        <>
            <div className={`productItem ${props.itemView}`}>
                <div className="imgWrapper">
                    <img src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg" className="w-100" />
                    <span className="badge badge-primary">10%</span>
                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)}><AiOutlineFullscreen /></Button>
                        <Button><IoIosHeartEmpty style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h4>Bim bim Carmail</h4>
                    <span className="text-success d-block">Còn hàng</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">50.000 đ</span>
                        <span className="netPrice text-danger ml-2">40.000 đ</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProductItem