import 'server-only'

import { tw } from 'lib/helpers'

function Blob({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={tw(
        'pointer-events-none absolute hidden animate-blob rounded-full opacity-30 mix-blend-multiply blur-xl dark:opacity-50 dark:mix-blend-darken md:block md:blur-2xl lg:blur-3xl',
        className
      )}
    />
  )
}

export default Blob
