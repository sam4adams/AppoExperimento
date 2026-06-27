import type { SeriesPrice } from '../types'

const TODAY = '2026-06-20'
const SOURCE = 'Mock Data (Numista-ready)'

export const seriesPrices: SeriesPrice[] = [
  // ── Flying Eagle Cent ─────────────────────────────────────────
  {
    seriesId: 'us-cent-flying-eagle', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 18 }, { grade: 'G-4', price: 25 }, { grade: 'VG-8', price: 35 },
      { grade: 'F-12', price: 55 }, { grade: 'VF-20', price: 90 }, { grade: 'EF-40', price: 165 },
      { grade: 'AU-50', price: 275 }, { grade: 'MS-60', price: 425 }, { grade: 'MS-63', price: 800 },
      { grade: 'MS-65', price: 2800 },
    ],
    notable: ['1856 (pattern) — $6,000+ in VF', '1858 Large Letters — slight premium'],
  },

  // ── Indian Head Cent ──────────────────────────────────────────
  {
    seriesId: 'us-cent-indian-head', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 2 }, { grade: 'G-4', price: 3 }, { grade: 'VG-8', price: 5 },
      { grade: 'F-12', price: 8 }, { grade: 'VF-20', price: 15 }, { grade: 'EF-40', price: 28 },
      { grade: 'AU-50', price: 50 }, { grade: 'MS-60', price: 85 }, { grade: 'MS-63', price: 175 },
      { grade: 'MS-65', price: 650 },
    ],
    notable: ['1877 — $800+ in G-4', '1909-S — $400+ in G-4', '1864-L (Longacre initial) — premium'],
  },

  // ── Lincoln Wheat Cent ────────────────────────────────────────
  {
    seriesId: 'us-cent-lincoln-wheat', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.10 }, { grade: 'VG-8', price: 0.15 },
      { grade: 'F-12', price: 0.20 }, { grade: 'VF-20', price: 0.35 },
      { grade: 'EF-40', price: 0.65 }, { grade: 'AU-50', price: 1.25 },
      { grade: 'MS-60', price: 2.50 }, { grade: 'MS-63', price: 8 },
      { grade: 'MS-65', price: 35 }, { grade: 'MS-67', price: 350 },
    ],
    notable: ['1909-S VDB — $600 in G-4', '1914-D — $200 in G-4', '1922 Plain — $500 in G-4',
      '1943 Copper (error) — $100,000+', '1955 Doubled Die — $1,200 in VF'],
  },

  // ── Lincoln Memorial Cent ────────────────────────────────────
  {
    seriesId: 'us-cent-lincoln-memorial', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 0.05 }, { grade: 'MS-65', price: 0.50 },
      { grade: 'MS-67', price: 12 }, { grade: 'PR-65', price: 1 }, { grade: 'PR-67', price: 5 },
    ],
    notable: ['1972 Doubled Die — $200 in MS-63', '1983 Doubled Die Reverse — $200'],
  },

  // ── Lincoln Shield Cent ──────────────────────────────────────
  {
    seriesId: 'us-cent-lincoln-shield', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-65', price: 0.25 }, { grade: 'MS-67', price: 5 },
      { grade: 'PR-65', price: 1.50 }, { grade: 'PR-70', price: 18 },
    ],
    notable: ['2019-W (West Point) — $4 in MS-65', 'Reverse Proof sets command premium'],
  },

  // ── Shield Nickel ─────────────────────────────────────────────
  {
    seriesId: 'us-nickel-shield', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 18 }, { grade: 'G-4', price: 25 }, { grade: 'VG-8', price: 38 },
      { grade: 'F-12', price: 55 }, { grade: 'VF-20', price: 90 }, { grade: 'EF-40', price: 175 },
      { grade: 'AU-50', price: 325 }, { grade: 'MS-60', price: 500 }, { grade: 'MS-63', price: 1100 },
      { grade: 'MS-65', price: 4500 },
    ],
    notable: ['1877 & 1878 (proof only) — $3,500+ in PR-63', '1880 — scarcest regular date'],
  },

  // ── Liberty V Nickel ─────────────────────────────────────────
  {
    seriesId: 'us-nickel-liberty-v', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 4 }, { grade: 'G-4', price: 7 }, { grade: 'VG-8', price: 10 },
      { grade: 'F-12', price: 18 }, { grade: 'VF-20', price: 35 }, { grade: 'EF-40', price: 75 },
      { grade: 'AU-50', price: 140 }, { grade: 'MS-60', price: 220 }, { grade: 'MS-63', price: 525 },
      { grade: 'MS-65', price: 2000 },
    ],
    notable: ['1885 — $300+ in G-4', '1886 — $180+ in G-4', '1912-S — $600+ in G-4',
      '1913 (5 known) — priceless'],
  },

  // ── Buffalo Nickel ────────────────────────────────────────────
  {
    seriesId: 'us-nickel-buffalo', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 2 }, { grade: 'G-4', price: 4 }, { grade: 'VG-8', price: 7 },
      { grade: 'F-12', price: 12 }, { grade: 'VF-20', price: 22 }, { grade: 'EF-40', price: 45 },
      { grade: 'AU-50', price: 80 }, { grade: 'MS-60', price: 130 }, { grade: 'MS-63', price: 325 },
      { grade: 'MS-65', price: 1400 },
    ],
    notable: ['1916 Doubled Die — $1,500+ in G-4', '1918/7-D overdate — $700 in G-4',
      '1921-S — $130 in VG-8', '1926-S — $225 in VG-8', '1937-D Three-Legged (error) — $700 in F-12'],
  },

  // ── Jefferson Nickel ─────────────────────────────────────────
  {
    seriesId: 'us-nickel-jefferson', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.10 }, { grade: 'VF-20', price: 0.25 },
      { grade: 'EF-40', price: 0.50 }, { grade: 'AU-50', price: 1 },
      { grade: 'MS-63', price: 3 }, { grade: 'MS-65', price: 15 },
      { grade: 'MS-67', price: 250 }, { grade: 'PR-65', price: 3 }, { grade: 'PR-68', price: 80 },
    ],
    notable: ['1950-D — $25 in MS-63 (low mintage)', 'Wartime silver 1942–45 — 35% silver, face + premium',
      '2005-D Speared Bison (error) — $100+'],
  },

  // ── Barber Dime ──────────────────────────────────────────────
  {
    seriesId: 'us-dime-barber', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 3.50 }, { grade: 'G-4', price: 5 }, { grade: 'VG-8', price: 8 },
      { grade: 'F-12', price: 18 }, { grade: 'VF-20', price: 40 }, { grade: 'EF-40', price: 90 },
      { grade: 'AU-50', price: 160 }, { grade: 'MS-60', price: 250 }, { grade: 'MS-63', price: 575 },
      { grade: 'MS-65', price: 2200 },
    ],
    notable: ['1894-S (24 known) — $2,000,000+', '1895-O — $225 in G-4', '1896-S — $180 in G-4'],
  },

  // ── Mercury Dime ─────────────────────────────────────────────
  {
    seriesId: 'us-dime-mercury', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 2.50 }, { grade: 'VG-8', price: 3 },
      { grade: 'F-12', price: 4 }, { grade: 'VF-20', price: 5 },
      { grade: 'EF-40', price: 8 }, { grade: 'AU-50', price: 14 },
      { grade: 'MS-60', price: 20 }, { grade: 'MS-63', price: 40 },
      { grade: 'MS-65', price: 80 }, { grade: 'MS-67', price: 650 },
    ],
    notable: ['1916-D — $650 in G-4', '1921 & 1921-D — $45 in G-4', '1942/41 overdate — $500 in F-12',
      'Full Split Bands (FSB) command 3–5× premium in MS grades'],
  },

  // ── Roosevelt Dime ───────────────────────────────────────────
  {
    seriesId: 'us-dime-roosevelt', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.10 }, { grade: 'VF-20', price: 0.15 },
      { grade: 'EF-40', price: 0.25 }, { grade: 'MS-63', price: 0.75 },
      { grade: 'MS-65', price: 2 }, { grade: 'MS-67', price: 55 },
      { grade: 'PR-65', price: 2 }, { grade: 'PR-68', price: 25 }, { grade: 'PR-70', price: 250 },
    ],
    notable: ['1949-S — $30 in MS-65', '1955 (no S) — $60 in MS-65',
      '1968 (no S) proof — $12,000 in PR-65'],
  },

  // ── Barber Quarter ───────────────────────────────────────────
  {
    seriesId: 'us-quarter-barber', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 7 }, { grade: 'G-4', price: 10 }, { grade: 'VG-8', price: 18 },
      { grade: 'F-12', price: 38 }, { grade: 'VF-20', price: 90 }, { grade: 'EF-40', price: 215 },
      { grade: 'AU-50', price: 400 }, { grade: 'MS-60', price: 600 }, { grade: 'MS-63', price: 1400 },
      { grade: 'MS-65', price: 5500 },
    ],
    notable: ['1901-S — $3,000 in G-4', '1913-S — $550 in G-4'],
  },

  // ── Standing Liberty Quarter ─────────────────────────────────
  {
    seriesId: 'us-quarter-standing-liberty', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 8 }, { grade: 'G-4', price: 15 }, { grade: 'VG-8', price: 22 },
      { grade: 'F-12', price: 38 }, { grade: 'VF-20', price: 65 }, { grade: 'EF-40', price: 120 },
      { grade: 'AU-50', price: 200 }, { grade: 'MS-60', price: 375 }, { grade: 'MS-63', price: 800 },
      { grade: 'MS-65', price: 3500 },
    ],
    notable: ['1916 Type I — $5,000+ in G-4', '1918/7-S overdate — $900 in VF-20',
      '1923-S — $250 in F-12', 'Full Head (FH) coins command large premiums'],
  },

  // ── Washington Quarter ───────────────────────────────────────
  {
    seriesId: 'us-quarter-washington', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.25 }, { grade: 'VF-20', price: 0.50 },
      { grade: 'EF-40', price: 0.75 }, { grade: 'AU-50', price: 2 },
      { grade: 'MS-63', price: 5 }, { grade: 'MS-65', price: 20 },
      { grade: 'MS-67', price: 400 }, { grade: 'PR-65', price: 4 }, { grade: 'PR-68', price: 50 },
    ],
    notable: ['1932-D & 1932-S — $90 in VG', '1936-D — $30 in MS-63', 'Silver issues 1932–64 worth melt + premium'],
  },

  // ── 50 State Quarters ────────────────────────────────────────
  {
    seriesId: 'us-quarter-state', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-65', price: 0.50 }, { grade: 'MS-67', price: 8 },
      { grade: 'MS-68', price: 150 }, { grade: 'PR-65', price: 2 }, { grade: 'PR-70', price: 40 },
    ],
    notable: ['2004-D Wisconsin Extra Leaf (error) — $100+', 'Complete sets in MS-67 sell for $200+'],
  },

  // ── ATB Quarters ─────────────────────────────────────────────
  {
    seriesId: 'us-quarter-atb', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-65', price: 0.50 }, { grade: 'MS-67', price: 6 },
      { grade: 'PR-65', price: 2 }, { grade: 'PR-70', price: 30 },
    ],
    notable: ['5 oz Silver bullion versions issued annually — significant collector premium'],
  },

  // ── American Women Quarters ──────────────────────────────────
  {
    seriesId: 'us-quarter-women', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-65', price: 0.50 }, { grade: 'MS-67', price: 5 },
      { grade: 'PR-70', price: 25 },
    ],
    notable: ['Still in production — many grades at or near face value'],
  },

  // ── Barber Half ──────────────────────────────────────────────
  {
    seriesId: 'us-half-barber', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 12 }, { grade: 'G-4', price: 18 }, { grade: 'VG-8', price: 30 },
      { grade: 'F-12', price: 60 }, { grade: 'VF-20', price: 120 }, { grade: 'EF-40', price: 275 },
      { grade: 'AU-50', price: 525 }, { grade: 'MS-60', price: 800 }, { grade: 'MS-63', price: 2000 },
      { grade: 'MS-65', price: 8000 },
    ],
    notable: ['1892-O Micro O — $400 in VF', '1914 (proof only) — $1,400 in PR-63'],
  },

  // ── Walking Liberty Half ─────────────────────────────────────
  {
    seriesId: 'us-half-walking-liberty', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 10 }, { grade: 'G-4', price: 14 }, { grade: 'VG-8', price: 18 },
      { grade: 'F-12', price: 25 }, { grade: 'VF-20', price: 40 }, { grade: 'EF-40', price: 70 },
      { grade: 'AU-50', price: 130 }, { grade: 'MS-60', price: 225 }, { grade: 'MS-63', price: 475 },
      { grade: 'MS-65', price: 1800 },
    ],
    notable: ['1916-S — $500 in F-12', '1921 — $200 in VG', '1921-D — $200 in VG',
      '1938-D — $90 in EF-40'],
  },

  // ── Franklin Half ────────────────────────────────────────────
  {
    seriesId: 'us-half-franklin', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 11 }, { grade: 'VG-8', price: 12 },
      { grade: 'F-12', price: 14 }, { grade: 'VF-20', price: 16 },
      { grade: 'EF-40', price: 20 }, { grade: 'AU-50', price: 28 },
      { grade: 'MS-60', price: 40 }, { grade: 'MS-63', price: 80 },
      { grade: 'MS-65', price: 350 }, { grade: 'MS-66', price: 1500 },
    ],
    notable: ['1955 (low mintage) — $135 in MS-63', 'Full Bell Lines (FBL) coins command 2–5× premium'],
  },

  // ── Kennedy Half ─────────────────────────────────────────────
  {
    seriesId: 'us-half-kennedy', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.50 }, { grade: 'VF-20', price: 0.75 },
      { grade: 'EF-40', price: 1 }, { grade: 'AU-50', price: 2 },
      { grade: 'MS-63', price: 4 }, { grade: 'MS-65', price: 18 },
      { grade: 'MS-67', price: 400 }, { grade: 'PR-65', price: 5 }, { grade: 'PR-68', price: 60 },
    ],
    notable: ['1964 (90% silver) — worth melt ~$8', '1965–70 (40% silver) — melt + premium',
      '1970-D — $50 in MS-63 (low mintage)'],
  },

  // ── Trade Dollar ─────────────────────────────────────────────
  {
    seriesId: 'us-dollar-trade', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 80 }, { grade: 'G-4', price: 100 }, { grade: 'VG-8', price: 130 },
      { grade: 'F-12', price: 175 }, { grade: 'VF-20', price: 250 }, { grade: 'EF-40', price: 400 },
      { grade: 'AU-50', price: 600 }, { grade: 'MS-60', price: 900 }, { grade: 'MS-63', price: 2500 },
      { grade: 'MS-65', price: 9500 },
    ],
    notable: ['1878-CC — $700 in EF', '1885 (proof only, 5 known) — $4,000,000+'],
  },

  // ── Morgan Dollar ────────────────────────────────────────────
  {
    seriesId: 'us-dollar-morgan', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 25 }, { grade: 'G-4', price: 32 }, { grade: 'VG-8', price: 38 },
      { grade: 'F-12', price: 42 }, { grade: 'VF-20', price: 50 }, { grade: 'EF-40', price: 65 },
      { grade: 'AU-50', price: 90 }, { grade: 'MS-60', price: 120 }, { grade: 'MS-63', price: 250 },
      { grade: 'MS-65', price: 1200 }, { grade: 'MS-67', price: 18000 },
    ],
    notable: ['1893-S — $5,000 in G-4 (rarest Morgan)', '1895 (proof only) — $30,000+ in PR-60',
      '1889-CC — $800 in G-4', '1879-CC Capped Die — scarce variety'],
  },

  // ── Peace Dollar ─────────────────────────────────────────────
  {
    seriesId: 'us-dollar-peace', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 25 }, { grade: 'G-4', price: 30 }, { grade: 'VG-8', price: 35 },
      { grade: 'F-12', price: 40 }, { grade: 'VF-20', price: 48 }, { grade: 'EF-40', price: 60 },
      { grade: 'AU-50', price: 75 }, { grade: 'MS-60', price: 100 }, { grade: 'MS-63', price: 175 },
      { grade: 'MS-65', price: 700 }, { grade: 'MS-67', price: 12000 },
    ],
    notable: ['1921 High Relief — $180 in VF', '1928 — $200 in EF', '1934-S — $250 in EF'],
  },

  // ── Eisenhower Dollar ────────────────────────────────────────
  {
    seriesId: 'us-dollar-eisenhower', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 4 }, { grade: 'MS-65', price: 18 },
      { grade: 'MS-67', price: 600 }, { grade: 'PR-65', price: 6 }, { grade: 'PR-68', price: 60 },
    ],
    notable: ['1972 Type 2 (variety) — $350 in MS-63', 'Silver Uncirculated issues add bullion premium'],
  },

  // ── SBA Dollar ──────────────────────────────────────────────
  {
    seriesId: 'us-dollar-sba', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 3 }, { grade: 'MS-65', price: 8 },
      { grade: 'MS-67', price: 200 }, { grade: 'PR-65', price: 4 }, { grade: 'PR-68', price: 45 },
    ],
    notable: ['1981-S Type 2 proof — $50 in PR-65', 'Complete set (all mints) in MS-65 ~$100'],
  },

  // ── Sacagawea Dollar ─────────────────────────────────────────
  {
    seriesId: 'us-dollar-sacagawea', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 2 }, { grade: 'MS-65', price: 5 },
      { grade: 'MS-67', price: 65 }, { grade: 'PR-65', price: 3 }, { grade: 'PR-70', price: 85 },
    ],
    notable: ['2000-P "Cheerios" minted for cereal promotion — $500 in MS-65',
      '2000-W (experimental) — rare, $400+'],
  },

  // ── Victorian Penny ──────────────────────────────────────────
  {
    seriesId: 'gb-penny-victorian', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 2 }, { grade: 'G-4', price: 4 }, { grade: 'VG-8', price: 8 },
      { grade: 'F-12', price: 18 }, { grade: 'VF-20', price: 45 }, { grade: 'EF-40', price: 120 },
      { grade: 'AU-50', price: 200 }, { grade: 'MS-63', price: 500 }, { grade: 'MS-65', price: 2000 },
    ],
    notable: ['1869 — £250+ in VF', '1882-H — scarce', '1933 (7 known, patterns) — priceless'],
  },

  // ── Decimal Penny ────────────────────────────────────────────
  {
    seriesId: 'gb-penny-decimal', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 0.25 }, { grade: 'MS-65', price: 1.50 },
      { grade: 'MS-67', price: 40 }, { grade: 'PR-65', price: 2 }, { grade: 'PR-70', price: 30 },
    ],
    notable: ['1971 new penny — minor premiums in top grade', '2009 Kew Gardens 50p is most valuable modern UK coin'],
  },

  // ── Canadian Large Cent ──────────────────────────────────────
  {
    seriesId: 'ca-cent-large', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 2 }, { grade: 'G-4', price: 3.50 }, { grade: 'VG-8', price: 6 },
      { grade: 'F-12', price: 12 }, { grade: 'VF-20', price: 25 }, { grade: 'EF-40', price: 60 },
      { grade: 'AU-50', price: 110 }, { grade: 'MS-63', price: 300 }, { grade: 'MS-65', price: 1200 },
    ],
    notable: ['1858 — first Canadian cent; $200+ in EF', '1859 Narrow 9 double punch — $1,500 in VF'],
  },

  // ── Canadian Small Cent ──────────────────────────────────────
  {
    seriesId: 'ca-cent-small', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'G-4', price: 0.25 }, { grade: 'VG-8', price: 0.50 },
      { grade: 'F-12', price: 0.75 }, { grade: 'VF-20', price: 1 },
      { grade: 'EF-40', price: 2 }, { grade: 'MS-63', price: 5 },
      { grade: 'MS-65', price: 25 }, { grade: 'MS-67', price: 250 },
    ],
    notable: ['1936 "dot" — $400,000+ (only 3 known in MS)', '1955 "No Shoulder Fold" — premium'],
  },

  // ── Australian Dollar ────────────────────────────────────────
  {
    seriesId: 'au-dollar-mob', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 1.25 }, { grade: 'MS-65', price: 5 },
      { grade: 'MS-67', price: 80 }, { grade: 'PR-65', price: 8 }, { grade: 'PR-70', price: 65 },
    ],
    notable: ['1984 first year — slight premium in MS-65+', 'Mule errors (wrong obverse) extremely rare'],
  },

  // ── Caballito Peso ───────────────────────────────────────────
  {
    seriesId: 'mx-peso-caballito', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 30 }, { grade: 'G-4', price: 50 }, { grade: 'VG-8', price: 90 },
      { grade: 'F-12', price: 175 }, { grade: 'VF-20', price: 350 }, { grade: 'EF-40', price: 650 },
      { grade: 'AU-50', price: 1100 }, { grade: 'MS-63', price: 3500 }, { grade: 'MS-65', price: 12000 },
    ],
    notable: ['1910 first year — slight premium', '1914 (last year) — scarcer'],
  },

  // ── Cap & Rays Peso ──────────────────────────────────────────
  {
    seriesId: 'mx-peso-cap-rays', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'AG-3', price: 20 }, { grade: 'G-4', price: 35 }, { grade: 'VG-8', price: 60 },
      { grade: 'F-12', price: 110 }, { grade: 'VF-20', price: 200 }, { grade: 'EF-40', price: 400 },
      { grade: 'AU-50', price: 700 }, { grade: 'MS-63', price: 2500 },
    ],
    notable: ['8 mint marks — Zacatecas, Guanajuato, Mexico City, San Luis Potosí, etc.',
      'Transitional dates scarce'],
  },

  // ── Japan Modern Yen ─────────────────────────────────────────
  {
    seriesId: 'jp-yen1-modern', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-63', price: 0.50 }, { grade: 'MS-65', price: 2 },
      { grade: 'MS-67', price: 30 }, { grade: 'PR-65', price: 3 }, { grade: 'PR-68', price: 20 },
    ],
    notable: ['1948 (first year) — ¥500+ in MS', 'Pre-1989 Showa era dates slightly higher demand'],
  },

  // ── Japan 500 Yen Bimetal ────────────────────────────────────
  {
    seriesId: 'jp-yen500-bimetal', lastUpdated: TODAY, source: SOURCE,
    grades: [
      { grade: 'MS-65', price: 5 }, { grade: 'MS-67', price: 35 },
      { grade: 'PR-65', price: 8 }, { grade: 'PR-70', price: 60 },
    ],
    notable: ['2021 new design with clad core — first year premium', 'Full mint sets command 2–3× face'],
  },
]
