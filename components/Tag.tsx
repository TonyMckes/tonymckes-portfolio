import { Topic } from "types/projects-res-types";

function Tag({ name }: Omit<Topic, "id">) {
  return (
    <li className="inline px-2 py-1 text-xs border rounded-full whitespace-nowrap border-primary-200">
      {name}
    </li>
  );
}

export default Tag;
