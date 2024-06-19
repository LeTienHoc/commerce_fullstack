import { Button, Rating } from "@mui/material"
import { Link } from "react-router-dom"
import QuanntityBox from "../../Components/QuantityBox"
import { IoClose } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
    return (
        <>
            <section className='section cartPage'>
                <div className='container'>
                    <h2 className='hd mb-1'>Giỏ hàng</h2>
                    <p>Bạn có <b className="text-red">2</b> sản phẩm trong giỏ hàng</p>
                    <div className='row'>
                        <div className='col-md-9 pr-5'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '35%' }}>Sản phẩm</th>
                                            <th style={{ width: '15%' }}>Giá</th>
                                            <th style={{ width: '25%' }}>Số lượng</th>
                                            <th style={{ width: '15%' }}>Tổng</th>
                                            <th style={{ width: '10%' }}>Xoá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '35%' }}>
                                                <Link to="/product/1">
                                                    <div className='d-flex align-items-center cartItemimgWrapper'>
                                                        <div className='imgWrapper'>
                                                            <img
                                                                className='w-100'
                                                                src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-768x691.jpg' />
                                                        </div>
                                                        <div className='info px-3'>
                                                            <h6>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                            <Rating name="read-only" value={4.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td style={{ width: '15%' }}>50000đ</td>
                                            <td style={{ width: '25%' }}><QuanntityBox /></td>
                                            <td style={{ width: '15%' }}>100000</td>
                                            <td style={{ width: '10%' }}><span className="remove"><IoClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '35%' }}>
                                                <Link to="/product/1">
                                                    <div className='d-flex align-items-center cartItemimgWrapper'>
                                                        <div className='imgWrapper'>
                                                            <img
                                                                className='w-100'
                                                                src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-768x691.jpg' />
                                                        </div>
                                                        <div className='info px-3'>
                                                            <h6>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h6>
                                                            <Rating name="read-only" value={4.5} size="small" readOnly />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td style={{ width: '15%' }}>50000đ</td>
                                            <td style={{ width: '25%' }}><QuanntityBox /></td>
                                            <td style={{ width: '15%' }}>100000</td>
                                            <td style={{ width: '10%' }}><span className="remove"><IoClose /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="card border p-3 cartDetails">
                                <h4>Tổng giỏ hàng</h4>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Tổng</span>
                                    <span className="ml-auto text-red font-weight-bold">100.000 VNĐ</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Phí vận chuyển</span>
                                    <span className="ml-auto"><b>Miễn phí</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Vận chuyển</span>
                                    <span className="ml-auto"><b>Phú Yên</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Tổng thanh toán</span>
                                    <span className="ml-auto text-red font-weight-bold">100.000 VNĐ</span>
                                </div>
                                <Button className="btn-blue bg-red btn-lg btn-big"><IoCartSharp/>Thanh toán</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart