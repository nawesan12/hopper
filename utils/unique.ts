import { genSalt, hash, compare } from 'bcrypt'

export const id = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const hashPassword = async (password:string ) => {
  const salt = await genSalt(10)
  const hashed = await hash(password, salt)
  return hashed
}

export const comparePassword = async (password: string, hash: string) => {
  const match = await compare(password, hash)
  return match
}