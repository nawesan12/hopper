import { getUserByEmail, getUserByUsername } from "@models/User";
import { email, username } from "@utils/regex";
import { comparePassword } from "@utils/unique";
import type { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { identifier, password } = req.body

  let user

  if(identifier.match(email)) {
    user = await getUserByEmail(identifier)
  }

  if(identifier.match(username)) {
    user = await getUserByUsername(identifier)
  }

  if(!user) {
    return res.status(400).json({ error: true, message: "User does not exist" })
  }

  if(!comparePassword(password, user.password)) {
      return res.status(400).json({ error: true, message: "Invalid password" })
  }

  const token = sign({ user }, "secret", { expiresIn: "2h" })

  res.status(200).json({ status: "OK", token })
}