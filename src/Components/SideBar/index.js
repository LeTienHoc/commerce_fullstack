import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [value,setValue] = useState([0,10000000])
    const [value2,setValue2] = useState(0)
    return (
        <>
            <div className='sidebar'>
                <div className='filterBox'>
                    <h6>Danh mục sản phẩm</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Nam" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Nữ" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Áo thun" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Áo polo" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Quần âu" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Quần short" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='filterBox'>
                    <h6>Lọc theo giá</h6>
                    <RangeSlider value={value} onInput={setValue} min={0} max={10000000} step={5} />
                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>
                            Từ: <strong className='text-dark'>đ:{value[0]}</strong>
                        </span>
                        <span className='ml-auto'>
                            Từ: <strong className='text-dark'>đ:{value[1]}</strong>
                        </span>

                    </div>
                </div>
                <div className='filterBox'>
                    <h6>Trạng thái sản phẩm</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Còn hàng" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Đang giảm giá" />
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='filterBox'>
                    <h6>Nhãn hiệu</h6>
                    <div className='scroll'>
                        <ul>
                            <li className='d-flex align-items-center'>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                                <span>(10)</span>
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Oreo" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Quaker" />
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <br/>
                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif'
                 className='w-100'
                  />
            </div>
        </>
    )
}

export default SideBar