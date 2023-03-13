import { Topic } from "types/repositories-types";

function Tag({ name }: Omit<Topic, "id">) {
  return (
    <li className="inline px-2 py-1 text-xs font-semibold border rounded-full whitespace-nowrap border-primary-300 dark:border-primary-700">
      {name}
    </li>
  );
}

export default Tag;
