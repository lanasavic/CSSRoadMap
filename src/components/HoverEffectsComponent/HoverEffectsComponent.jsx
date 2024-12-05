import '@/components/main.css'

export const HoverEffectsComponent = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen bg-gray-700 p-4 max-[750px]:w-full max-[750px]:h-full max-[510px]:items-center">
            <h1 className="relative mb-10 text-white text-2xl font-bold max-[510px]:text-center text-left ease-in-out duration-300
            after:content-[''] after:absolute after:ease-in-out after:duration-300 after:scale-x-0 after:w-[11.5em] after:h-[0.1em] after:bg-white after:bottom-0 after:left-0
            hover:after:scale-x-100">Advanced Hover Effects</h1>
            <div className="grid grid-cols-gridWrap max-[510px]:grid-rows-gridWrap gap-4 mx-10 justify-items-center justify-center items-center">
                <div className="relative my-16">
                    <button className="absolute w-48 font-bold text-orange-600 rounded-xl border-4 border-orange-600 bg-orange-600 p-4 ease-in-out duration-300 z-[1] overflow-hidden -translate-x-1/2 -translate-y-1/2
                                before:content-[''] before:absolute before:bg-gray-700 before:z-[-1] before:scale-150 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50%]
                                before:ease-in-out before:duration-300 before:w-full before:h-full hover:before:scale-0 hover:text-white">BUTTON1
                    </button>
                </div>
                <button className="stripes90 w-48 font-bold text-white rounded-full border-4 border-[#00d6ab] m-4 p-4 ease-in-out duration-300
                hover:bg-[50px]">BUTTON2
                </button>
                <button className="w-48 font-bold text-white bg-blue-400 rounded-xl border border-blue-400 m-4 p-4 ease-in-out duration-300
                hover:bg-transparent hover:border hover:shadow-doubleShadow hover:shadow-blue-500">BUTTON3
                </button>
                <div className="relative my-16">
                    <button className="absolute w-48 font-bold text-white rounded-xl border-4 border-yellow-400 p-4 ease-in-out duration-300 z-[1] overflow-hidden -translate-x-1/2 -translate-y-1/2
                                 before:content-[''] before:bg-yellow-400 before:absolute before:z-[-1] before:w-[400px] before:h-[700px] before:-translate-x-[30rem] before:translate-y-2 before:rotate-45 before:ease-in-out before:duration-500
                                 hover:before:-translate-x-0 hover:before:-translate-y-3/4">BUTTON4
                    </button>
                </div>
                <div className="relative my-16">
                    <button className="absolute w-48 font-bold text-white rounded-xl border-4 border-purple-600 p-4 ease-in-out duration-300 overflow-hidden -translate-x-1/2 -translate-y-1/2
                    before:content-[''] before:bg-purple-600 before:absolute before:z-[-1] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:ease-in-out before:duration-300
                    before:w-0 before:h-full hover:before:w-full">BUTTON5
                    </button>
                </div>
                <div className="relative my-16">
                    <button
                        className="absolute w-48 font-bold text-white rounded-full border-4 border-green-500 p-4 ease-in-out duration-300 z-[1] overflow-hidden -translate-x-1/2 -translate-y-1/2
                                    before:content-[''] before:bg-blue-300 before:opacity-40 before:absolute before:z-[-1] before:w-[300px] before:h-[400px] before:-translate-x-1/2 before:translate-y-2 before:rounded-[50%] before:origin-left
                                    after:content-[''] after:bg-blue-400 after:opacity-60 after:absolute after:z-[-1] after:w-[300px] after:h-[300px] after:-translate-x-1/2 after:translate-y-8 after:rounded-[55%] after:origin-left
                                    hover:before:animate-rotation hover:after:animate-rotation">BUTTON6
                    </button>
                </div>
                <button className="w-48 font-bold text-white bg-fuchsia-400 rounded-xl border-4 border-fuchsia-400 m-4 p-4 shadow-[20px_20px] shadow-black ease-in-out duration-300
                hover:shadow-[10px_10px] hover:shadow-black">BUTTON7
                </button>
                <div className="relative my-16">
                    <button
                        className="bubbles absolute w-48 font-bold text-white bg-pink-400 rounded-xl border-4 border-pink-400 p-4 shadow-[0px_0px_10px_#a45a67] ease-in-out duration-500 z-[1] -translate-x-1/2 -translate-y-1/2
                                    before:content-[''] before:absolute before:z-[-1] before:ease-in-out before:duration-500 before:w-[150%] before:h-[200%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:invisible
                                    hover:before:ease-in-out hover:before:duration-500 hover:before:visible">BUTTON8
                    </button>
                </div>
            </div>
        </div>
    )
}

/*
H1 - underline not entirely fitting
GRID - small screen not equal gap (margin, positions, etc)
BUTTON8 - z-index, ::before size, visibility (not a proper fix)
*/
