import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const { name } = req.body;

  if (req.method == "POST") {
    const user = await prisma.user.findUnique({
      where: {
        name: name,
      },
    });
    if (user) {
      return res.status(200).json( user );
    } else {
      const newUser = await prisma.user.create({
        data: {
          name: name,
          score: 1000,
        },
      });
      console.log(newUser);
      return res.status(201).json( newUser );
    }
  }
}
