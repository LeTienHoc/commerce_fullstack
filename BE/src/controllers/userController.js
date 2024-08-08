import { StatusCodes } from 'http-status-codes'
import ms from 'ms'
import { JwTProvider, ACCESS_TOKEN_SECRET_SIGNATURE, REFRESH_TOKEN_SECRET_SIGNATURE } from '~/providers/JwtProvider'
import { userService } from '~/services/userService';

const login = async (req, res,next) => {
  try {
    const userLogin = await userService.Login(req.body)

    // Trường hợp nhập đúng thông tin tài khoản, tạo token và trả về cho phía Client
    // Tạo thông tin payload để đính kèm trong JWT Token: bao gồm id và email của user
    const userInfo = {
      id: userLogin._id,
      email: userLogin.email
    }

    // Tạo ra 2 token, accessToken và refreshToken để trả về cho phía FE
    const accessToken = await JwTProvider.generateToken(userInfo, ACCESS_TOKEN_SECRET_SIGNATURE, '1h')
    const refreshToken = await JwTProvider.generateToken(userInfo, REFRESH_TOKEN_SECRET_SIGNATURE, '14 days')

    //Xử lý trả về http cookie cho trình duyệt

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })

    //Trả về thông tin Tokens chO FE CẦN  LƯU VÀO LOCALSTORAGE

    res.status(StatusCodes.OK).json({
      message: 'Đăng nhập thành công!',
      ...userInfo,
    })
  } catch (error) {
    next(error)
  }
}

const logout = async (req, res) => {
  try {
    // Do something
    res.clearCookie('accessToken')
    res.clearCookie('refreshToken')

    res.status(StatusCodes.OK).json({ message: 'Đăng xuất thành công!' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

const refreshToken = async (req, res) => {
  try {
    // Do something
    const refreshTokenFromCookie = req.cookies?.refreshToken

    const refreshTokenDecoded = await JwTProvider.verifyToken(
      refreshTokenFromCookie,
      REFRESH_TOKEN_SECRET_SIGNATURE
    )
    const userInfo = {
      id: refreshTokenDecoded.id,
      email: refreshTokenDecoded.email
    }

    const accessToken = await JwTProvider.generateToken(userInfo, ACCESS_TOKEN_SECRET_SIGNATURE, '1h')

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: ms('14 days')
    })
    res.status(StatusCodes.OK).json({ accessToken })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}
const register = async (req, res, next) => {
  try {
    const result = await userService.regiterNew(req.body)
    if (result) {
      res.status(StatusCodes.OK).json(result)
    }
  } catch (error) {
    next(error)
  }
}

export const userController = {
  login,
  logout,
  refreshToken,
  register
}
