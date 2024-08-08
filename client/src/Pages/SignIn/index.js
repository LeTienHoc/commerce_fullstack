import { useContext, useEffect } from 'react'
import { MyContext } from '../../App'
import Logo from '../../assets/images/logo.jpg'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Google from '../../assets/images/google.png'
import Facebook from '../../assets/images/facebook.png'
import { useForm } from 'react-hook-form'
import authorizedAxiosInstance from '../../utils/authorizedAxios';
import { API_ROOT } from '../../utils/constants';
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'




const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const context = useContext(MyContext)
    useEffect(() => {
        context.setisHeaderFooterShow(false)
    }, [])
    const submitLogIn = async (data) => {
        const res = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
        const userInfo = {
            id: res.data.id,
            email: res.data.email
        }
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        //đIỀU Hướng đén trang dashboard khi login thành công
        navigate('/')
    }
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
                        <img src={Logo} alt='logo' />
                    </div>
                    <form className='mt-3' >
                        <h2 className='mb-4'>Đăng nhập</h2>
                        <div className='form-group'>
                            <TextField id="standard-basic"
                                className='w-100' label="Email"
                                type='email' variant="standard"
                                error={!!errors.email}
                                {...register('email', {
                                    required: 'Vui lòng nhập email!!'
                                })} />
                            {errors.email &&
                                <Alert severity="error" sx={{ mt: '0.7em', '.MuiAlert-message': { overflow: 'hidden' } }}>
                                    {errors.email.message}
                                </Alert>
                            }
                        </div>
                        <div className='form-group'>
                            <TextField id="standard-basic"
                                className='w-100' label="Password"
                                type='password'
                                variant="standard"
                                error={!!errors.password}
                                {...register('password', {
                                    required: 'Vui lòng nhập mật khẩu!!'
                                })} />
                            {errors.password &&
                                <Alert severity="error" sx={{ mt: '0.7em', '.MuiAlert-message': { overflow: 'hidden' } }}>
                                    {errors.password.message}
                                </Alert>
                            }
                        </div>
                        <a className='border-effect cursor txt'>Quên mật khẩu?</a>
                        <Button className='btn-blue btn-lg btn-big w-100 mt-3 mb-3'
                            style={{ background: "#6d4aae" }}
                            onClick={handleSubmit(submitLogIn)}>
                            Đăng nhập</Button>
                        <p className='txt'>Bạn chưa đăng ký? <Link to="/signUp" className='border-effect'>Đăng ký</Link></p>
                        <h6 className='mt-4 text-center font-weight-bold'>Hoặc đăng nhập bằng</h6>
                        <span className='cursor d-flex align-items-center justify-content-center'>
                            <img className='mr-2' height={40} src={Google} alt='google' />
                            <img height={32} src={Facebook} alt='facebook' />
                        </span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn