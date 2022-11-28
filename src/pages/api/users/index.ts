import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "@models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await getAllUsers()

  res.status(200).json(users)
}