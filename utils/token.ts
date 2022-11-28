import { verify, decode } from 'jsonwebtoken'

export const verifyToken = (token: string) => {
    const decoded = verify(token, "secret")
    return decoded
}

export const decodeToken = (token: string) => {
    const decoded = decode(token)
    return decoded
}