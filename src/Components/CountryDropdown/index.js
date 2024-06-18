import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import React from 'react'
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null)
    const context = useContext(MyContext)

    const [countryList, setCountryList] = useState(context.countryList);
    // useEffect(()=>{
    //     setCountryList(context.countryList)
    // },[])

    const selectCountry = (iso2,country) => {
        setselectedTab(iso2)
        setisOpenModal(false)
        context.setselectedCountry(country);
    }
    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword)
            })
            setCountryList(list)
        }
        else {
            setCountryList(context.countryList)
        }
    }
    return (
        <>
            <Button variant="text" className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí của bạn</span>
                    <span className='name'>{context.selectedCountry!==""?(context.selectedCountry.length>10?context.selectedCountry?.substr(0,10)+"...":context.selectedCountry):"Lựa chọn vị trí"}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
            <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Chọn vị trí của bạn</h4>
                <p>Nhập địa điểm và chúng tôi sẽ chỉ định khu vực của bạn</p>
                <Button className='close_' onClick={() => setisOpenModal(false)}><IoMdClose /></Button>
                <div className='headerSearch w-100' style={{ padding: "2px", height: "50px" }}>
                    <input type='text' placeholder='Tìm kiếm khu vực của bạn...' onChange={filterList} />
                    <Button variant="text" style={{ top: "6px" }}>
                        <IoIosSearch />
                    </Button>
                </div>
                <ul className='countryList mt-3'>
                    {
                        countryList?.length !== 0 && countryList.map((item, index) => {
                            return (
                                <li key={index}><Button
                                    onClick={() => selectCountry(item.iso2,item.country)}
                                    className={`${selectedTab === item.iso2 ? 'active' : ''}`}
                                >{item.country}</Button></li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown