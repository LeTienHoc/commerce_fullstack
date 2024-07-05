import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.jpg'
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
const Header = () => {

    const context = useContext(MyContext)
    return (
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row" style={{ flexWrap: "nowrap" }}>
                        <div className="logoWrapper col-sm-2 d-flex align-items-center col-sm-2">
                            <Link to={'/'}>
                                <img src={Logo} alt='logo' height={60} />
                            </Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>
                            {
                                context.countryList.length !== 0 && <CountryDropdown />
                            }

                            <SearchBox />
                            <div className='part3 d-flex align-items-center ml-auto'>
                                {
                                    !context.isLogin ? <Link to='/SignIn'><Button
                                        className='btn-blue btn-round mr-3'
                                        style={{ background: "#6d4aae", padding: '8px 15px' }}>Đăng nhập</Button></Link> :
                                        <Button className='circle mr-3'>
                                            <LuUser2 />
                                        </Button>
                                }
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>2.543 tr</span>
                                    <div className='position-relative ml-2'>
                                        <Link to='/cart'>
                                            <Button className='circle'>
                                                <IoBagOutline />
                                            </Button>
                                        </Link>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Navigation />

        </div>
    )
}

export default Header