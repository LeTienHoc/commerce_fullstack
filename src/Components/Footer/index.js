import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Sản phẩm mới mỗi ngày</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Miễn phí vận chuyển cho đơn hàng từ 1tr</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Giảm giá lớn hằng ngày</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><MdOutlinePriceChange/></span>
                        <span className="ml-2">Giá cả tốt nhất trên thị trường</span>
                    </div>
                </div>
                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>Rau quả</h5>
                        <ul>
                            <li><Link to="#">Rau sạch</Link></li>
                            <li><Link to="#">Thảo dược & Gia vị</Link></li>
                            <li><Link to="#">Trái cây tươi</Link></li>
                            <li><Link to="#">Trái cây & Rau lạ</Link></li>
                            <li><Link to="#">Sản phẩm đóng gói</Link></li>
                            <li><Link to="#">Khay tiệc</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Rau quả</h5>
                        <ul>
                            <li><Link to="#">Rau sạch</Link></li>
                            <li><Link to="#">Thảo dược & Gia vị</Link></li>
                            <li><Link to="#">Trái cây tươi</Link></li>
                            <li><Link to="#">Trái cây & Rau lạ</Link></li>
                            <li><Link to="#">Sản phẩm đóng gói</Link></li>
                            <li><Link to="#">Khay tiệc</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Rau quả</h5>
                        <ul>
                            <li><Link to="#">Rau sạch</Link></li>
                            <li><Link to="#">Thảo dược & Gia vị</Link></li>
                            <li><Link to="#">Trái cây tươi</Link></li>
                            <li><Link to="#">Trái cây & Rau lạ</Link></li>
                            <li><Link to="#">Sản phẩm đóng gói</Link></li>
                            <li><Link to="#">Khay tiệc</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Rau quả</h5>
                        <ul>
                            <li><Link to="#">Rau sạch</Link></li>
                            <li><Link to="#">Thảo dược & Gia vị</Link></li>
                            <li><Link to="#">Trái cây tươi</Link></li>
                            <li><Link to="#">Trái cây & Rau lạ</Link></li>
                            <li><Link to="#">Sản phẩm đóng gói</Link></li>
                            <li><Link to="#">Khay tiệc</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Rau quả</h5>
                        <ul>
                            <li><Link to="#">Rau sạch</Link></li>
                            <li><Link to="#">Thảo dược & Gia vị</Link></li>
                            <li><Link to="#">Trái cây tươi</Link></li>
                            <li><Link to="#">Trái cây & Rau lạ</Link></li>
                            <li><Link to="#">Sản phẩm đóng gói</Link></li>
                            <li><Link to="#">Khay tiệc</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ml-auto mb-0">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebookF/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer