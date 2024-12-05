export const EmojiArtComponent = () => {
    return (
        <>
            <style>{`body {background-color: seagreen}`}</style>
            <div
                className="flex flex-wrap w-screen h-screen justify-center items-center gap-12 max-[700px]:w-full max-[700px]:h-full">
                <div className="relative w-52 h-52 bg-yellow-500 border-solid border-8 border-black rounded-full">
                    <div className="absolute w-5 h-9 rounded-3xl bg-black translate-x-12 translate-y-12"/>
                    <div className="absolute w-5 h-9 rounded-3xl bg-black translate-x-32 translate-y-12"/>
                    <div
                        className="absolute w-24 h-12 bg-black border-solid border-4 border-black rounded-[5%_5%_50%_50%] translate-x-12 translate-y-28 overflow-hidden">
                        <div className="absolute w-[90px] h-3 bg-white rounded-b-xl"/>
                        <div className="absolute w-10 h-10 bg-red-400 rounded-full translate-x-6 translate-y-6"/>
                    </div>
                </div>
                {/*😃*/}
                <div
                    className="relative w-52 h-52 bg-yellow-500 border-solid border-8 border-black rounded-full overflow-hidden">
                    <div
                        className="absolute w-10 h-10 border-b-solid border-b-8 border-b-black rounded-b-2xl translate-x-10 translate-y-12"/>
                    <div
                        className="absolute w-10 h-10 border-b-solid border-b-8 border-b-black rounded-b-2xl translate-x-28 translate-y-12"/>
                    <div
                        className="absolute w-0 h-0 bg-transparent border-b-solid border-b-8 border-l-solid border-l-[3.5px] border-r-solid border-r-[3.5px] border-[transparent_transparent_#2345ff_transparent] translate-x-[119px] translate-y-6 scale-[3]"/>
                    <div className="absolute w-5 h-5 bg-[#2345ff] rounded-full translate-x-28 translate-y-8"/>
                    <div className="absolute w-24 h-16 bg-white rounded-xl translate-x-12 translate-y-28"/>
                    <div
                        className="absolute w-48 h-3 rotate-[25deg] bg-white rounded-b-xl -translate-x-12 translate-y-28"/>
                    <div
                        className="absolute w-48 h-3 rotate-[-25deg] bg-white rounded-b-xl translate-x-12 translate-y-28"/>
                    <div
                        className="absolute w-48 h-3 rotate-[5deg] bg-white rounded-b-xl translate-x-12 translate-y-40"/>
                    <div
                        className="absolute w-48 h-3 rotate-[-5deg] bg-white rounded-b-xl -translate-x-12 translate-y-40"/>
                </div>
                {/*😷*/}
                <div className="relative flex w-52 h-52 bg-transparent items-center justify-center">
                    <div className="absolute">
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[10px] border-l-solid border-l-4 border-r-solid border-r-4 border-[transparent_transparent_#eab308_transparent] scale-[6] -translate-y-10 translate-x-1"/>
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[6px] border-l-solid border-l-[10px] border-r-solid border-r-[10px] border-[transparent_transparent_#eab308_transparent] scale-[8] rotate-[35deg]"/>
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[6px] border-l-solid border-l-[10px] border-r-solid border-r-[10px] border-[transparent_transparent_#eab308_transparent] scale-[8] -rotate-[35deg]"/>
                    </div>
                    <div className="absolute -z-[1]">
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[10px] border-l-solid border-l-4 border-r-solid border-r-4 border-[transparent_transparent_#000000_transparent] scale-[9] -translate-y-10 translate-x-1"/>
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[6px] border-l-solid border-l-[10px] border-r-solid border-r-[10px] border-[transparent_transparent_#000000_transparent] scale-[10] rotate-[35deg]"/>
                        <div
                            className="absolute w-0 h-0 bg-transparent border-b-solid border-b-[6px] border-l-solid border-l-[10px] border-r-solid border-r-[10px] border-[transparent_transparent_#000000_transparent] scale-[10] -rotate-[35deg]"/>
                    </div>
                    <div className="absolute -z-[2]">
                        <div
                            className="absolute w-28 h-5 bg-blue-300 border-8 border-solid border-black rounded-full -translate-x-2 -translate-y-12 -rotate-[45deg]"/>
                        <div
                            className="absolute w-28 h-5 bg-blue-300 border-8 border-solid border-black rounded-full -translate-x-[5.5rem] -translate-y-12 rotate-[45deg]"/>
                        <div
                            className="absolute w-28 h-5 bg-blue-300 border-8 border-solid border-black rounded-full -translate-x-2 translate-y-3 rotate-[30deg]"/>
                        <div
                            className="absolute w-28 h-5 bg-blue-300 border-8 border-solid border-black rounded-full -translate-x-[5.5rem] translate-y-3 -rotate-[30deg]"/>
                    </div>
                </div>
                {/*🌟*/}
            </div>
        </>
    )
}
