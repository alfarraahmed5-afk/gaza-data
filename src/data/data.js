export const casualties = {
  confirmed: '73,188+',
  lancet: '75,200+',
  mpidr: '100,000+',
  lancetUpper: '186,000+',
  children: '20,000+',
  journalists: 254,
  unrwaStaff: 382,
  wounded: '166,000+',
  aidSeekers: '2,610+',
  medicalPersonnel: '1,400+',
}

export const tollTimeline = {
  labels: ['Oct 23','Dec 23','Feb 24','Apr 24','Jun 24','Aug 24','Oct 24','Dec 24','Feb 25','Apr 25','Jun 25','Aug 25','Oct 25','Dec 25','Feb 26'],
  data:   [3000, 20000, 28000, 34000, 38000, 41000, 44000, 46000, 48000, 52000, 57000, 62000, 66000, 71000, 73000],
}

export const lifeExpectancy = {
  labels: ['Pre-war','2023','2024'],
  data: [74, 41, 39],
  colors: ['#1a7a5e','#c0392b','#8b1a1a'],
}

export const demographics = [
  { label: 'Children (~30%)', value: '20,000+', pct: 30, color: '#c0392b' },
  { label: 'Women (~26%)', value: '~19,000', pct: 26, color: '#993c1d' },
  { label: 'Aid seekers at food distribution', value: '2,610+', pct: 18, color: '#6b6860' },
  { label: 'Medical personnel', value: '1,400+', pct: 12, color: '#6b6860' },
]

export const infrastructure = [
  { label: 'Housing stock damaged or destroyed', pct: 92, note: '92%' },
  { label: 'All structures', pct: 70, note: '70%' },
  { label: 'Schools damaged or destroyed', pct: 97.5, note: '97.5%' },
  { label: 'Mosques destroyed', pct: 60, note: '340+' },
  { label: 'Cultural & heritage sites', pct: 55, note: '200+ sites' },
  { label: 'Agricultural land destroyed or inaccessible', pct: 80, note: '~80%' },
  { label: 'Population below poverty line', pct: 100, note: '100%' },
]

export const healthcare = {
  labels: ['Hospitals', 'Primary health centres', 'UNRWA clinics', 'Reconstructive surgeons'],
  preWar: [36, 181, 22, 8],
  current: [14, 63, 4, 0],
}

export const economy = [
  { label: 'Unemployment', value: '80%', sub: 'Was 49% pre-war' },
  { label: 'Inflation', value: '240%', sub: 'Due to blockade' },
  { label: 'GDP per capita', value: '$161', sub: 'Entire pop. below poverty line' },
  { label: 'Children out of school', value: '637,000+', sub: 'UNICEF 2025' },
]

export const warOf2014 = {
  labels: ['Civilians killed','Children killed','Homes destroyed','Houses of worship','Kindergartens','Medical facilities'],
  gaza:   [1600, 550, 18000, 203, 285, 73],
  israel: [6, 1, 1, 2, 1, 0],
  ratios: [
    { label: 'Civilians killed', ratio: '270:1', gaza: 1600, israel: 6 },
    { label: 'Children killed', ratio: '550:1', gaza: 550, israel: 1 },
    { label: 'Medical facilities', ratio: '73:0', gaza: 73, israel: 0 },
    { label: 'Homes destroyed', ratio: '18,000:1', gaza: 18000, israel: 1 },
  ]
}

export const conflictTimeline = [
  { year: 'Summer 2006', op: 'Summer Rains + Autumn Clouds', detail: '8 civilians killed in Gaza Beach attack. 4-month then 1-week operations.' },
  { year: '2008–2009', op: 'Operation Cast Lead', detail: '1,400+ Palestinians killed. White phosphorus on civilian areas. First ground invasion since 2005. 2.5M tonnes of rubble.' },
  { year: '2012', op: 'Operation Pillar of Defense', detail: '158 Palestinians killed across two operations.' },
  { year: '2014', op: 'Operation Protective Edge', detail: '2,200+ killed, 10,000+ injured. 18,000 homes destroyed. Battle of Shuja\'iyya: 120 killed in one neighbourhood.' },
  { year: '2018', op: 'Great March of Return', detail: '223 killed in border protests. 8,000+ permanently disabled from live ammunition.' },
  { year: 'May 2021', op: 'Operation Guardian of the Walls', detail: '1,042 housing units destroyed. Samir Mansour bookstore — 100,000 books destroyed. Top doctors killed.' },
  { year: 'Oct 2023 — Present', op: 'Ongoing conflict', detail: '73,188+ confirmed killed. 90% of population displaced. 92% of housing damaged or destroyed.', current: true },
]

export const sarajevoComparison = {
  labels: ['Civilians killed','Buildings destroyed (%)','Utilities disabled (%)','Displaced (% pop)','Duration (months)'],
  sarajevo: [11000, 60, 80, 40, 44],
  gaza:     [73000, 92, 95, 90, 17],
}

