import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false)
    const isOpenSubmenu = (index) => {
        setActiveTab(index)
        setisToggleSubmenu(!isToggleSubmenu)
    }
    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className='icon'><MdDashboard /></span>
                                Trang chủ
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Sản Phẩm
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li>
                                    <Link to="#">Danh sách sản phẩm</Link>
                                </li>
                                <li>
                                    <Link to="#">Danh sách sản phẩm</Link>
                                </li>
                                <li>
                                    <Link to="#">Tải sản phẩm lên</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                                <span className='icon'><IoCart /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                                <span className='icon'><MdMessage /></span>
                                Tin nhắn
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                                <span className='icon'><IoIosNotifications /></span>
                                Thông báo
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
                                <span className='icon'><IoMdSettings /></span>
                                Cài đặt
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard /></span>
                            Trang chủ
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><FaProductHunt /></span>
                            Sản Phẩm
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoCart /></span>
                            Orders
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdMessage /></span>
                            Tin nhắn
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoIosNotifications /></span>
                            Thông báo
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoMdSettings /></span>
                            Cài đặt
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard /></span>
                            Trang chủ
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><FaProductHunt /></span>
                            Sản Phẩm
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><IoCart /></span>
                            Orders
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                </ul>
                <br />
                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant='contained'><IoLogOut/> Đăng xuất</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar