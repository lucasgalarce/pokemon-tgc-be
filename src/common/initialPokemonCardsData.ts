import { PokemonCard } from 'src/modules/pokemonCard/entity/pokemonCard.entity';
import { PokemonExpansion, PokemonRarity, PokemonType } from './enums';

export const pokemonCards: Omit<PokemonCard, 'user'>[] = [
  {
    name: 'Pikachu',
    hp: 60,
    type: PokemonType.LIGHTNING,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.COMMON,
    originalAttackDmg: 160,
    weakness: PokemonType.FIGHTING,
    resistance: PokemonType.METAL,
  },
  {
    name: 'Charizard',
    hp: 180,
    type: PokemonType.FIRE,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.RARE,
    originalAttackDmg: 120,
    weakness: PokemonType.WATER,
  },
  {
    name: 'Onix',
    hp: 90,
    type: PokemonType.FIGHTING,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.COMMON,
    originalAttackDmg: 40,
    weakness: PokemonType.GRASS,
  },
  {
    name: 'Feraligatr',
    hp: 180,
    type: PokemonType.WATER,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.RARE,
    originalAttackDmg: 160,
    weakness: PokemonType.LIGHTNING,
  },
  {
    name: 'Sneasel',
    hp: 70,
    type: PokemonType.DARKNESS,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.UNCOMMON,
    originalAttackDmg: 20,
    weakness: PokemonType.GRASS,
  },
  {
    name: 'Scizor',
    hp: 120,
    type: PokemonType.METAL,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.RARE,
    originalAttackDmg: 60,
    weakness: PokemonType.FIRE,
    resistance: PokemonType.PSYCHIC,
  },
  {
    name: 'Treecko',
    hp: 40,
    type: PokemonType.PSYCHIC,
    expansion: PokemonExpansion.BASE,
    rarity: PokemonRarity.COMMON,
    originalAttackDmg: 10,
    weakness: PokemonType.FIRE,
    resistance: PokemonType.WATER,
  },
];
