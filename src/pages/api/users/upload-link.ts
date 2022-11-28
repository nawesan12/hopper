import type { NextApiRequest, NextApiResponse } from "next";
import { uploadUserLink } from "@models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, link } = req.body

  const updatedUser = await uploadUserLink(id as string, link as string)

  res.status(200).json(updatedUser)
}