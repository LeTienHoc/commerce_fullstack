import { useContext} from 'react'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import { Rating } from '@mui/material';
import QuanntityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';


const ProductModal = (props) => {
    const context = useContext(MyContext)
    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => context.setisOpenProductModel(false)}>
                <Button className='close_' onClick={() => context.setisOpenProductModel(false)}><IoMdClose /></Button>
                <h4 className='mb-1 font-weight-bold'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Nhãn hiệu:</span>
                        <span className='ml-2'><b>Học</b></span>
                    </div>
                    <Rating name='read-only' value={5} readOnly size='small' precision={0.5} />
                </div>
                <hr></hr>
                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <ProductZoom/>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>50.000đ</span>
                            <span className='netPrice text-danger lg'>40.000đ</span>
                        </div>
                        <span className='badge bg-success'>Còn hàng</span>
                        <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        <div className='d-flex align-items-center'>
                            <QuanntityBox />
                            <Button className='btn-blue btn-lg btn-big btn-round bg-red ml-3'>Thêm vào giỏ hàng</Button>
                        </div>
                        <div className='d-flex align-items-center mt-4 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty /> &nbsp; Yêu thích</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'><MdCompareArrows /> &nbsp; So sánh</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModal