import { UserModel } from "~/models/user"
import ApiError from "~/utils/ApiError";
import { StatusCodes } from 'http-status-codes'

const bcrypt = require('bcrypt');

const regiterNew = async (reqBody) => {
    try {
        //Xử lý logic dữ liệu
        const { name, phone, email, password, isAdmin } = reqBody;
        const existingUserByPh = await UserModel.findPhone(phone)
        const existingUser = await UserModel.findEmail(email)

        if (existingUser && existingUserByPh) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User đã tồn tại!")
            // res.status(StatusCodes.BAD_REQUEST).json({ message: "User đã tồn tại!" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newRegiter = {
            name: name,
            phone: phone,
            email: email,
            password: hashPassword,
            isAdmin: isAdmin
        }
        return await UserModel.registerNew(newRegiter)
    } catch (error) {
        throw error
    }
}
const Login = async (data) => {
    try {
        const { email, password } = data;
        const existingUser = await UserModel.findEmail(email)
        if(!existingUser){
            throw new ApiError(StatusCodes.BAD_REQUEST,"Không tìm thấy tài khoản!")
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            throw new ApiError(StatusCodes.BAD_REQUEST,"Sai mật khẩu!")
        }
        return existingUser
    } catch (error) {
        throw error
    }
}
export const userService = {
    regiterNew,
    Login
}