'use client'

import Link from "next/link";

export const Navigation = () => {
    return (
        <div
            className="flex flex-col col-span-1 flex-wrap w-screen min-[941px]:w-[200px] lg:w-[310px] xl:w-[400px] 2xl:w-[500px] h-screen min-h-full bg-black text-white
            max-[941px]:after:w-10 max-[941px]:after:h-10 max-[941px]:after:bottom-4 max-[941px]:after:right-4 max-[941px]:after:fixed max-[941px]:after:rounded-full max-[941px]:after:bg-red-200 max-[941px]:after:content-[attr(data-icon)]
            max-[941px]:after:text-black max-[941px]:after:text-2xl max-[941px]:after:text-center max-[941px]:after:content-center max-[941px]:after:animate-upDown max-[941px]:after:transition-all max-[941px]:after:ease-linear" data-icon="↓">
            <div className="flex flex-col fixed pl-auto gap-6 p-12 flex-wrap w-screen min-[941px]:gap-2 min-[941px]:w-[200px] lg:w-[310px] xl:w-[400px] 2xl:w-[500px] h-screen min-h-full items-center text-center justify-center">
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]"
                      href="/login-form">Login Form</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/video-background">Video
                    Background</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/tooltips">Tooltips</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/hover-effects">Hover
                    Effects</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/emoji-art">Emoji Art</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/face-art">Face Art</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/animated-page">Animated
                    Page</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]"
                      href="/checkbox-radio">Checkbox&Radio</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/flip-button">3D Flip
                    Button</Link>
                <Link className="p-2 hover:text-2xl ease_in_out duration-[.1s]" href="/animated-preloaders">Animated
                    Preloaders</Link>
            </div>
        </div>
    )
}
