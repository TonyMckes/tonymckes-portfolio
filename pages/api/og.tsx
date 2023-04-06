/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function () {
  return new ImageResponse(
    (
      <div tw="h-screen w-screen flex flex-col items-center justify-center bg-[#0F1116] text-neutral-100/90">
        <h1 tw="flex flex-col text-5xl">
          <div tw="flex">Hello, I&apos;m</div>
          <div tw="flex text-7xl mb-4 mt-3 text-neutral-100">
            Anthony Mackensen
          </div>
          <div tw="flex">
            And I&apos;m a<span tw="text-[#20aca4] ml-3">Web Developer</span>
          </div>
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
