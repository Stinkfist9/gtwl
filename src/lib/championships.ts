import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const championshipsDir = 'src/content/championships';

interface ChampionshipMetadata {
  slug: string;
  title: string;
  description: string;
  image: string;
  season: string;
}

export function getAllChampionships(): ChampionshipMetadata[] {
  const files = fs.readdirSync(championshipsDir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      const content = fs.readFileSync(path.join(championshipsDir, file), 'utf-8');
      const { attributes } = fm<ChampionshipMetadata>(content);

      return {
        slug,
        title: attributes.title,
        description: attributes.description,
        image: attributes.image,
        season: attributes.season
      };
    });
}
