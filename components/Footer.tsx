import Icon from "./Icon";

function Footer() {
  return (
    <footer className="mt-32 mb-8 text-center">
      <a href="#home" className="cursor-pointer ">
        <Icon
          aria-hidden
          size="2rem"
          exact
          className="mx-auto animate-bounce"
          icon="material-symbols:keyboard-arrow-up-rounded"
        />
        Back to top
      </a>
    </footer>
  );
}

export default Footer;
