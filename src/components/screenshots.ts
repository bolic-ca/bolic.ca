export const screenshotIds = [
  'home',
  'program',
  'exercises',
  'create-exercise',
  'training-session',
  'training-session-differs',
  'exercise-history',
  'stats',
  'settings',
] as const

export type ScreenshotId = (typeof screenshotIds)[number]
