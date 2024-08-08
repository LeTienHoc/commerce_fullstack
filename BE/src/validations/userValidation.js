import Joi from "joi"

import { StatusCodes } from "http-status-codes"

import ApiError from "~/utils/ApiError"

const registerNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        name: Joi.string().required().min(3).max(50).trim().strict(),
        phone: Joi.string().required().min(10).max(10).trim().strict(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().required().min(3)
    })
    try {
        //abortEarly : false trả về tất cả các lỗi validation 1 lần nếu có
        await correctCondition.validateAsync(req.body, { abortEarly: false })

        //validate dữ liệu hợp lệ thì cho đi tiếp sang controller
        next()
        // res.status(StatusCodes.CREATED).json({ message: 'Đăng ký thành công!' })
    } catch (error) {
        // const errorMessage = new Error(error).message
        // const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,errorMessage)
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
        // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: new Error(error).message })
    }
}
export const userValidation = {
    registerNew
}