export const recoveryConditions = [
  { factor: 'Ceasefire and end of hostilities', sarajevo: 'yes', gaza: 'no' },
  { factor: 'International aid access (World Bank, EU, USAID)', sarajevo: 'yes', gaza: 'no' },
  { factor: 'Political sovereignty', sarajevo: 'yes', gaza: 'no' },
  { factor: 'No ongoing blockade', sarajevo: 'yes', gaza: 'no' },
  { factor: 'Community involvement in rebuilding', sarajevo: 'yes', gaza: 'yes' },
  { factor: 'Cultural identity preserved', sarajevo: 'yes', gaza: 'partial' },
  { factor: 'Functional government', sarajevo: 'yes', gaza: 'partial' },
  { factor: 'Healthcare system operational', sarajevo: 'yes', gaza: 'no' },
]

export const reconstructionTimeline = {
  labels: ['Infrastructure','Hospitals','Schools','Economy','Full reconstruction'],
  sarajevo: [2, 3, 2, 10, 25],
  gaza:     [10, 15, 8, 25, 40],
}

export const lessons = [
  {
    title: 'Community involvement',
    icon: '👥',
    sarajevo: 'Residents actively shaped rebuilding priorities — giving projects legitimacy and ensuring local needs were met.',
    gaza: '61.5% of survey respondents feel their needs are not considered. Communities are excluded from decisions.',
  },
  {
    title: 'Cultural heritage preservation',
    icon: '🏛️',
    sarajevo: 'Physical restoration of heritage largely succeeded, though ethnic divisions created new cultural fractures.',
    gaza: '200+ cultural sites destroyed, 340+ mosques. Heritage preservation impossible during active conflict.',
  },
  {
    title: 'Holistic recovery',
    icon: '🔄',
    sarajevo: 'Physical-first approach led to persistent poverty and corruption. The lesson: recovery must be integrated.',
    gaza: 'Full holistic recovery is structurally impossible without political resolution and lifting of the blockade.',
  },
  {
    title: 'International coordination',
    icon: '🌐',
    sarajevo: 'Strong framework: Dayton Accords, World Bank, EU, USAID provided governance structure for reconstruction.',
    gaza: 'UNRWA operations severely restricted since early 2025. Humanitarian access blocked or limited.',
  },
  {
    title: 'Anti-corruption & governance',
    icon: '⚖️',
    sarajevo: 'A persisting problem 30 years post-war — governance failures slowed and distorted reconstruction.',
    gaza: 'Reconstruction cannot begin under active conflict. Governance structures remain unresolved.',
  },
]

export const surveyData = {
  total: 39,
  stats: [
    { label: 'Directly affected by conflict', value: 61.5, color: '#c0392b' },
    { label: 'Daily life severely impacted', value: 100, color: '#c0392b' },
    { label: 'Noticed infrastructure damage', value: 84.6, color: '#6b6860' },
    { label: 'Believe planning can mitigate impact', value: 97.4, color: '#1a7a5e' },
  ],
  municipalities: [
    { label: 'Yes', value: 53.8, color: '#1a7a5e' },
    { label: 'No', value: 38.5, color: '#c0392b' },
    { label: "Don't know", value: 7.7, color: '#6b6860' },
  ],
  residents: [
    { label: 'No', value: 61.5, color: '#c0392b' },
    { label: 'Yes', value: 38.5, color: '#1a7a5e' },
  ],
  voices: [
    "Our house was bombed several months ago, and we were all displaced, the family was separated. It made life difficult.",
    "The bombings take society back decades. It destroyed what was modernized in the area.",
    "Before planning, review and satisfy the needs of the affected.",
    "Ask my martyred brother.",
    "Constructing several routes to hospitals, providing water tanks for each area for emergencies.",
  ],
}

export const sources = [
  { cat: 'Primary Research', items: ['Al Farra, Ahmed. The Impacts of Urban Warfare on Urban Planning in Gaza Strip. AUS, 2023–24.', 'Survey of 39 participants, Islamic University of Gaza.'] },
  { cat: 'UN Agencies', items: ['OCHA 2024–2026', 'UNRWA 2025–2026', 'UNICEF 2025', 'WHO 2025–2026', 'UNEP 2024', 'UN Habitat 2020'] },
  { cat: 'Academic', items: ['The Lancet Global Health, February 2026', 'Max Planck Institute for Demographic Research, October 2025', 'PCBS 2017, 2020'] },
  { cat: 'Human Rights', items: ['Human Rights Watch 2021–2024', "B'Tselem 2013–2024", 'IMEU 2023–2026', 'CPJ / RSF press freedom data'] },
  { cat: 'Economic', items: ['UNCTAD 2024–2026', 'World Bank 2025', 'Palestinian MoH data'] },
]
