import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const defaultUsername = process.env.ADMIN_SEED_USERNAME || "admin";
  const defaultPassword = process.env.ADMIN_SEED_PASSWORD || "admin123";
  const defaultName = process.env.ADMIN_SEED_NAME || "Administrator HIMATIF";

  const passwordHash = await bcrypt.hash(defaultPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { username: defaultUsername },
    update: {
      name: defaultName,
      passwordHash,
      role: "ADMIN",
    },
    create: {
      username: defaultUsername,
      name: defaultName,
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Seeded Admin User successfully:", {
    id: adminUser.id,
    username: adminUser.username,
    name: adminUser.name,
    role: adminUser.role,
  });
}

main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
