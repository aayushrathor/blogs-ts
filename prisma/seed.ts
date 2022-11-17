import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () {
    const post1 = await prisma.article.upsert({
        where: {
            title: 'Post1'
        },
        update: {},
        create: {
            title: 'Post1',
            body: 'This is body part of Post1.',
            description: 'This is post1 from prisma.',
            Published: false,
        },
    });

    const post2 = await prisma.article.upsert({
        where: {
            title: 'Post2'
        },
        update: {},
        create: {
            title: 'Post2',
            body: 'This is body part of Post2.',
            description: 'This is post1 from prisma.',
            Published: false,
        },
    });

    console.log({ post1, post2 });
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })