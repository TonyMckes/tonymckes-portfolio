import 'server-only'

import type { SVGProps } from 'react'

function Steps({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 960 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 247H96V237H192V253H288V310H384V232H480V260H576V212H672V211H768V303H864V271H960V260V143H864H768H672H576H480H384H288H192H96H0V247Z"
        className="fill-[#f5f5f5] dark:fill-[#2B3140]"
      />
      <path
        d="M0 52H96V0H192V7H288V22H384V21H480V63H576V25H672V19H768V61H864V85H960V62V227H864H768H672H576H480H384H288H192H96H0V52Z"
        className="fill-[#E4E6EC] dark:fill-[#222632]"
      />
      <path
        d="M0 119H96V75H192V66H288V103H384H480V95H576V73H672V77H768V132H864V126H960V113V227H864H768H672H576H480H384H288H192H96H0V119Z"
        className="fill-[#ECEDF0] dark:fill-[#191C24]"
      />
      <path
        d="M0 164H96V153H192V176H288V160H384V154H480V127H576V131H672V182H768V152H864V127H960V152V227H864H768H672H576H480H384H288H192H96H0V164Z"
        className="fill-[#F5F5F5] dark:fill-[#2B3140]"
      />
    </svg>
  )
}

export default Steps
