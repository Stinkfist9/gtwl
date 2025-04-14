import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const championshipsDir = 'src/content/championships';

interface Championship {
  title: string;
  description: string;
  image: string;
  season: string;
  slug: string; // Add slug property to the Championship interface
}

export function getAllChampionships(): Championship[] {
  if (!fs.existsSync(championshipsDir)) return []; // Handle missing folder

  const files = fs.readdirSync(championshipsDir);

  return files
    .filter((file) => file.endsWith('.md')) // Only process .md files
    .map((file) => {
      const content = fs.readFileSync(path.join(championshipsDir, file), 'utf-8');
      const { attributes } = fm<Championship>(content);

      return {
        title: attributes.title,
        description: attributes.description,
        image: attributes.image,
        season: attributes.season,
        slug: file.replace('.md', '') // Generate slug from the filename without .md
      };
    });
}

