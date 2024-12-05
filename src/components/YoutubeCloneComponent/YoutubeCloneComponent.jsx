import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faThumbsUp,
    faPlusCircle,
    faGrip, /*faGridRound = PRO icon*/
    faBell,
    faCompass,
    faFire,
    faPlayCircle,
    faCameraRetro,
    faClockRotateLeft,
    faClock,
    faHeart,
    faChevronDown,
    faEllipsisVertical,
    faPenToSquare,
    faThumbsDown
} from '@fortawesome/free-solid-svg-icons'

export const YoutubeCloneComponent = () => {
    return (
        <div
            className="grid max-w-full h-full overflow-hidden bg-gray-950 mx-auto my-0 text-white">
            <div className="fixed z-[1]">
                <div className="flex flex-col relative bg-[rgba(0,0,0,50%)] backdrop-blur top-0 h-24 content-center">
                    <nav className="w-screen relative flex grow justify-between">
                        <div className="relative flex gap-4 items-center ml-4 pl-0.5">
                            <div className="relative cursor-pointer max-[460px]:hidden"><FontAwesomeIcon icon={faBars} size="xl"/></div>
                            <div className="relative cursor-pointer"><FontAwesomeIcon className="text-red-600" icon={faYoutube} size="2xl"/>
                            </div>
                        </div>
                        <div className="relative self-center text-center w-full mx-1"><input
                            className="rounded-sm p-1 text-white text-sm w-2/3 text-center min-w-28 bg-black border border-solid border-white" placeholder="Type to search"/></div>
                        <div className="relative flex gap-4 items-center mr-8">
                            <div className="relative cursor-pointer max-[460px]:hidden"><FontAwesomeIcon icon={faPlusCircle} size="lg"/>
                            </div>
                            <div className="relative cursor-pointer max-[460px]:hidden"><FontAwesomeIcon icon={faGrip} size="xl"/></div>
                            <div className="relative cursor-pointer"><FontAwesomeIcon className="text-red-600" icon={faBell} size="lg"/></div>
                            <div className="relative cursor-pointer w-7 h-7 rounded-sm bg-green-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://masterpiecer-images.s3.yandex.net/a642bfd66f7711eeb75fe6d39d9a42a4:upscaled"
                                                                                                          alt="Profile image"/>
                            </div>
                        </div>
                    </nav>
                    <div className="w-screen h-12 overflow-hidden ml-14 max-[460px]:ml-1">
                        <div
                            className="flex flex-nowrap gap-2 h-12 mr-24 max-[460px]:mr-2 items-center justify-between overflow-x-scroll whitespace-nowrap [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"> {/* categories; SCROLL = SHIFT+mouseSCROLL */}
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>All</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Nature</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>CSS</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Javascript</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Web Development</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>SpaceX</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Python</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Music</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>LoFi</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Music Production</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Anime</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>MCU</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>JAV</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Covid-19</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Disasters</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Heavy Rain</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Wildfire</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Pollution</p>
                            </div>
                            <div
                                className="bg-gray-800 hover:bg-gray-700 rounded-full w-fit h-fit px-3 py-0.5 content-center text-center cursor-pointer">
                                <p>Oxygen</p>
                            </div>
                        </div>
                    </div>
                    {/* Categories */}
                </div>
                {/* top-nav */}
            </div>
            <div className="grid grid-cols-[1fr_auto] h-full justify-self-center"> {/* main-content-wrap */}
                <div className="fixed z-[2] h-full max-[460px]:hidden left-0">
                    <nav className="bg-[rgba(0,0,0,50%)] backdrop-blur left-0 w-14 h-full mt-16">
                        <div className="w-14 relative flex flex-col items-center gap-20 mt-2 z-20">
                            <div className="relative inline-grid gap-3 text-center">
                                <div className="relative cursor-pointer"><FontAwesomeIcon className="text-red-600" icon={faCompass} size="lg"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faFire} size="lg"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faPlayCircle}
                                                                                          size="lg"/>
                                </div>
                            </div>
                            <div className="relative inline-grid gap-3 text-center">
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faCameraRetro}
                                                                                          size="lg"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faClockRotateLeft}
                                                                                          size="lg"/></div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faClock} size="lg"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faHeart} size="lg"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faChevronDown}
                                                                                          size="lg"/>
                                </div>
                            </div>
                            <div className="relative inline-grid gap-3 text-center">
                                <div className="relative w-6 h-6 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                                                                                                                alt="Profile image"/>
                                </div>
                                <div className="relative w-6 h-6 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ibGFja19hbmltZV9naXJsX3Byb2ZpbGVfcGljX3NjcmVlbl8yXzE2NzY5NDU5NjZfMDY0/screen-2.jpg?fakeurl=1&type=.jpg"
                                                                                                                                alt="Profile image"/>
                                </div>
                                <div className="relative cursor-pointer"><FontAwesomeIcon icon={faChevronDown}
                                                                                          size="lg"/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* sidebar */}
                <div className="flex flex-col w-screen m-2 max-w-[1337px]"> {/* main-content */}
                    <div className="flex flex-col gap-6 ml-16 mt-24 mr-7 max-[460px]:ml-4">
                        <div className="relative flex gap-2 items-center">
                            <FontAwesomeIcon className="text-red-600" icon={faThumbsUp} size="lg"/>
                            <h2 className="text-xl font-bold">Recommended</h2>
                        </div>
                        <div className="grid grid-cols-gridWrap3 max-[460px]:grid-cols-gridWrap4 gap-x-4 gap-y-6 justify-center"> {/* recommended */}
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['5:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://andrew-jones.com/images/posts/cover/why-i-write.jpeg" alt="Writing"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700 cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://img.freepik.com/premium-vector/business-man-cartoon-character-vector-illustration_1132808-1034.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Why am I so good at writing?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Pencil
                                                Lead</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>506k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>20 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['5:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg" alt="Cpp"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://masterpiecer-images.s3.yandex.net/a642bfd66f7711eeb75fe6d39d9a42a4:upscaled"
                                                                                                         alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Learn C++ in 5 minutes</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">rolifydev</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>1M views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>1 hour ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['2:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://c.stocksy.com/a/nwB500/z9/1237569.jpg" alt="Misty valley"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20220823/pngtree-man-making-air-quotes-gesture-with-two-fingers-on-blue-background-photo-image_48265942.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Are we all gonna die?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Optimistic Person</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>30M views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>2 years ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['20:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://media.istockphoto.com/id/675754156/photo/freedom-and-stress-free-concept.jpg?s=612x612&w=0&k=20&c=PxiAFMsFwKE4fBvgONzSGKLYFLsmVEPAyU6UYChcAGg=" alt="Sunset"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1020/1*jZ9v-2QShwnfCwHlEZCmDw.png" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Why I don't work with FAANG?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Coder man</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>300k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>1 week ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['10:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://i.pinimg.com/736x/d8/e0/62/d8e062011c5469b5a0df03ea7da39125.jpg" alt="Family in nature"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://imgcdn.stablediffusionweb.com/2024/3/31/a07c234b-ab97-4ad4-96b1-e1e88ec45e45.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">The beautiful joy of nature</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Nature Person</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>106k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>4 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['11:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://i.ytimg.com/vi/jy4tDiGhokk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSkgix9KooRVDqyIfaMS9EdWDK7Q" alt="Space"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/avatar-technology-human-artificial-futuristic-science-concept-code-virtual-ai-digital-brain_163305-235960.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Space is vast beyond your imagination</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">SpaceDive</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>200k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>5 years ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['30:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://iotvnaw69daj.i.optimole.com/cb:mLvy.66914/w:auto/h:auto/q:90/f:best/https://wpshout.com/wp-content/uploads/2024/03/Day-in-the-life-of-a-software-engineer.png" alt="Software engineer day of life"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700 overflow-hidden"><img className="object-cover w-full h-full" src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/01/softwareengineer.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Day in a life of a software engineer</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Nirvana</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>100k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>10 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recommended */}
                    <div className="my-14">
                        <hr className="border-solid border-gray-300"/>
                    </div>
                    {/* break */}
                    <div className="flex flex-col gap-6 ml-16 mr-7 max-[460px]:ml-4">
                        <div className="relative flex gap-2 items-center">
                            <FontAwesomeIcon className="text-red-600" icon={faPenToSquare} size="lg"/>
                            <h2 className="text-xl font-bold">Posts</h2>
                        </div>
                        <div className="grid grid-cols-gridWrap3 max-[460px]:grid-cols-gridWrap4 gap-x-4 gap-y-6 justify-center">
                            <div className="flex flex-col w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[200px] bg-gray-800 cursor-pointer p-2">
                                <div className="flex gap-1 text-gray-300 text-sm items-center hover:text-gray-200">
                                    <div className="w-4 h-4 rounded-full bg-green-700 mr-1  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://masterpiecer-images.s3.yandex.net/a642bfd66f7711eeb75fe6d39d9a42a4:upscaled"
                                                                                                 alt="Profile image"/></div>
                                    <p>rolifydev</p> {/* profile */}
                                    <span>•</span> {/* dot between */}
                                    <p>2 hours ago</p> {/* time */}
                                </div>
                                <div className="flex grow gap-1 text-gray-300 text-sm my-1">
                                    <p>What do you want to watch in the next video?</p>
                                    <img className="w-[100px] h-full object-cover" src="https://www.practiceportuguese.com/cdn-cgi/image/width=800,height=534,/wp-content/uploads/2020/06/asking-questions.jpg"
                                         alt="Question mark"/>
                                </div>
                                <div className="flex gap-1 text-gray-300 text-sm justify-between">
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faThumbsUp} size="sm"/>
                                        <p className="mr-2">10K</p>
                                        <FontAwesomeIcon icon={faThumbsDown} size="sm"/>
                                    </div>
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faPenToSquare} size="sm"/>
                                        <p className="mr-2">5K</p>
                                        <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[200px] bg-gray-800 cursor-pointer p-2">
                                <div className="flex gap-1 text-gray-300 text-sm items-center hover:text-gray-200">
                                    <div className="w-4 h-4 rounded-full bg-green-700 mr-1  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/7c/f7/43/7cf743fb2084bfe5365d2734dcd76a55.jpg" alt="Profile image"/></div>
                                    <p>Coder Joker</p> {/* profile */}
                                    <span>•</span> {/* dot between */}
                                    <p>Just now</p> {/* time */}
                                </div>
                                <div className="flex grow gap-1 text-gray-300 text-sm my-1">
                                    <p>I will pin a comment that makes no sense.</p>
                                </div>
                                <div className="flex gap-1 text-gray-300 text-sm justify-between">
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faThumbsUp} size="sm"/>
                                        <p className="mr-2">15K</p>
                                        <FontAwesomeIcon icon={faThumbsDown} size="sm"/>
                                    </div>
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faPenToSquare} size="sm"/>
                                        <p className="mr-2">50K</p>
                                        <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[200px] bg-gray-800 cursor-pointer p-2">
                                <div className="flex gap-1 text-gray-300 text-sm items-center hover:text-gray-200">
                                    <div className="w-4 h-4 rounded-full bg-green-700 mr-1  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Man_photographing_nature.jpg/2560px-Man_photographing_nature.jpg" alt="Profile image"/></div>
                                    <p>Nature Man</p> {/* profile */}
                                    <span>•</span> {/* dot between */}
                                    <p>1 hour ago</p> {/* time */}
                                </div>
                                <div className="flex grow gap-1 text-gray-300 text-sm my-1">
                                    <p>How are you all doing?<br/> Stay tuned for tomorrows session.</p>
                                    <img className="w-[100px] h-full object-cover" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265648.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
                                         alt="Man in nature"/>
                                </div>
                                <div className="flex gap-1 text-gray-300 text-sm justify-between">
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faThumbsUp} size="sm"/>
                                        <p className="mr-2">5K</p>
                                        <FontAwesomeIcon icon={faThumbsDown} size="sm"/>
                                    </div>
                                    <div className="flex gap-1 text-gray-300 text-sm items-center">
                                        <FontAwesomeIcon icon={faPenToSquare} size="sm"/>
                                        <p className="mr-2">2K</p>
                                        <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Posts */}
                    <div className="my-14">
                        <hr className="border-solid border-gray-300"/>
                    </div>
                    {/* break */}
                    <div className="flex flex-col gap-6 ml-16 mb-14 mr-7 max-[460px]:ml-4">
                        <div className="relative flex gap-2 items-center">
                            <FontAwesomeIcon className="text-red-600" icon={faFire} size="lg"/>
                            <h2 className="text-xl font-bold">Trending</h2>
                        </div>
                        <div className="grid grid-cols-gridWrap3 max-[460px]:grid-cols-gridWrap4 gap-x-4 gap-y-6 justify-center">
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['10:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://i.pinimg.com/736x/d8/e0/62/d8e062011c5469b5a0df03ea7da39125.jpg" alt="Family in nature"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://imgcdn.stablediffusionweb.com/2024/3/31/a07c234b-ab97-4ad4-96b1-e1e88ec45e45.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">The beautiful joy of nature</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Nature Person</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>106k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>4 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['5:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg" alt="Cpp"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://masterpiecer-images.s3.yandex.net/a642bfd66f7711eeb75fe6d39d9a42a4:upscaled"
                                                                                                                         alt="Profile image"/></div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Learn C++ in 5 minutes</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">rolifydev</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>1M views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>1 hour ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['11:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://i.ytimg.com/vi/jy4tDiGhokk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSkgix9KooRVDqyIfaMS9EdWDK7Q" alt="Space"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/avatar-technology-human-artificial-futuristic-science-concept-code-virtual-ai-digital-brain_163305-235960.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Space is vast beyond your
                                            imagination</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">SpaceDive</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>200k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>5 years ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['2:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://c.stocksy.com/a/nwB500/z9/1237569.jpg" alt="Misty valley"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://png.pngtree.com/thumb_back/fw800/background/20220823/pngtree-man-making-air-quotes-gesture-with-two-fingers-on-blue-background-photo-image_48265942.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Are we all gonna
                                            die?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Optimistic
                                                Person</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>30M views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>2 years ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['20:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://media.istockphoto.com/id/675754156/photo/freedom-and-stress-free-concept.jpg?s=612x612&w=0&k=20&c=PxiAFMsFwKE4fBvgONzSGKLYFLsmVEPAyU6UYChcAGg=" alt="Sunset"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700  cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1020/1*jZ9v-2QShwnfCwHlEZCmDw.png" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Why I don't work with
                                            FAANG?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Coder
                                                man</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>300k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>1 week ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['30:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://iotvnaw69daj.i.optimole.com/cb:mLvy.66914/w:auto/h:auto/q:90/f:best/https://wpshout.com/wp-content/uploads/2024/03/Day-in-the-life-of-a-software-engineer.png" alt="Software engineer day of life"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700 overflow-hidden"><img className="object-cover w-full h-full" src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/01/softwareengineer.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Day in a life of a software
                                            engineer</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Nirvana</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>100k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>10 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                            <div className="flex flex-col"> {/* video */}
                                <div className="w-[320px] h-[180px] max-[460px]:w-[270px] max-[460px]:h-[130px] bg-gray-800 cursor-pointer
                                after:content-['5:00'] after:text-xs after:text-center after:content-center after:absolute after:w-8 after:h-6 after:bg-[rgba(0,0,0,50%)] after:rounded-sm after:translate-x-[280px] after:-translate-y-[30px] max-[460px]:after:translate-x-[230px]">
                                    <img className="object-cover w-full h-full" src="https://andrew-jones.com/images/posts/cover/why-i-write.jpeg" alt="Writing"/></div>
                                {/* thumbnail */}
                                <div className="grid grid-cols-6 w-[320px] max-[460px]:w-[270px] mt-2 h-fit"> {/* video details */}
                                    <div className="col-span-1 w-10 h-10 rounded-full bg-green-700 cursor-pointer overflow-hidden"><img className="w-full h-full object-cover" src="https://img.freepik.com/premium-vector/business-man-cartoon-character-vector-illustration_1132808-1034.jpg" alt="Profile image"/>
                                    </div>
                                    {/* profile pic */}
                                    <div className="flex flex-col col-span-4">
                                        <h6 className="font-bold cursor-pointer text-md">Why am I so good at
                                            writing?</h6> {/* title */}
                                        <div className="flex flex-col">
                                            <p className="pt-1 cursor-pointer text-gray-300 hover:text-gray-200 text-sm">Pencil
                                                Lead</p> {/* profile name */}
                                            <div className="flex gap-2 text-gray-300 text-sm">
                                                <p>506k views</p> {/* views */}
                                                <span>•</span> {/* dot between */}
                                                <p>20 hours ago</p> {/* time */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-fit justify-self-end"><FontAwesomeIcon
                                        className="cursor-pointer" icon={faEllipsisVertical} size="lg"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Trending */}
                </div>
            </div>
        </div>
    )
}
