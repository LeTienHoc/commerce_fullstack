import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { Button } from '@mui/material'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import avatar from '../../assets/images/z5522039179536_8da8e01c3f6ebeb58f4d42dd71efe223.jpg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';
import Divider from '@mui/material/Divider';



const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isOpenNotify, setisOpenNotify] = useState(false);
    const openNotify = Boolean(isOpenNotify);
    const handleClickNotify = (event) => {
        setisOpenNotify(event.currentTarget);
    };
    const handleCloseNotify = () => {
        setisOpenNotify(false);
    };
    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center w-100'>
                        <div className='col-sm-3 part1'>
                            <Link>
                                <img src={logo} className='logo' />
                            </Link>
                        </div>
                        <div className='col-sm-3 d-flex align-items-center part2'>
                            <Button className='rounded-circle mr-3'>
                                <MdOutlineMenuOpen />
                            </Button>
                            <SearchBox />
                        </div>
                        <div className='col-sm-6 d-flex align-items-center justify-content-end part3'>
                            <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
                            <Button className='rounded-circle mr-3'><IoCartOutline /></Button>
                            <Button className='rounded-circle mr-3'><MdOutlineEmail /></Button>
                            <Button className='rounded-circle mr-3' onClick={handleClickNotify}><FaRegBell /></Button>
                            <Menu
                                anchorEl={isOpenNotify}
                                className='notifications dropdown_list'
                                id="notifications"
                                open={openNotify}
                                onClose={handleCloseNotify}
                                onClick={handleCloseNotify}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className='head pl-3 pb-0'>
                                    <h4>Đã mua (12)</h4>
                                </div>
                                <Divider className='mb-1' />
                                <div className='scroll'>

                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotify}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={avatar} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Học Lê</b>
                                                        đã mua tất cả sản phẩm
                                                        <b className='ml-1'>Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='text-sky mb-0'>Vài giây trước</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>
                                <div className='pl-3 pr-3 w-100 pt-3 pb-3'>
                                    <Button className='btn-blue w-100'>Xem tất cả thông báo</Button>
                                </div>
                            </Menu>
                            <div className='myAccWrapper'>
                                <Button className='myAcc d-flex align-items-center' onClick={handleClick}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src={avatar} />
                                        </span>
                                    </div>
                                    <div className='userInfo'>
                                        <h4>Học Lê</h4>
                                        <p className='mb-0'>letienhocpy363@gmail.com</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Cá nhân
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Quên mật khẩu
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Đăng xuất
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header