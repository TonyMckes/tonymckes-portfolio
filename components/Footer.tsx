import Icon from "./Icon";

function Footer() {
  return (
    <footer className="mt-32 mb-8">
      <a href="#home" className="flex flex-col items-center cursor-pointer ">
        <Icon
          size="32"
          className="animate-bounce"
          icon="material-symbols:keyboard-arrow-up-rounded"
        />
        Back to top
      </a>
    </footer>
  );
}

export default Footer;
