import '@/components/main.css';

export const FlipButtonComponent = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen bg-black p-10 text-xl max-[510px]:w-full max-[510px]:h-full max-[510px]:items-center">
            <div>
                <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:flex after:justify-center after:items-center after:top-0 after:left-0"
                        data-front="preserve-3D"
                        data-back="Flip Flip!"></button>
                <div
                    className="grid grid-cols-gridWrap max-[510px]:grid-rows-gridWrap gap-4 my-14 justify-items-center justify-center items-center">
                    <div className="relative">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-red-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-orange-400 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button1"
                                data-back="Hey Hey!"></button>
                    </div>
                    <div className="relative">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white rounded-full [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:rounded-full before:bg-purple-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:rounded-full after:bg-pink-500 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button2"
                                data-back="Konichiwa!">
                        </button>
                    </div>
                    <div className="relative">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-blue-400 before:border-4 before:border-solid before:border-blue-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-blue-500 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button3"
                                data-back="S'up?">
                        </button>
                    </div>
                    <button className="relative w-44 h-16 p-4 rounded-xl [transform-style:preserve-3D] transition-transform duration-[3s] ease-in-out text-center hover:-rotate-y-180
                                    before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-green-400 before:text-blue-950 before:flex before:justify-center before:items-center before:rounded-xl before:-translate-y-8 before:-translate-x-4
                                    after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-blue-950 after:text-green-400 after:flex after:justify-center after:items-center after:rounded-xl after:top-0 after:left-0 after:rotate-y-180"
                            data-front="Knock Knock!"
                            data-back="Who's there?">
                    </button>
                </div>
            </div>
            <div>
                <div className="relative [perspective:1000px]">
                    <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:flex after:justify-center after:items-center after:top-0 after:left-0"
                            data-front="+perspective"
                            data-back="Flip Flip!"></button>
                </div>
                <div
                    className="grid grid-cols-gridWrap max-[510px]:grid-rows-gridWrap gap-4 my-14 justify-items-center justify-center items-center">
                    <div className="relative [perspective:20em]">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-red-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-orange-400 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button1"
                                data-back="Hey Hey!"></button>
                    </div>
                    <div className="relative [perspective:20em]">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white rounded-full [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:rounded-full before:bg-purple-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:rounded-full after:bg-pink-500 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button2"
                                data-back="Konichiwa!">
                        </button>
                    </div>
                    <div className="relative [perspective:20em]">
                        <button className="rotateTranslate relative w-44 h-16 p-4 text-white [transform-style:preserve-3D] transition-transform duration-[.7s] ease-in-out origin-top
                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-blue-400 before:border-4 before:border-solid before:border-blue-500 before:flex before:justify-center before:items-center before:top-0 before:left-0 before:translate-z-32
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-blue-500 after:flex after:justify-center after:items-center after:top-0 after:left-0"
                                data-front="Button3"
                                data-back="S'up?">
                        </button>
                    </div>
                    <div className="relative [perspective:20em]">
                        <button className="relative w-44 h-16 p-4 rounded-xl [transform-style:preserve-3D] transition-transform duration-[3s] ease-in-out text-center hover:-rotate-y-180
                                        before:content-[attr(data-front)] before:[backface-visibility:hidden] before:absolute before:w-full before:h-full before:bg-green-400 before:text-blue-950 before:flex before:justify-center before:items-center before:rounded-xl before:-translate-y-8 before:-translate-x-4
                                        after:content-[attr(data-back)] after:[backface-visibility:hidden] after:absolute after:w-full after:h-full after:bg-blue-950 after:text-green-400 after:flex after:justify-center after:items-center after:rounded-xl after:top-0 after:left-0 after:rotate-y-180"
                                data-front="Knock Knock!"
                                data-back="Who's there?">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
