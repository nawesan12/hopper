import { updateUserInfo } from "@models/User";
import { hashPassword } from "@utils/unique";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, data } = req.body
  
  let newUser = { ...data }

  if(!data) {
    return res.status(400).json({msg: "You must send some info to update!"})
  }

  if(data.password) {
    newUser = {
      ...data,
      password: await hashPassword(data.password as string)
    }    
  }

  const updatedUser = await updateUserInfo(username as string, newUser)

  res.status(200).json(updatedUser)
}