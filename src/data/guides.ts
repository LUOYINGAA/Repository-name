export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Main Story",
    slug: "main-story",
    icon: "📖",
    description: "Complete story walkthroughs from start to finish",
  },
  {
    id: "2",
    name: "Side Quests",
    slug: "side-quests",
    icon: "⭐",
    description: "Optional missions and activities",
  },
  {
    id: "3",
    name: "Boss Guides",
    slug: "boss-guides",
    icon: "⚔️",
    description: "Strategies to defeat challenging enemies",
  },
  {
    id: "4",
    name: "Secrets",
    slug: "secrets",
    icon: "🔮",
    description: "Hidden items, locations, and easter eggs",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Complete Walkthrough: The Beginning",
    slug: "complete-walkthrough-the-beginning",
    category: "main-story",
    excerpt: "Start your adventure right with our comprehensive guide to the opening hours of the game.",
    content: `
# The Beginning

Welcome to the game! This guide will help you navigate the opening hours of your adventure.

## Character Creation

When you first start, you'll create your character. Choose your class carefully as it affects your playstyle:

- **Warrior** - Great for close combat
- **Mage** - Powerful magic abilities  
- **Rogue** - Stealth and agility

## The First Area

After character creation, you'll find yourself in the starting village. Here's what to do:

1. Talk to the village elder to receive your first quest
2. Explore the village and collect any items you find
3. Head north to the Dark Forest when ready

## Pro Tips

- Don't forget to save often
- Talk to every NPC for useful information
- Check every corner for hidden treasures

![Game Screenshot](https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800)
    `,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Dragon's Lair Boss Fight Guide",
    slug: "dragons-lair-boss-fight",
    category: "boss-guides",
    excerpt: "Master the mechanics and defeat the fearsome dragon with our detailed strategy guide.",
    content: `
# Dragon's Lair Boss Fight

The Dragon is one of the most challenging bosses in the game. Here's how to defeat it.

## Phase 1: Ground Battle

When you first enter the lair, the dragon will be on the ground. Attack its legs to deal damage and avoid its tail sweep.

### Attack Patterns

- **Fire Breath**: Run to the sides to avoid
- **Tail Sweep**: Jump over or run behind
- **Wing Flap**: Creates a wind gust, stay low

## Phase 2: Aerial Combat

At 50% health, the dragon takes flight. Use the pillars for cover and wait for it to land.

## Recommended Equipment

- Fire resistance armor
- Silver sword for maximum damage
- Health potions (20+)

![Dragon Boss](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800)
    `,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
    date: "2024-01-12",
    readTime: "8 min",
  },
  {
    id: "3",
    title: "Hidden Treasure Locations",
    slug: "hidden-treasure-locations",
    category: "secrets",
    excerpt: "Discover all the secret treasures scattered throughout the game world.",
    content: `
# Hidden Treasure Locations

There are many secret treasures to find. Here are all of them!

## Forest Region

1. **Ancient Chest** - Behind the waterfall in the Dark Forest
2. **Cursed Ring** - Inside the hollow tree stump
3. **Gold Coins** - Under the bridge

## Mountain Region

1. **Dragon Scale** - At the peak of Snow Mountain
2. **Phoenix Feather** - In the ice cave
3. **Ancient Map** - Behind the frozen waterfall

## Rewards

Finding all treasures unlocks the "Treasure Hunter" achievement!

![Treasure](https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800)
    `,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    date: "2024-01-10",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "The Lost Heir Questline",
    slug: "the-lost-heir-questline",
    category: "side-quests",
    excerpt: "Complete this rewarding side quest and uncover the kingdom's dark secret.",
    content: `
# The Lost Heir Questline

This multi-part side quest offers great rewards and reveals important lore.

## Part 1: The Missing Heir

Start by speaking with the old woman in the village square. She mentions her grandson went missing.

## Part 2: The Search

Investigate the abandoned mansion north of town. Find the boy's toy to prove he was there.

## Part 3: The Truth

Discover that the boy is actually the lost heir to the throne. Your choice matters here:

- **Help him reclaim the throne** - Unlocks royal quests
- **Let him live peacefully** - Receive the Peaceful Ending reward

## Rewards

- 5000 Gold
- Royal Sword
- Exclusive "True Heir" title

![Quest](https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800)
    `,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    date: "2024-01-08",
    readTime: "10 min",
  },
  {
    id: "5",
    title: "Complete Walkthrough: The Final Battle",
    slug: "complete-walkthrough-the-final-battle",
    category: "main-story",
    excerpt: "End your journey strong with our complete guide to the epic finale.",
    content: `
# The Final Battle

The final battle awaits! Here's how to prepare and succeed.

## Pre-Battle Preparation

Before facing the final boss, make sure you have:

- Full health and mana
- All key items collected
- Best equipment equipped
- Save your game!

## The Battle Phases

### Phase 1: The Dark Knight

The boss starts as a dark knight. Target his weak points - the gaps in his armor.

### Phase 2: The Transformation

At 75% health, he transforms. Stay mobile and attack when possible.

### Phase 3: The True Form

In his true form, use the Holy Sword you've collected throughout the game.

## Victory!

Congratulations! You've completed the game!

![Final Battle](https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800)
    `,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
    date: "2024-01-05",
    readTime: "12 min",
  },
  {
    id: "6",
    title: "Magic Tower Secret Quest",
    slug: "magic-tower-secret-quest",
    category: "side-quests",
    excerpt: "Find the hidden wizard and learn powerful spells.",
    content: `
# Magic Tower Secret Quest

Deep in the Magic Tower lies a secret that will change your gameplay forever.

## Finding the Entrance

The secret entrance is hidden behind the bookshelf in the tower lobby. Push the third book from the left.

## The Wizard's Test

To learn the ultimate spell, you must pass three trials:

1. **Trial of Wisdom** - Answer the wizard's riddles
2. **Trial of Courage** - Face your fears
3. **Trial of Heart** - Make a selfless choice

## The Ultimate Spell

Upon completion, you'll learn "Arcane Storm" - the most powerful spell in the game!

![Magic](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800)
    `,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    date: "2024-01-03",
    readTime: "7 min",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.category === categorySlug);
}

export function getLatestArticles(count: number = 5): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
