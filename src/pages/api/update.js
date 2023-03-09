import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { name,score } = req.body;

  if (req.method == "PUT") {
    const user = await prisma.user.update({
        where: {
            name: name,
        },
        data: {
            score: score,
        },
    });

    if (!user) {
      return   res.status(400);
    }
    return res.status(200).json({ user });
    
  }
}
