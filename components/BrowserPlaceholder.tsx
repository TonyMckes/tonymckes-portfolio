import { ReactNode } from 'react'
import Icon from './Icon'

interface Props {
  url: string | undefined
  children?: ReactNode
}

const arrowIcons = [
  'material-symbols:arrow-back-ios-new-rounded',
  'material-symbols:arrow-forward-ios-rounded',
]

function BrowserPlaceholder({
  children,
  url = 'https://github.com/tonymckes',
}: Props) {
  return (
    <div className="media relative aspect-video rounded bg-neutral-200 pb-px dark:bg-neutral-800 md:self-center md:[grid-area:media]">
      <div className="grid grid-cols-5 py-1">
        <div className="flex items-center gap-3 px-2">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-red-400 hover:bg-red-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-orange-400 hover:bg-orange-400/50"></div>
            <div className="h-2 w-2 rounded-full bg-green-400 hover:bg-green-400/50"></div>
          </div>
          <div className="hidden w-full gap-1 lg:flex">
            {arrowIcons.map((icon) => (
              <div
                className="flex h-4 w-4 items-center justify-center rounded bg-neutral-100 text-neutral-500 hover:bg-white dark:bg-neutral-900 dark:hover:bg-black"
                key={icon}
              >
                <Icon icon={icon} size="12" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-start-2 col-end-5 h-4 rounded bg-neutral-100 hover:bg-white dark:bg-neutral-900 dark:hover:bg-black">
          <div className="text-center text-[.60rem] text-neutral-700 dark:text-neutral-300">
            {url}
          </div>
        </div>

        <div className="col-start-5"></div>
      </div>
      {children}
    </div>
  )
}

export default BrowserPlaceholder
