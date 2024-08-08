import { StatusCodes } from 'http-status-codes'
import { JwTProvider, ACCESS_TOKEN_SECRET_SIGNATURE } from '~/providers/JwtProvider'


//Middleware đảm nhiệm việc quan trọng: lấy và xác thực JWT accessToken nhận được từ phía FE có hợp lệ hay ko
const isAuthorized = async (req, res, next) => {
    //Cách 1 Lấy accessToken nằm trong request phía client - withCredentials trong file authorizeAxios và Credentials trong CORS
    const accessTokenFromCookie = req.cookies?.accessToken
    if (!accessTokenFromCookie) {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized! (Token not found)' })
        return
    }
    //Cách 2 lấy accessToken trên localstorage và gửi thông báo lên header authorization
    // const accessTokenFromHeader = req.headers.authorization
    // if (!accessTokenFromHeader) {
    //     res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized! (Token not found)' })
    //     return
    // }
    try {
        //Bước 1 : Thực hiện giải mã xem token có hợp lệ hay ko
        const accessTokenDecoded = await JwTProvider.verifyToken(
            accessTokenFromCookie,
            //accessTokenFromHeader.substring('Bearer '.length),
            ACCESS_TOKEN_SECRET_SIGNATURE
        )
        //Bước 2 : Nếu thông tin hợp lệ, cần phải lưu thông tin giải mã được vào cái req.jwtDecoded, 
        //để s/d cho các tầng xử lý phía sau
        req.jwtDecoded = accessTokenDecoded
        //Bước 3 : Cho phép req đi tiếp
        next()
    } catch (error) {
        //Nếu accessToken bị hết hạn thì mình cần trả về một lỗi GONE- 410 cho phía FE biết để gọi API refreshToken
        if (error.message?.includes('jwt expired')) {
            res.status(StatusCodes.GONE).json({ message: 'Need to refresh token' })
            return
        }
        //Nếu accessToken không hợp lệ do bất kì điều gì khác vụ hết hạn ta trả về lỗi 401
        res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized! Please Login.' })
    }
}

export const authMiddleware = {
    isAuthorized
}