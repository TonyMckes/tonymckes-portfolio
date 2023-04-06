import { ReactNode } from "react";
import Icon from "./Icon";

interface Props {
  url: string | undefined;
  children?: ReactNode;
}

const arrowIcons = [
  "material-symbols:arrow-back-ios-new-rounded",
  "material-symbols:arrow-forward-ios-rounded",
];

function BrowserPlaceholder({
  children,
  url = "https://github.com/tonymckes",
}: Props) {
  return (
    <div className="pb-px rounded bg-neutral-200 dark:bg-neutral-800 media aspect-video md:self-center md:[grid-area:media]">
      <div className="grid grid-cols-5 py-1">
        <div className="flex items-center gap-3 px-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-400 rounded-full hover:bg-red-400/50"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full hover:bg-orange-400/50"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full hover:bg-green-400/50"></div>
          </div>
          <div className="hidden w-full gap-1 lg:flex">
            {arrowIcons.map((icon) => (
              <div
                className="flex items-center justify-center w-4 h-4 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:bg-white dark:hover:bg-black"
                key={icon}
              >
                <Icon icon={icon} size="12" />
              </div>
            ))}
          </div>
        </div>

        <div className="h-4 col-start-2 col-end-5 rounded bg-neutral-100 hover:bg-white dark:hover:bg-black dark:bg-neutral-900">
          <div className="text-[.60rem] text-center dark:text-neutral-300 text-neutral-700">
            {url}
          </div>
        </div>

        <div className="col-start-5"></div>
      </div>
      {children}
    </div>
  );
}

export default BrowserPlaceholder;
