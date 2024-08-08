import JWT from 'jsonwebtoken'


//userInfo: là những thông tin muốn đính kèm vào token
//secretSignature: Chữ ký bí mật (Dạng chuỗi string ngẫu nhiên)
//TokenLife: thời gian hết hạn của token
const generateToken = async (userInfo, secretSignature, tokenLife) => {
    try {
        //Hàm sign là của thư viện JWT - thuật  toán mặc định là hs256
        return JWT.sign(userInfo, secretSignature, { algorithm: 'HS256', expiresIn: tokenLife })
    } catch (error) {
        throw new Error(error)
    }
}
//VerifyToken là một function có hợp lệ hay ko 
// Kiểm tra token được tạo ra có đúng với chữ ký bí mật secretSignature trong dự án hay ko
const verifyToken = async (token,secretSignature) => {
    try {
        // Hàm verify của thư viện JWT
        return JWT.verify(token,secretSignature,)
    } catch (error) {
        throw new Error(error)
    }
}
export const ACCESS_TOKEN_SECRET_SIGNATURE = 'KBgJwUETt4HeVD05WaXXI9V3JnwCVP'
export const REFRESH_TOKEN_SECRET_SIGNATURE = 'fcCjhnpeopVn2Hg1jG75MUi62051yL'
export const JwTProvider = {
    generateToken,
    verifyToken
}