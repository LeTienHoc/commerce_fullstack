import { useState } from 'react'
import SideBar from '../../Components/SideBar'
import { Button } from '@mui/material'
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { LiaAngleDownSolid } from "react-icons/lia";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../Components/ProductItem';
import Pagination from '@mui/material/Pagination';
const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [productView, setProductView] = useState('four')
    return (
        <>
            <section className='product_Listing_Page'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <SideBar />
                        <div className='content_right'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg'
                                className='w-100'
                                style={{ borderRadius: '8px' }} />
                            <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                                <div className='d-flex align-items-center btnWrapper'>
                                    <Button className={productView === 'one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                                    <Button className={productView === 'three' && 'act'} onClick={() => setProductView('three')}><CgMenuGridO /></Button>
                                    <Button className={productView === 'four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                                </div>
                                <div className='ml-auto showByFilter'>
                                    <Button onClick={handleClick}>Hiển thị 12 <LiaAngleDownSolid /></Button>
                                    <Menu
                                        className='w-100 showPerPageDropDown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>12</MenuItem>
                                        <MenuItem onClick={handleClose}>24</MenuItem>
                                        <MenuItem onClick={handleClose}>36</MenuItem>
                                        <MenuItem onClick={handleClose}>48</MenuItem>

                                    </Menu>
                                </div>
                            </div>
                            <div className='productListing'>
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                            </div>
                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <Pagination count={10} color="primary" size='large'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing