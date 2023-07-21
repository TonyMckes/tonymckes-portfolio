import 'server-only'

import Icon from 'components/SVG/Icon'

function Footer() {
  return (
    <footer className="mb-8 mt-32 flex items-center justify-center">
      <nav>
        <a href="#home" className="flex flex-col items-center">
          <Icon
            size="32px"
            className="animate-bounce"
            icon="material-symbols:keyboard-arrow-up-rounded"
          />
          Back to top
        </a>
      </nav>
    </footer>
  )
}

export default Footer
