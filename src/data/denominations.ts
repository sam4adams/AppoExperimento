import type { Denomination } from '../types'

export const denominations: Denomination[] = [
  // ── United States ──────────────────────────────────────────────
  {
    id: 'us-cent', countryId: 'us', name: 'Cent', valueLabel: '1¢',
    metalColor: 'copper',
    description: 'The smallest US denomination, featuring Lincoln since 1909.',
    heroWikipediaTitle: 'Lincoln wheat cent',
  },
  {
    id: 'us-nickel', countryId: 'us', name: 'Nickel', valueLabel: '5¢',
    metalColor: 'nickel',
    description: 'Five-cent piece, 75% copper / 25% nickel alloy.',
    heroWikipediaTitle: 'Buffalo nickel',
  },
  {
    id: 'us-dime', countryId: 'us', name: 'Dime', valueLabel: '10¢',
    metalColor: 'silver',
    description: 'Smallest US coin by diameter. Silver through 1964.',
    heroWikipediaTitle: 'Mercury dime',
  },
  {
    id: 'us-quarter', countryId: 'us', name: 'Quarter', valueLabel: '25¢',
    metalColor: 'silver',
    description: 'Twenty-five cent piece. Silver through 1964.',
    heroWikipediaTitle: 'Standing Liberty quarter',
  },
  {
    id: 'us-half', countryId: 'us', name: 'Half Dollar', valueLabel: '50¢',
    metalColor: 'silver',
    description: 'Fifty-cent piece. Silver through 1964; 40% silver 1965–1970.',
    heroWikipediaTitle: 'Walking Liberty half dollar',
  },
  {
    id: 'us-dollar', countryId: 'us', name: 'Dollar', valueLabel: '$1',
    metalColor: 'silver',
    description: 'One-dollar coin spanning silver dollars to modern clads.',
    heroWikipediaTitle: 'Morgan dollar',
  },

  // ── United Kingdom ──────────────────────────────────────────────
  {
    id: 'gb-farthing', countryId: 'gb', name: 'Farthing', valueLabel: '¼d',
    metalColor: 'copper',
    description: 'Quarter of a penny, last minted in 1956.',
    heroWikipediaTitle: 'Farthing British coin',
  },
  {
    id: 'gb-halfpenny', countryId: 'gb', name: 'Halfpenny', valueLabel: '½d',
    metalColor: 'bronze',
    description: 'Half penny bronze coin, demonetised 1984.',
    heroWikipediaTitle: 'British halfpenny coin',
  },
  {
    id: 'gb-penny', countryId: 'gb', name: 'Penny', valueLabel: '1p',
    metalColor: 'copper',
    description: 'British penny, pre-decimal and decimal series.',
    heroWikipediaTitle: 'British penny Victorian',
  },
  {
    id: 'gb-shilling', countryId: 'gb', name: 'Shilling', valueLabel: '1/-',
    metalColor: 'silver',
    description: 'Twelve pence. Silver until 1947.',
    heroWikipediaTitle: 'British shilling coin',
  },
  {
    id: 'gb-crown', countryId: 'gb', name: 'Crown', valueLabel: '5/-',
    metalColor: 'silver',
    description: 'Five-shilling commemorative coin, now 25p / £5.',
    heroWikipediaTitle: 'British crown coin silver',
  },
  {
    id: 'gb-pound', countryId: 'gb', name: 'Pound', valueLabel: '£1',
    metalColor: 'gold',
    description: 'Sovereign and modern pound coins.',
    heroWikipediaTitle: 'British gold sovereign',
  },

  // ── Canada ──────────────────────────────────────────────────────
  {
    id: 'ca-cent', countryId: 'ca', name: 'Cent', valueLabel: '1¢',
    metalColor: 'copper',
    description: 'Canadian penny, discontinued 2013.',
    heroWikipediaTitle: 'Canadian cent',
  },
  {
    id: 'ca-nickel', countryId: 'ca', name: 'Nickel', valueLabel: '5¢',
    metalColor: 'nickel',
    description: 'Five-cent piece; pure nickel in wartime.',
    heroWikipediaTitle: 'Canadian five cent coin',
  },
  {
    id: 'ca-dime', countryId: 'ca', name: 'Dime', valueLabel: '10¢',
    metalColor: 'silver',
    description: 'Bluenose schooner reverse. Silver through 1967.',
    heroWikipediaTitle: 'Canadian dime',
  },
  {
    id: 'ca-quarter', countryId: 'ca', name: 'Quarter', valueLabel: '25¢',
    metalColor: 'silver',
    description: 'Caribou reverse since 1937. Silver through 1967.',
    heroWikipediaTitle: 'Canadian quarter',
  },
  {
    id: 'ca-loonie', countryId: 'ca', name: 'Loonie (Dollar)', valueLabel: '$1',
    metalColor: 'gold',
    description: 'Common Loon reverse since 1987.',
    heroWikipediaTitle: 'Canadian loonie dollar',
  },
  {
    id: 'ca-toonie', countryId: 'ca', name: 'Toonie (Two Dollar)', valueLabel: '$2',
    metalColor: 'bimetal',
    description: 'Bimetallic coin with polar bear, introduced 1996.',
    heroWikipediaTitle: 'Canadian toonie',
  },

  // ── Australia ────────────────────────────────────────────────────
  {
    id: 'au-cent1', countryId: 'au', name: 'One Cent', valueLabel: '1¢',
    metalColor: 'bronze',
    description: 'Feathertail glider reverse. Discontinued 1991.',
    heroWikipediaTitle: 'Australian one cent coin',
  },
  {
    id: 'au-cent2', countryId: 'au', name: 'Two Cents', valueLabel: '2¢',
    metalColor: 'bronze',
    description: 'Frill-necked lizard reverse. Discontinued 1991.',
    heroWikipediaTitle: 'Australian two cent coin',
  },
  {
    id: 'au-5cent', countryId: 'au', name: 'Five Cents', valueLabel: '5¢',
    metalColor: 'silver',
    description: 'Echidna reverse.',
    heroWikipediaTitle: 'Australian five cent coin',
  },
  {
    id: 'au-10cent', countryId: 'au', name: 'Ten Cents', valueLabel: '10¢',
    metalColor: 'silver',
    description: 'Superb Lyrebird reverse.',
    heroWikipediaTitle: 'Australian ten cent coin',
  },
  {
    id: 'au-50cent', countryId: 'au', name: 'Fifty Cents', valueLabel: '50¢',
    metalColor: 'silver',
    description: 'Dodecagonal (12-sided) coin with Australian coat of arms.',
    heroWikipediaTitle: 'Australian fifty cent coin',
  },
  {
    id: 'au-dollar', countryId: 'au', name: 'Dollar', valueLabel: '$1',
    metalColor: 'gold',
    description: 'Five kangaroos reverse, introduced 1984.',
    heroWikipediaTitle: 'Australian dollar coin',
  },

  // ── Germany ──────────────────────────────────────────────────────
  {
    id: 'de-pfennig', countryId: 'de', name: 'Pfennig', valueLabel: '1 Pf',
    metalColor: 'copper',
    description: 'German penny; discontinued with the Euro in 2002.',
    heroWikipediaTitle: 'German pfennig coin',
  },
  {
    id: 'de-mark', countryId: 'de', name: 'Deutsche Mark', valueLabel: '1 DM',
    metalColor: 'nickel',
    description: 'Federal Republic of Germany 1948–2002.',
    heroWikipediaTitle: 'Deutsche Mark coin',
  },

  // ── France ──────────────────────────────────────────────────────
  {
    id: 'fr-centime', countryId: 'fr', name: 'Centime', valueLabel: '1c',
    metalColor: 'bronze',
    description: 'French centime; various Third/Fourth/Fifth Republic issues.',
    heroWikipediaTitle: 'French centime coin',
  },
  {
    id: 'fr-franc', countryId: 'fr', name: 'Franc', valueLabel: '1 Fr',
    metalColor: 'silver',
    description: 'French franc, replaced by the Euro in 2002.',
    heroWikipediaTitle: 'French franc coin',
  },

  // ── Mexico ──────────────────────────────────────────────────────
  {
    id: 'mx-centavo', countryId: 'mx', name: 'Centavo', valueLabel: '1c',
    metalColor: 'copper',
    description: 'Mexican centavo in bronze and stainless.',
    heroWikipediaTitle: 'Mexican centavo coin',
  },
  {
    id: 'mx-peso', countryId: 'mx', name: 'Peso', valueLabel: '$1',
    metalColor: 'silver',
    description: 'Mexican peso from silver 8-reales era to modern coins.',
    heroWikipediaTitle: 'Mexican peso silver coin',
  },

  // ── Japan ──────────────────────────────────────────────────────
  {
    id: 'jp-yen1', countryId: 'jp', name: 'One Yen', valueLabel: '¥1',
    metalColor: 'silver',
    description: 'Pure aluminum coin, lightest circulating coin in the world.',
    heroWikipediaTitle: 'Japanese one yen coin',
  },
  {
    id: 'jp-yen500', countryId: 'jp', name: 'Five Hundred Yen', valueLabel: '¥500',
    metalColor: 'bimetal',
    description: 'High-value bimetallic circulation coin.',
    heroWikipediaTitle: 'Japanese 500 yen coin',
  },
]
