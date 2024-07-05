import React, { useState } from 'react'
import ProductZoom from '../../Components/ProductZoom'
import { Button, Rating } from '@mui/material'
import QuanntityBox from '../../Components/QuantityBox'
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { IoCart } from "react-icons/io5";
import RelatedProducts from './RelatedProducts';
const ProductDetails = () => {
    const [activeName, setactiveName] = useState(0)
    const isActive = (index) => {
        setactiveName(index)
    }
    const [activeTabs, setActiveTabs] = useState(0);
    return (
        <>
            <section className='productDetails section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 pl-5'>
                            <ProductZoom />
                        </div>
                        <div className='col-md-7 pl-5 pr-5'>
                            <h2 className='hd text-capitalize'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h2>
                            <ul className='list list-inline d-flex align-items-center'>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <span className='text-light mr-2'>Nhãn hiệu</span>
                                        <span>Học</span>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className='d-flex align-items-center'>
                                        <Rating name='read-only' value={4.5} precision={0.5} size='small' readOnly />
                                        <span className='text-light cursor'>1 Đánh giá</span>
                                    </div>
                                </li>
                            </ul>
                            <div className='d-flex info mb-3'>
                                <span className='oldPrice'>đ 50.000</span>
                                <span className='netPrice text-danger ml-2'>đ 40.000</span>
                            </div>
                            <span className='badge badge-success'>Còn hàng</span>
                            <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                                Class aptent taciti sociosqu ad litora torquent</p>
                            <div className='productSize d-flex align-items-center'>
                                <span>Kích cỡ / Khối lượng:</span>
                                <ul className='list list-inline mb-0 pl-4'>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeName === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeName === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeName === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200g</a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a className={`tag ${activeName === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>300g</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='d-flex align-items-center mt-3'>
                                <QuanntityBox />
                                <Button className='btn-blue btn-lg bg-red btn-big btn-round'><IoCart /> &nbsp;Thêm vào giỏ hàng</Button>
                                <Tooltip title="Thêm vào danh sách yêu thích" placement="top">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4' variant='outlined'><IoIosHeartEmpty /></Button>
                                </Tooltip>
                                <Tooltip title="So sánh" placement="top">
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-2' variant='outlined'><MdCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 0 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(0)

                                        }}
                                    >Mô tả</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(1)

                                        }}
                                    >Thông tin bổ sung</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`}
                                        onClick={() => {
                                            setActiveTabs(2)
                                        }}
                                    >Đánh giá (3)</Button>
                                </li>

                            </ul>


                            <br />

                            {
                                activeTabs === 0 &&
                                <div className='tabContent'>
                                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                                         Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                                </div>

                            }


                            {
                                activeTabs === 1 &&

                                <div className='tabContent'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr class="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            }



                            {
                                activeTabs === 2 &&

                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h3>Customer questions & answers</h3>
                                            <br />
                                            <div className='card p-4 reviewsCard flex-row'>
                                                <div className='image'>
                                                    <div className='rounded-circle'>
                                                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                                    </div>
                                                    <span className='text-g d-block text-center font-weight-bold'>Học Lê</span>
                                                </div>
                                                <div className='info pl-5'>
                                                    <div className='d-flex align-items-center w-100'>
                                                        <h5 className='text-light'>17/09/2001</h5>
                                                        <div className='ml-auto'>
                                                            <Rating name="half-rating-read"
                                                                value={3.5} precision={0.5} readOnly size='small'/>
                                                        </div>
                                                    </div>
                                                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                                                         Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                                                </div>
                                            </div>
                                            <br className='res-hide' />
                                            <br className='res-hide' />
                                            <form className='reviewForm'>
                                                <h4>Thêm đánh giá</h4>
                                                <div className='form-group'>
                                                    <textarea className='form-control' placeholder='Viết đánh giá...'
                                                        name="review"></textarea>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type='text' className='form-control' placeholder='Họ và tên' name='userName'/>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <Rating name="rating" value={4.5} precision={0.5}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                                <br />
                                                <div className='form-group'>
                                                    <Button type='submit' className='btn-blue btn-lg btn-big btn-round'>Gửi</Button>
                                                </div>

                                            </form>

                                        </div>




                                        {/* <div className='col-md-4 pl-5 reviewBox'>
                                            <h4>Customer reviews</h4>

                                            <div className='d-flex align-items-center mt-2'>
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                <strong className='ml-3'>4.8 out of 5</strong>
                                            </div>

                                            <br />




                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>5 sao</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '75%', height: '20px' }}>75%</div>
                                                </div>
                                            </div>


                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>4 sao</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '50%', height: '20px' }}>50%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>3 sao</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '55%', height: '20px' }}>55%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>2 sao</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='mr-3'>1 sao</span>
                                                <div class="progress" style={{ width: '78%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '25%', height: '20px' }}>25%</div>
                                                </div>
                                            </div>




                                        </div> */}




                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <br />
                    <RelatedProducts title="Sản phẩm tương tự"/>
                    <RelatedProducts title="Sản phẩm được xem gần đây"/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails