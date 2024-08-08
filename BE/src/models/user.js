import Joi from 'joi';
import { GET_DB } from '~/config/mongodb';

const USER_COLLECTION_NAME = 'users'
const USER_COLLECTION_SCHEMA = Joi.object({
    name: Joi.string().required().min(3).max(50).trim().strict(),
    phone: Joi.string().required().min(10).max(10).trim().strict(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().min(3),
    isAdmin: Joi.boolean().default(false),
    createdAt: Joi.date().timestamp('javascript').default(Date.now),
    updatedAt: Joi.date().timestamp('javascript').default(null),
    _destroy: Joi.boolean().default(false),
})
const registerNew = async (data) => {
    try {
        const validData = await validateBeforeRegiter(data)
        return await GET_DB().collection(USER_COLLECTION_NAME).insertOne(validData)
    } catch (error) {
        throw new Error(error)
    }
}
const findEmail = async (email) => {
    try {
        const result = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
            email: email
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findPhone = async (phone) => {
    try {
        const result = await GET_DB().collection(USER_COLLECTION_NAME).findOne({
            phone: phone
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const validateBeforeRegiter = async (data) => {
    return await USER_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}
export const UserModel = {
    USER_COLLECTION_NAME,
    USER_COLLECTION_SCHEMA,
    registerNew,
    findEmail,
    findPhone
}