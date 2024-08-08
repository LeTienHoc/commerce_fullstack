import axios from "axios";
import { toast } from 'react-toastify'
import { handleLogoutAPI, refreshTokenAPI } from "../apis/loginApi";

//Khởi tạo một đối tượng axios (authorizedAxiosInstance) mục đích để custom và cấu hình cho dự án
let authorizedAxiosInstance = axios.create()
//Thời gian tối đa của 1 request là 10phut
authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10
//withCredentials: sẽ cho phép axios tự động gửi cookie trong mỗi request lên BE (phục vụ trường hợp nếu chúng
//ta sử dụng JWT tokens (refresh & access) theo cơ chế httponly Cookie)
authorizedAxiosInstance.defaults.withCredentials = true

// Khởi tạo promise cho việc refresh_token

let refreshTokenPromise = null

// Thêm một bộ đón chặn request : Can thiệp vào giữa những cái request API
authorizedAxiosInstance.interceptors.request.use((config) => {
    // Lấy access token từ localstorage sau đó đính kèm vào header
    // const accessToken = localStorage.getItem('accessToken')
    // if(accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`
    // }
    return config
}, (error) => {
    // Làm gì đó với lỗi request
    return Promise.reject(error)
})

// Thêm một bộ đón chặn response : Can thiệp những cái nhận về từ API
authorizedAxiosInstance.interceptors.response.use((response) => {
    // Bất kì mã trạng thái nào nằm trong tầm 200-299 đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response


    return response
}, (error) => {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 200-299 đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    if (error.response?.status === 401) {
        handleLogoutAPI().then(() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = '/SignIn'
        })
    }
    //Lấy các request bị lỗi thông qua erro.config
    const originalRequest = error.config
    if (error.response?.status === 410 && originalRequest) {

        if (!refreshTokenPromise) {
            const refreshToken = localStorage.getItem('refreshToken')
            console.log("refreshToken", refreshToken)
            refreshTokenPromise = refreshTokenAPI(refreshToken)
                .then((res) => {
                    const { accessToken } = res.data
                    localStorage.setItem('accessToken', accessToken)
                })
                .catch((_error) => {
                    handleLogoutAPI().then(() => {
                        // eslint-disable-next-line no-restricted-globals
                        location.href = '/SignIn'
                    })
                    return Promise.reject(_error)
                })
                .finally(() => {
                    refreshTokenPromise = null
                })
        }
        return refreshTokenPromise.then(() => {
            return authorizedAxiosInstance(originalRequest)
        })
    }
    if (error.response?.status !== 410) {
        toast.error(error.response?.data?.message || error?.message)
    }
    return Promise.reject(error)
})
export default authorizedAxiosInstance