import fs from 'node:fs';
import sql from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'meals.db');
const db = sql(dbPath);

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("Simulated database error");
    return db.prepare(`SELECT * FROM meals`).all();
}

export function getMeal(slug) {
    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
    meal.slug = meal.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    meal.image = `/images/${fileName}`;
    const instructionsClean = meal.instructions.replace(/<[^>]*>?/gm, '');

    const stmt = db.prepare(`
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `);

   const info = stmt.run({
        ...meal,
        instructions: instructionsClean
    });

}