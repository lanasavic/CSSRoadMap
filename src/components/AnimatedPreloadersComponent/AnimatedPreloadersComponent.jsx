import '@/components/main.css';

export const AnimatedPreloadersComponent = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen bg-gray-800 p-4 max-[510px]:w-full max-[1050px]:h-full max-[510px]:items-center">
            <h2 className="relative mb-10 text-white text-xl font-bold max-[510px]:text-center text-left">Animated Preloaders</h2>
            <div
                className="grid grid-cols-gridWrap2 h-max max-[510px]:grid-rows-gridWrap2 gap-5 mx-10 justify-items-center justify-center items-center">
                <div className="relative h-44 justify-center content-center"> {/*w-[300px] h-[150px]*/}
                    <div className="relative flex">
                        <span className="w-1 h-10 rounded mr-1 bg-red-500 animate-wave animate-delay-[.1s]"/>
                        <span className="w-1 h-10 rounded mr-1 bg-blue-500 animate-wave animate-delay-[.2s]"/>
                        <span className="w-1 h-10 rounded mr-1 bg-purple-500 animate-wave animate-delay-[.3s]"/>
                        <span className="w-1 h-10 rounded mr-1 bg-yellow-500 animate-wave animate-delay-[.4s]"/>
                        <span className="w-1 h-10 rounded mr-1 bg-orange-500 animate-wave animate-delay-[.5s]"/>
                        <span className="w-1 h-10 rounded mr-1 bg-green-500 animate-wave animate-delay-[.6s]"/>
                        <span className="w-1 h-10 rounded bg-indigo-500 animate-wave animate-delay-[.7s]"/>
                    </div>
                </div>
                <div className="relative w-16 h-16">
                    <span className="absolute w-16 h-16 border-2 border-solid border-orange-600 animate-rotateBox
                    after:absolute after:bg-orange-600 after:w-full after:h-full after:animate-fillBox"/>
                </div>
                <div className="relative grid grid-cols-grid3 gap-1">
                    <span className="preserve3D w-5 h-5 bg-red-900 animate-rotateRubiks animate-delay-[.1s]"/> {/*[transform-style:preserve-3D]*/}
                    <span className="preserve3D w-5 h-5 bg-blue-300 animate-rotateRubiks animate-delay-[.2s]"/>
                    <span className="preserve3D w-5 h-5 bg-purple-800 animate-rotateRubiks animate-delay-[.3s]"/>
                    <span className="preserve3D w-5 h-5 bg-yellow-300 animate-rotateRubiks animate-delay-[.4s]"/>
                    <span className="preserve3D w-5 h-5 bg-orange-400 animate-rotateRubiks animate-delay-[.5s]"/>
                    <span className="preserve3D w-5 h-5 bg-green-800 animate-rotateRubiks animate-delay-[.6s]"/>
                    <span className="preserve3D w-5 h-5 bg-indigo-800 animate-rotateRubiks animate-delay-[.7s]"/>
                    <span className="preserve3D w-5 h-5 bg-emerald-600 animate-rotateRubiks animate-delay-[.8s]"/>
                    <span className="preserve3D w-5 h-5 bg-pink-300 animate-rotateRubiks animate-delay-[.9s]"/>
                </div>
                <div className="flex h-44 items-center">
                    <div className="relative w-16 h-16 animate-rotateBox">
                        <span
                            className="absolute w-16 h-16 border-2 border-solid border-red-700 translate-y-full animate-translateInnerCube"/>
                        <span
                            className="absolute w-16 h-16 border-2 border-solid border-yellow-400 -translate-x-full animate-translateInnerCube"/>
                        <span
                            className="absolute w-16 h-16 border-2 border-solid border-blue-400 -translate-y-full animate-translateInnerCube"/>
                        <span
                            className="absolute w-16 h-16 border-2 border-solid border-purple-700 translate-x-full animate-translateInnerCube"/>
                    </div>
                </div>
                <div className="relative flex w-24 h-24">
                    <div className="relative w-24 h-24"> {/*before:absolute before:content-[''] before:w-28 before:h-28 before:-top-2 before:-left-2
                        before:rounded-full before:border-4 before:border-purple-600 before:animate-circleBorder*/}
                        <img src="https://i1.wp.com/i.pinimg.com/736x/97/1b/1c/971b1cd69404cc28d73b84b2f884df9c.jpg" alt="anime icon" className="absolute rounded-full"/>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="svgCircle absolute overflow-visible fill-none stroke-rose-400 stroke-2 -m-1">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                    </div>
                </div>
                <div className="relative flex w-28 h-28 justify-center items-center">
                    <span className="absolute w-full h-full border-t-2 border-solid border-orange-600 rounded-full animate-rotateCircle animate-delay-[.3s] animate-duration-[2s]"/>
                    <span className="absolute w-4/5 h-4/5 border-t-2 border-solid border-yellow-400 rounded-full animate-rotateCircle animate-delay-[.2s] animate-duration-[1.5s]"/>
                    <span className="absolute w-3/5 h-3/5 border-t-2 border-solid border-green-600 rounded-full animate-rotateCircle animate-delay-[.1s] animate-duration-[1s]"/>
                </div>
                <div className="flex m-24 justify-center text-center">
                    <span className="w-0 overflow-hidden whitespace-nowrap text-lg border-r-2 border-r-white animate-typing">Loading...</span>
                </div>
            </div>
        </div>
    )
}

/*
filling cube - translateX and Y to center
rotating cubes - translateInnerCube -> cubes should start from middle, then get to translated positions, then back to center -invert
*/
