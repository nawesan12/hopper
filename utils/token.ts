import { verify, decode } from 'jsonwebtoken'

export const verifyToken = (token: string) => {
    const decoded = verify(token, "narciso")
    return decoded
}

export const decodeToken = (token: string) => {
    const decoded = decode(token)
    return decoded
}