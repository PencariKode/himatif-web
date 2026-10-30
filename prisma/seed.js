import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import progjaData from "../src/lib/constants/progja.json";

const prisma = new PrismaClient();

const DIVISION_MAP = {
  "Badan Pengurus Harian": "BPH",
  "Pengembangan Sumber Daya Mahasiswa": "PSDM",
  "Penelitian dan Pengembangan": "LITBANG",
  "Multimedia Komunikasi dan Informasi": "MULKOMINFO",
  "Olahraga dan Seni": "OLSEN",
  "Usaha Mandiri": "UM",
  "Rohani Islam": "ROHIS",
  "Rohani Kristen": "ROHKRIS",
  "Rohani Buddha": "ROHBUD",
  "Hubungan Masyarakat": "HUMAS",
};

const FEATURED_PROGRAMS = new Set([
  "Pelatihan Kepemimpinan",
  "IT Showcase",
  "IT Competition",
  "Fun & Fit",
  "HITEC (HIMATIF Esports Competition)",
  "HIMATIF CAREER",
]);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, " dan ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function seedAdmin() {
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

async function seedPrograms() {
  let seededCount = 0;

  for (const [divisionLabel, programs] of Object.entries(progjaData)) {
    const divisionEnum = DIVISION_MAP[divisionLabel];

    if (!divisionEnum) {
      console.warn(`Unknown division label in progja.json: "${divisionLabel}"`);
      continue;
    }

    const eventPrograms = programs.filter((item) => item.is_event === true);

    for (const item of eventPrograms) {
      const slug = `${divisionEnum.toLowerCase()}-${slugify(item.program_name)}`;
      const isFeatured = FEATURED_PROGRAMS.has(item.program_name);

      await prisma.program.upsert({
        where: { slug },
        update: {
          name: item.program_name,
          description: item.description,
          category: item.category,
          frequency: item.frequency,
          isAsCommittee: Boolean(item.is_as_committee),
          isFeatured,
          divisionInCharge: divisionEnum,
        },
        create: {
          slug,
          name: item.program_name,
          description: item.description,
          category: item.category,
          frequency: item.frequency,
          isAsCommittee: Boolean(item.is_as_committee),
          isFeatured,
          divisionInCharge: divisionEnum,
          cover: null,
        },
      });

      seededCount += 1;
    }
  }

  console.log(`Seeded ${seededCount} event programs (is_event = true) successfully.`);
}

async function main() {
  await seedAdmin();
  await seedPrograms();
}

main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
