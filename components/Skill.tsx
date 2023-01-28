import Logo from "./Logo";

function Skill({ name }: { name: string }) {
  return (
    <li className="relative text-center">
      <Logo
        icon={name}
        className="w-20 h-20 p-2 mx-auto rounded bg-neutral-100/75 dark:bg-neutral-100/25"
      />
      <Logo
        style={{ display: "none" }}
        icon={name}
        className="-z-10 absolute inset-0 scale-110 blur-2xl !block h-20 w-20 mx-auto"
      />
      <span className="block mt-2 text-sm font-medium whitespace-nowrap">
        {name}
      </span>
    </li>
  );
}

export default Skill;
