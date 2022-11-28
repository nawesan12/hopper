import { editUserSlug } from "@models/User";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, slug } = req.body

  if(!username || !slug) {
    return res.status(400).json({msg: "Both fields must be provided."})
  }

  const newSlug = await editUserSlug(username as string, slug as string)

  res.status(200).json({slug: newSlug, msg: "Slug updated succesfully!"})
}