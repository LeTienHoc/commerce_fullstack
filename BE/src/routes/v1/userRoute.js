import express from 'express'
import { userController } from '~/controllers/userController'
import { userValidation } from '~/validations/userValidation'

const Router = express.Router()

// API đăng nhập.
Router.route('/login')
  .post(userController.login)

// API đăng xuất.
Router.route('/logout')
  .delete(userController.logout)

// API Refresh Token - Cấp lại Access Token mới.
Router.route('/refresh_token')
  .put(userController.refreshToken)

//API đăng ký
Router.route('/register')
  .post(userValidation.registerNew,userController.register)

export const userRoute = Router
