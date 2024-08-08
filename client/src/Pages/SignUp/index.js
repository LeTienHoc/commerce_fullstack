import { useContext, useEffect } from 'react'
import { MyContext } from '../../App'
import Logo from '../../assets/images/logo.jpg'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Google from '../../assets/images/google.png'
import Facebook from '../../assets/images/facebook.png'


const SignUp = () => {
    const context = useContext(MyContext)
    useEffect(() => {
        context.setisHeaderFooterShow(false)
    }, [])
    return (
        <section className='section signInPage'>
            <div class="shape-bottom">
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enablebackground: ' new 0 0 1921 819.8' }}>
                    <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z">
                    </path>
                </svg>
            </div>
            <div className='container'>
                <div className='box card p-3 shadow border-0'>
                    <div className='text-center'>
                        <img src={Logo} />
                    </div>
                    <form className='mt-3'>
                        <h2 className='mb-4'>Đăng ký</h2>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField className='w-100' label="Họ và tên" type='text' required variant="standard" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField className='w-100' label="Số điện thoại" type='number' required variant="standard" />
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <TextField id="standard-basic" className='w-100' label="Email" type='email' required variant="standard" />
                        </div>
                        <div className='form-group'>
                            <TextField id="standard-basic" className='w-100' label="Password" type='password' required variant="standard" />
                        </div>
                        <Button className='btn-blue btn-lg btn-big w-100 mt-3 mb-3' style={{ background: "#6d4aae" }}>Đăng ký</Button>
                        <p className='txt'>Đã đăng ký? <Link to="/signIn" className='border-effect'>Đăng nhập</Link></p>
                        <h6 className='mt-4 text-center font-weight-bold'>Hoặc đăng nhập bằng</h6>
                        <span className='cursor d-flex align-items-center justify-content-center'>
                            <img className='mr-2' height={40} src={Google} />
                            <img height={32} src={Facebook} />
                        </span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp