import Icon from "./Icon";

function Skill({ name }: { name: string }) {
  return (
    <li className="relative text-center">
      <Icon icon={name} className="w-20 h-20 p-2 mx-auto bg-white/50" />
      <Icon
        style={{ display: "none" /* width: "5rem", height: "5rem" */ }}
        icon={name}
        className="-z-10 absolute inset-0 scale-110 blur-2xl !block h-20 w-20 mx-auto duration-200 styles.logoBackground"
        aria-hidden
      />
      <span className="block mt-2 text-sm font-semibold whitespace-nowrap">
        {name}
      </span>
    </li>
  );
}

export default Skill;
