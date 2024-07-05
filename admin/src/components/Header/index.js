import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { Button } from '@mui/material'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";



const Header = () => {
    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-xs-3 part1'>
                            <Link>
                                <img src={logo} className='logo'/>
                            </Link>
                        </div>
                        <div className='col-xs-3 d-flex align-items-center part2'>
                            <Button className='rounded-circle'>
                                <MdOutlineMenuOpen/>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header