import prisma from "../../lib/prisma";

export default async function handle(req, res) {


  if (req.method == "GET") {
    const users = await prisma.user.findMany()

    if (!users) {
      return   res.status(400);
    }
    return res.status(200).json({ users });
    
  }
}
