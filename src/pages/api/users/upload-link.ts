import type { NextApiRequest, NextApiResponse } from "next";
import { uploadUserLink } from "@models/User";
import { url } from "@utils/regex";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, link } = req.body

  if(!id || typeof id !== "string") {
    return res.status(400).json({msg: "Send a valid string"})
  }

  if(!link.match(url)) {
    return res.status(400).json({msg: "Send a valid url ('https:// [username] .com/net/etc)"})
  }

  const updatedUser = await uploadUserLink(id as string, link as string)

  res.status(200).json(updatedUser)
}