import 'server-only'

import { icons } from '@iconify-json/logos'
import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils'
import { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  icon: string
  size?: string | number
}

function Logo({ icon, size, height, width, ...props }: LogoProps) {
  const isString = typeof icon === 'string'
  if (!isString) return null

  const logoExists = (icon: string) => {
    const name = icon.toLowerCase().replace(/\.| /g, '')
    if (name === 'css') return getIconData(icons, 'css-3')
    if (name === 'html') return getIconData(icons, 'html-5')

    const iconNameSuffix = getIconData(icons, `${name}-icon`)
    const iconName = getIconData(icons, name)

    if (iconNameSuffix) return iconNameSuffix
    if (iconName) return iconName

    console.log(`Icon: '${name}' was not found!`)
  }

  const iconData = logoExists(icon)
  if (!iconData) return null

  const { attributes, body } = iconToSVG(iconData)

  const svgAttributes: SVGProps<SVGSVGElement> = {
    ...attributes,
    'aria-hidden': true,
    dangerouslySetInnerHTML: { __html: replaceIDs(body) },
    role: 'img',
    style: {
      display: 'inline-block',
      height: size || height,
      width: size || width,
    },
    height: size || height,
    width: size || width,
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    ...props,
  }

  return <svg {...svgAttributes} />
}

export default Logo
