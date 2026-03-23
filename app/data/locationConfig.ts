export interface LocationMeta {
  key: string
  nearbySlug: string[]
  displayName: string
  areaServedName: string
}

export const locationConfig: Record<string, LocationMeta> = {
  // --- Zürich City ---
  'zurich': {
    key: 'zurich',
    nearbySlug: ['kreis-1', 'kreis-2', 'kreis-3', 'kreis-4', 'zollikon', 'kilchberg'],
    displayName: 'Zürich',
    areaServedName: 'Zürich',
  },

  // --- Zürich Kreis 1-12 ---
  'kreis-1': {
    key: 'kreis1',
    nearbySlug: ['kreis-2', 'kreis-4', 'kreis-5', 'kreis-8'],
    displayName: 'Kreis 1 (Altstadt)',
    areaServedName: 'Zürich Kreis 1 (Altstadt)',
  },
  'kreis-2': {
    key: 'kreis2',
    nearbySlug: ['kreis-1', 'kreis-3', 'kilchberg', 'adliswil'],
    displayName: 'Kreis 2 (Enge)',
    areaServedName: 'Zürich Kreis 2 (Enge, Wollishofen)',
  },
  'kreis-3': {
    key: 'kreis3',
    nearbySlug: ['kreis-2', 'kreis-4', 'kreis-9', 'adliswil'],
    displayName: 'Kreis 3 (Wiedikon)',
    areaServedName: 'Zürich Kreis 3 (Wiedikon)',
  },
  'kreis-4': {
    key: 'kreis4',
    nearbySlug: ['kreis-1', 'kreis-3', 'kreis-5', 'kreis-9'],
    displayName: 'Kreis 4 (Aussersihl)',
    areaServedName: 'Zürich Kreis 4 (Aussersihl)',
  },
  'kreis-5': {
    key: 'kreis5',
    nearbySlug: ['kreis-4', 'kreis-6', 'kreis-1', 'kreis-10'],
    displayName: 'Kreis 5 (Industriequartier)',
    areaServedName: 'Zürich Kreis 5 (Industriequartier)',
  },
  'kreis-6': {
    key: 'kreis6',
    nearbySlug: ['kreis-5', 'kreis-7', 'kreis-1', 'kreis-10'],
    displayName: 'Kreis 6 (Unterstrass)',
    areaServedName: 'Zürich Kreis 6 (Unterstrass, Oberstrass)',
  },
  'kreis-7': {
    key: 'kreis7',
    nearbySlug: ['kreis-6', 'kreis-8', 'kreis-11', 'zollikon'],
    displayName: 'Kreis 7 (Fluntern)',
    areaServedName: 'Zürich Kreis 7 (Fluntern, Hottingen)',
  },
  'kreis-8': {
    key: 'kreis8',
    nearbySlug: ['kreis-1', 'kreis-7', 'kreis-2', 'zollikon'],
    displayName: 'Kreis 8 (Riesbach)',
    areaServedName: 'Zürich Kreis 8 (Riesbach, Seefeld)',
  },
  'kreis-9': {
    key: 'kreis9',
    nearbySlug: ['kreis-3', 'kreis-4', 'kreis-10', 'adliswil'],
    displayName: 'Kreis 9 (Altstetten)',
    areaServedName: 'Zürich Kreis 9 (Altstetten, Albisrieden)',
  },
  'kreis-10': {
    key: 'kreis10',
    nearbySlug: ['kreis-9', 'kreis-5', 'kreis-11', 'hoengg'],
    displayName: 'Kreis 10 (Höngg)',
    areaServedName: 'Zürich Kreis 10 (Höngg, Wipkingen)',
  },
  'kreis-11': {
    key: 'kreis11',
    nearbySlug: ['kreis-10', 'kreis-12', 'oerlikon', 'kreis-6'],
    displayName: 'Kreis 11 (Affoltern)',
    areaServedName: 'Zürich Kreis 11 (Affoltern, Oerlikon, Seebach)',
  },
  'kreis-12': {
    key: 'kreis12',
    nearbySlug: ['kreis-11', 'kreis-6', 'kreis-7', 'oerlikon'],
    displayName: 'Kreis 12 (Schwamendingen)',
    areaServedName: 'Zürich Kreis 12 (Schwamendingen)',
  },

  // --- Zürich Neighborhoods ---
  'oerlikon': {
    key: 'oerlikon',
    nearbySlug: ['kreis-11', 'kreis-12', 'kreis-6', 'wipkingen'],
    displayName: 'Oerlikon',
    areaServedName: 'Zürich-Oerlikon',
  },
  'hoengg': {
    key: 'hoengg',
    nearbySlug: ['kreis-10', 'wipkingen', 'kreis-9', 'kreis-11'],
    displayName: 'Höngg',
    areaServedName: 'Zürich-Höngg',
  },
  'wipkingen': {
    key: 'wipkingen',
    nearbySlug: ['hoengg', 'kreis-10', 'kreis-6', 'oerlikon'],
    displayName: 'Wipkingen',
    areaServedName: 'Zürich-Wipkingen',
  },

  // --- Zürichsee right bank (Goldküste) ---
  'zollikon': {
    key: 'zollikon',
    nearbySlug: ['kreis-8', 'kuesnacht', 'kreis-7', 'erlenbach'],
    displayName: 'Zollikon',
    areaServedName: 'Zollikon',
  },
  'kuesnacht': {
    key: 'kuesnacht',
    nearbySlug: ['zollikon', 'erlenbach', 'kreis-8', 'herrliberg'],
    displayName: 'Küsnacht',
    areaServedName: 'Küsnacht',
  },
  'erlenbach': {
    key: 'erlenbach',
    nearbySlug: ['kuesnacht', 'herrliberg', 'zollikon', 'meilen'],
    displayName: 'Erlenbach',
    areaServedName: 'Erlenbach',
  },
  'herrliberg': {
    key: 'herrliberg',
    nearbySlug: ['erlenbach', 'meilen', 'kuesnacht', 'uetikon'],
    displayName: 'Herrliberg',
    areaServedName: 'Herrliberg',
  },
  'meilen': {
    key: 'meilen',
    nearbySlug: ['herrliberg', 'uetikon', 'erlenbach', 'maennedorf'],
    displayName: 'Meilen',
    areaServedName: 'Meilen',
  },
  'uetikon': {
    key: 'uetikon',
    nearbySlug: ['meilen', 'maennedorf', 'herrliberg', 'staefa'],
    displayName: 'Uetikon am See',
    areaServedName: 'Uetikon am See',
  },
  'maennedorf': {
    key: 'maennedorf',
    nearbySlug: ['uetikon', 'staefa', 'meilen', 'oetwil'],
    displayName: 'Männedorf',
    areaServedName: 'Männedorf',
  },
  'staefa': {
    key: 'staefa',
    nearbySlug: ['maennedorf', 'oetwil', 'uetikon', 'meilen'],
    displayName: 'Stäfa',
    areaServedName: 'Stäfa',
  },
  'oetwil': {
    key: 'oetwil',
    nearbySlug: ['staefa', 'maennedorf', 'uetikon', 'meilen'],
    displayName: 'Oetwil am See',
    areaServedName: 'Oetwil am See',
  },

  // --- Zürichsee left bank ---
  'kilchberg': {
    key: 'kilchberg',
    nearbySlug: ['rueschlikon', 'adliswil', 'kreis-2', 'thalwil'],
    displayName: 'Kilchberg',
    areaServedName: 'Kilchberg',
  },
  'rueschlikon': {
    key: 'rueschlikon',
    nearbySlug: ['kilchberg', 'thalwil', 'adliswil', 'kreis-2'],
    displayName: 'Rüschlikon',
    areaServedName: 'Rüschlikon',
  },
  'thalwil': {
    key: 'thalwil',
    nearbySlug: ['rueschlikon', 'horgen', 'kilchberg', 'adliswil'],
    displayName: 'Thalwil',
    areaServedName: 'Thalwil',
  },
  'adliswil': {
    key: 'adliswil',
    nearbySlug: ['kilchberg', 'kreis-3', 'kreis-9', 'rueschlikon'],
    displayName: 'Adliswil',
    areaServedName: 'Adliswil',
  },
  'horgen': {
    key: 'horgen',
    nearbySlug: ['thalwil', 'waedenswil', 'rueschlikon', 'au'],
    displayName: 'Horgen',
    areaServedName: 'Horgen',
  },
  'waedenswil': {
    key: 'waedenswil',
    nearbySlug: ['horgen', 'richterswil', 'au', 'thalwil'],
    displayName: 'Wädenswil',
    areaServedName: 'Wädenswil',
  },
  'richterswil': {
    key: 'richterswil',
    nearbySlug: ['waedenswil', 'horgen', 'wollerau', 'pfaeffikon'],
    displayName: 'Richterswil',
    areaServedName: 'Richterswil',
  },
  'au': {
    key: 'au',
    nearbySlug: ['waedenswil', 'horgen', 'richterswil', 'thalwil'],
    displayName: 'Au ZH',
    areaServedName: 'Au ZH',
  },

  // --- Schwyz / March ---
  'wollerau': {
    key: 'wollerau',
    nearbySlug: ['freienbach', 'pfaeffikon', 'richterswil', 'schwyz'],
    displayName: 'Wollerau',
    areaServedName: 'Wollerau',
  },
  'freienbach': {
    key: 'freienbach',
    nearbySlug: ['pfaeffikon', 'wollerau', 'rapperswil-jona', 'richterswil'],
    displayName: 'Freienbach',
    areaServedName: 'Freienbach',
  },
  'pfaeffikon': {
    key: 'pfaeffikon',
    nearbySlug: ['freienbach', 'wollerau', 'rapperswil-jona', 'schwyz'],
    displayName: 'Pfäffikon SZ',
    areaServedName: 'Pfäffikon SZ',
  },

  // --- Regional ---
  'rapperswil-jona': {
    key: 'rapperswilJona',
    nearbySlug: ['pfaeffikon', 'freienbach', 'staefa', 'wollerau'],
    displayName: 'Rapperswil-Jona',
    areaServedName: 'Rapperswil-Jona',
  },
  'schwyz': {
    key: 'schwyz',
    nearbySlug: ['wollerau', 'pfaeffikon', 'zug', 'luzern'],
    displayName: 'Schwyz',
    areaServedName: 'Schwyz',
  },
  'zug': {
    key: 'zug',
    nearbySlug: ['schwyz', 'luzern', 'zurich', 'wollerau'],
    displayName: 'Zug',
    areaServedName: 'Zug',
  },
  'luzern': {
    key: 'luzern',
    nearbySlug: ['zug', 'schwyz', 'zurich', 'aargau'],
    displayName: 'Luzern',
    areaServedName: 'Luzern',
  },
  'aargau': {
    key: 'aargau',
    nearbySlug: ['zurich', 'zug', 'luzern', 'schwyz'],
    displayName: 'Aargau',
    areaServedName: 'Aargau',
  },
}
