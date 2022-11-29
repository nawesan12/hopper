import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ 
    status: "Everything ok.", 
    info: {
      name: "Hopper!",
      routes: ["/api/users", "/api/slugs"],
      stack: {
        language: "Typescript",
        framework: "Next",
        interface: "React",
        server: "Next API",
        database: {
          provider: "MySQL",
          orm: "Prisma"
        },
        libraries: ["Tailwind", "JWT", "Bcrypt"]
      }
    } 
  })
}