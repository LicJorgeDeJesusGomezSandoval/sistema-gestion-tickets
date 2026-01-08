const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const ticket = await prisma.ticket.create({
    data: {
      titulo: "Ticket desde JS",
      descripcion: "Probando Prisma sin ts-node",
      estado: "abierto",
    },
  });

  console.log(ticket);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
