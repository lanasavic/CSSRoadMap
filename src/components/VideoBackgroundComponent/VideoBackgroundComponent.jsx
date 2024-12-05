import '@/components/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'

export const VideoBackgroundComponent = () => {
    return (
        <div className="grid w-screen h-screen overflow-hidden">
            <video autoPlay playsInline muted loop
                   src="https://roopaish.github.io/CSS-RoadMap/Responsive%20Video%20Background/loop.mp4"
                   className="rotate-180 object-cover w-full h-full z-[-1]"></video>
            <div
                className="min-w-60 flex flex-col min-[800px]:grid min-[800px]:grid-cols-grid2 justify-center fixed bottom-0 w-full text-white bg-black70 border border-solid border-purple-900 shadow-boxShadowVideo">
                <div
                    className="h-full grid grid-rows-3 p-5 border-b min-[800px]:border-r border-solid border-purple-900">
                    <div className="justify-self-end text-3xl"><FontAwesomeIcon icon={faPause}/></div>
                    <p className="pt-2.5 text-sm text-gray-300">rolifymusic</p>
                    <div className="flex flex-row-2 justify-between items-center">
                        <p className="text-lg m-0">Sound Of Silence</p>
                        <p className="text-sm text-gray-300 animate-counter [counter-set:_num_var(--num)] after:content-[counter(num)]">
                            00:0</p>
                    </div>
                    <div className="relative w-full h-1 bg-gray-950 rounded-full overflow-hidden">
                        <div className="absolute h-full bg-purple-900 rounded-full animate-grow"></div>
                    </div>
                </div>
                <div className="p-5 text-gray-300">
                    <p>Hello darkness, my old friend<br/>
                        I've come to talk with you again<br/>
                        Because a vision softly creeping<br/>
                        Left its seeds while I was sleeping</p>
                </div>
            </div>
        </div>
    )
}
