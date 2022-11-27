import type { NextApiRequest, NextApiResponse } from "next";
import { getUserAndLinks } from "../../../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query

  if(!username || typeof username !== "string") {
    return res.status(400).json({msg: "Write a valid param"})
  }

  const userAndLinks = await getUserAndLinks(username as string)

  if(!userAndLinks) {
    return res.status(404).json({msg: "User not found!"})
  }
  
  res.status(200).json(userAndLinks)
}