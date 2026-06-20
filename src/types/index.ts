export interface Country {
  id: string
  name: string
  flag: string      // emoji flag
  currency: string  // e.g. "US Dollar"
}

export interface Denomination {
  id: string
  countryId: string
  name: string          // e.g. "Dime"
  valueLabel: string    // e.g. "10¢"
  metalColor: 'gold' | 'silver' | 'copper' | 'nickel' | 'bronze' | 'bimetal'
  description: string
}

export interface Series {
  id: string
  denominationId: string
  name: string           // e.g. "Mercury Dime"
  yearStart: number
  yearEnd: number | null // null = present
  description: string
  composition: string    // e.g. "90% Silver, 10% Copper"
  diameter: string       // e.g. "17.9 mm"
  weight: string         // e.g. "2.50 g"
  designer: string
  obverseHint: string    // text description of obverse for SVG
  reverseHint: string
  numistaCategoryId?: string  // for live API lookups later
}

export type Grade =
  | 'P-1' | 'FR-2' | 'AG-3'
  | 'G-4' | 'G-6'
  | 'VG-8' | 'VG-10'
  | 'F-12' | 'F-15'
  | 'VF-20' | 'VF-25' | 'VF-30' | 'VF-35'
  | 'EF-40' | 'EF-45'
  | 'AU-50' | 'AU-55' | 'AU-58'
  | 'MS-60' | 'MS-61' | 'MS-62' | 'MS-63' | 'MS-64' | 'MS-65' | 'MS-66' | 'MS-67' | 'MS-68'
  | 'PR-60' | 'PR-63' | 'PR-65' | 'PR-67' | 'PR-68' | 'PR-70'

export interface GradePrice {
  grade: Grade
  price: number | null  // null = not applicable / very rare
}

export interface SeriesPrice {
  seriesId: string
  lastUpdated: string   // ISO date
  source: string        // e.g. "Mock Data" or "Numista"
  grades: GradePrice[]
  notable: string[]     // key dates or varieties e.g. "1916-D — $1,500+ in G-4"
}
