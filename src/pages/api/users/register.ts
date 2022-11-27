import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../../../models/User";
import { hashPassword, id } from "@utils/unique";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, name, email, password } = req.body

  if(!email || !username || !password || !name) {
    return res.status(400).json({msg: "You must fill all the inputs!"})
  }

  const newUser = {
    id: id(),
    username,
    name,
    email,
    password: await hashPassword(password),
    slug: username,
    bio: "",
    config: ""
  }

  const createdUser = await createUser(newUser)

  if(!createdUser) {
    return res.status(400).json({msg: "There was an error creating the user! Try again, please"})
  }

  res.status(201).json(createdUser)
}