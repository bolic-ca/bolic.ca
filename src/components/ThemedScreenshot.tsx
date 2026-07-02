import type { ScreenshotId } from './screenshots'

type ThemedScreenshotProps = {
  id: ScreenshotId
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export default function ThemedScreenshot({ id, alt, className = '', loading = 'lazy' }: ThemedScreenshotProps) {
  return (
    <>
      <img
        src={`/screenshots/${id}-light.png`}
        alt={alt}
        loading={loading}
        className={`dark:hidden ${className}`}
      />
      <img
        src={`/screenshots/${id}-dark.png`}
        alt={alt}
        loading={loading}
        className={`hidden dark:block ${className}`}
      />
    </>
  )
}
