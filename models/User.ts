import { prisma } from "src/server/db/client"

export const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

export const getUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  })
  return user
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  return user
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const createUser = async (data: any) => {
  const createdUser = await prisma.user.create({
    data: data
  })
  return createdUser
}

export const getUserFromSlug = (slug: string) => {
  const link = prisma.user.findUnique({
    where: {
      slug: slug
    }
  })
  return link
}

export const getUserAndLinks = async (username: string) => {
  const userAndLinks = await prisma.user.findUnique({
    where: {
      username: username
    },
    include: {
      links: {
        select: {
          id: true,
          destination:true
        }
      }
    }
  })
  return userAndLinks
}

export const uploadUserLink = async (id: string, link: string) => {
  const newLink = await prisma.link.create({
    data: {
      destination: link as string,
      userId: id as string
    }
  })
  return newLink
}

export const editUserSlug = async (id: string, newSlug: string) => {
  const newUserSlug = await prisma.user.update({
    where: {
      id: id as string
    },
    data: {
      slug: newSlug
    }
  })
  return newUserSlug
}

export const getAllExistingSlugs = async () => {
  const res = await prisma.user.findMany({
    select: {
      slug: true
    }
  })
  return res.map(res => res.slug)
}

export const updateUserInfo = async (username: string, data: any) => {
  const res = await prisma.user.update({
    where: {
      username: username
    },
    data: data
  })
  return res
}