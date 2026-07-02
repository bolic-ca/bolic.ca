export const screenshots = [
  {
    id: 'home',
    label: 'Home',
    alt: 'Bolic home screen with upcoming workout and recent session history',
    capability: null,
  },
  {
    id: 'programs',
    label: 'Programs',
    alt: 'Bolic program builder with training day templates',
    capability: '01',
  },
  {
    id: 'exercises',
    label: 'Exercises',
    alt: 'Bolic exercise library with sets, reps, and notes',
    capability: '02',
  },
  {
    id: 'training-session',
    label: 'Live Session',
    alt: 'Bolic live workout tracking with set logging',
    capability: '03',
  },
  {
    id: 'stats',
    label: 'Stats',
    alt: 'Bolic stats dashboard with streaks and volume',
    capability: '04',
  },
  {
    id: 'settings',
    label: 'Settings',
    alt: 'Bolic app settings and preferences',
    capability: null,
  },
  {
    id: 'data-management',
    label: 'Data',
    alt: 'Bolic data export and management options',
    capability: null,
  },
] as const

export type ScreenshotId = (typeof screenshots)[number]['id']
