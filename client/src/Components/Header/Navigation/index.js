import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center'
                                onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMdMenu /></span>
                                <span className='text' style={{ fontSize: "13px" }}>Tất cả sản phẩm</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to={'/'}><Button>Nam <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link to={'/'}><Button>Nam</Button></Link>
                                            <Link to={'/'}><Button>Nữ</Button></Link>
                                            <Link to={'/'}><Button>Áo thun</Button></Link>
                                            <Link to={'/'}><Button>Áo polo</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to={'/'}><Button>Nữ</Button></Link></li>
                                    <li><Link to={'/'}><Button>Áo thun</Button></Link></li>
                                    <li><Link to={'/'}><Button>Áo polo</Button></Link></li>
                                    <li><Link to={'/'}><Button>Quần</Button></Link></li>
                                </ul>




                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Trang chủ</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Thời trang</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to={'/'}><Button>Nam</Button></Link>
                                    <Link to={'/'}><Button>Nữ</Button></Link>
                                    <Link to={'/'}><Button>Áo thun</Button></Link>
                                    <Link to={'/'}><Button>Áo polo</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Điện tử</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Bánh mì</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Tạp hoá</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Di động</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Blog</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={'/'}><Button>Liên hệ</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation