import { getAllExistingSlugs } from "@models/User";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slugs = await getAllExistingSlugs()

  if(!slugs) {
    return res.status(404).json({msg: "Not slugs found"})
  }

  res.status(200).json(slugs)
}