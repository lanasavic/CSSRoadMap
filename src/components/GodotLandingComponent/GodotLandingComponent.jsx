'use client';

import '@/components/main.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDownload,
    faBookOpenReader,
    faBoxesStacked,
    faBars
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithubAlt,
    faTwitter,
    faFacebookSquare,
    faReddit
} from "@fortawesome/free-brands-svg-icons"
import {useEffect} from "react";

export const GodotLandingComponent = () => {
    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 190) {
                navbar.style.backgroundColor = 'black';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <>
            <style>{'::-webkit-scrollbar { width: 10px; } ::-webkit-scrollbar-track { background: #000000 } ::-webkit-scrollbar-thumb { background: #3b82f6 } * { scroll-behavior: smooth }'}</style>
            <div className="grid text-white font-[Roboto,Helvetica,sans-serif] overflow-x-hidden">
                <div className="fixed z-[98]">
                    <div
                        className="navbar flex flex-col relative top-0 w-screen h-12 justify-center transition-all ease-in duration-300"
                        id="navbar">
                        <nav className="w-full max-w-7xl self-center relative flex justify-between">
                            <div className="relative flex gap-4 items-center ml-4 pl-0.5">
                                <div
                                    className="relative cursor-pointer w-2/3 max-[768px]:w-full h-8 rounded-sm bg-transparent overflow-hidden z-[100]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/icon/logo_dark.svg"
                                         alt="Godot logo"/>
                                </div>
                                <a className="max-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                   href="#features">Features</a>
                                <a className="max-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                   href="https://godotengine.org/blog/">News</a>
                                <a className="max-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                   href="#community">Community</a>
                                <a className="max-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                   href="#donate">More</a>
                            </div>
                            <div className="relative flex gap-4 items-center mr-8">
                                <div className="max-[768px]:hidden relative">
                                    <a href="https://godotengine.org/download/">
                                        <FontAwesomeIcon
                                            className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                            icon={faDownload} size="md"/>
                                    </a>
                                </div>
                                <div className="max-[768px]:hidden relative">
                                    <a href="https://docs.godotengine.org/en/stable/">
                                        <FontAwesomeIcon
                                            className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                            icon={faBookOpenReader} size="md"/>
                                    </a>
                                </div>
                                <div className="max-[768px]:hidden relative">
                                    <a href="https://godotengine.org/asset-library/asset">
                                        <FontAwesomeIcon
                                            className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                            icon={faBoxesStacked} size="md"/>
                                    </a>
                                </div>
                                <div className="min-[768px]:hidden relative z-[100]">
                                    <label
                                        htmlFor="toggleDropdown">
                                        <FontAwesomeIcon
                                            className="text-white ease-in-out duration-[.3s] hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                            icon={faBars} size="lg"/>
                                    </label>
                                </div>
                            </div>
                            <input className="hidden" type="checkbox" name="toggleDropdown" id="toggleDropdown"/>
                            <div
                                className="dropdown absolute w-screen h-[150px] pt-8 z-[99] bg-black flex flex-col justify-center -top-80 opacity-0">
                                <div className="flex gap-4 justify-center">
                                    <a className="min-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                       href="#features">Features</a>
                                    <a className="min-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                       href="https://godotengine.org/blog/">News</a>
                                    <a className="min-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                       href="#community">Community</a>
                                    <a className="min-[768px]:hidden text-sm hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                       href="#donate">More</a>
                                </div>
                                {/*First row*/}
                                <div className="flex gap-4 justify-center mt-6">
                                    <div className="min-[768px]:hidden relative">
                                        <a href="https://godotengine.org/download/">
                                            <FontAwesomeIcon
                                                className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                                icon={faDownload} size="md"/>
                                        </a>
                                    </div>
                                    <div className="min-[768px]:hidden relative">
                                        <a href="https://docs.godotengine.org/en/stable/">
                                            <FontAwesomeIcon
                                                className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                                icon={faBookOpenReader} size="md"/>
                                        </a>
                                    </div>
                                    <div className="min-[768px]:hidden relative">
                                        <a href="https://godotengine.org/asset-library/asset">
                                            <FontAwesomeIcon
                                                className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                                icon={faBoxesStacked} size="md"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Second row*/}
                            </div>
                            {/*Dropdown*/}
                        </nav>
                    </div>
                    {/*Navbar*/}
                </div>
                {/*Navbar fixed*/}
                <div className="grid bg-godotOverlay bg-center bg-cover bg-fixed w-screen h-screen z-[0]">
                    <div className="relative w-full max-w-7xl min-w-screen min-h-screen my-0 mx-auto">
                        <div className="absolute bottom-0 left-0 w-full max-w-7xl max-h-screen px-9 mb-12 content-end">
                            <h1 className="text-4xl font-bold">The game engine you <span
                                className="after:border-4 after:border-solid after:border-blue-400 after:w-[115px] after:absolute after:-z-10 after:-translate-x-28 after:translate-y-7">waited</span> for.
                            </h1><br/>
                            <p className="max-w-xl">Godot provides a huge set of common tools, so you can just focus on
                                making your game
                                without
                                reinventing the wheel. <br/><br/> Godot is completely free and open-source under the
                                very
                                permissive MIT license. No strings attached, no royalties, nothing. Your game is
                                yours, down to the last line of engine code.</p>
                            <button className="w-40 h-12 bg-white text-blue-950 text-lg font-bold ease-in-out duration-[.3s] hover:text-blue-800 hover:ease-in-out hover:duration-[.3s] mt-16
                                                    after:content-[attr(data-version)] after:w-14 after:h-12 after:bg-blue-500 after:text-white after:text-lg after:font-bold after:content-center after:text-center after:absolute after:translate-x-9 after:-translate-y-[0.65rem]
                                                    after:ease-in-out after:duration-[.3s] after:hover:bg-blue-400 after:hover:ease-in-out after:hover:duration-[.3s]"
                                    data-version="3.2.2">Download
                            </button>
                        </div>
                    </div>
                </div>
                {/*Top container*/}
                <div className="flex flex-col bg-black w-screen h-full z-[1] py-20 items-center" id="features">
                    <div className="relative w-full max-w-7xl my-0 mx-auto">
                        <h1 className="text-4xl font-bold text-center">A <span
                            className="after:border-4 after:border-solid after:border-blue-400 after:w-[228px] after:absolute after:-z-10 after:-translate-x-56 after:translate-y-7">different way</span> to
                            make games</h1>
                        <div className="flex flex-wrap w-full mt-10 mx-auto justify-center">

                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/innovative.png"
                                         alt="Innovative Design"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Innovative Design</h6><br/>
                                    <p className="text-base">Big or small ideas adapt seamlessly to Godot's node-based
                                        architecture, making your life easier.</p>
                                </div>
                            </div>
                            {/*Card*/}
                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/3d.jpg"
                                         alt="Gorgeous 3D"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Gorgeous 3D</h6><br/>
                                    <p className="text-base">Innovative 3D renderer design, which makes your art look
                                        great
                                        with
                                        minimal effort.</p>
                                </div>
                            </div>
                            {/*Card*/}
                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/2d.jpg"
                                         alt="Innovative Design"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Beautiful 2D</h6><br/>
                                    <p className="text-base">Dedicated 2D engine that works in pixel coordinates, with
                                        plenty of
                                        built-in tools.</p>
                                </div>
                            </div>
                            {/*Card*/}
                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/easy_code.png"
                                         alt="Innovative Design"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Easy to program</h6><br/>
                                    <p className="text-base">Object-oriented API with language options such as GDScript,
                                        C#,
                                        C++
                                        and visual scripting.</p>
                                </div>
                            </div>
                            {/*Card*/}
                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/team_friendly.svg"
                                         alt="Team-friendly"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Team-friendly</h6><br/>
                                    <p className="text-base">Form architecture and tools to VCS integration, Godot is
                                        designed
                                        for everyone in your team.</p>
                                </div>
                            </div>
                            {/*Card*/}
                            <div className="relative flex w-full max-w-[500px] max-[768px]:flex-col mx-8 my-5 bg-gray-700 rounded-md overflow-hidden content-center cursor-pointer hover:bg-black ease-in-out duration-500
                                    after:bg-gray-700 after:absolute after:z-[0] after:w-[600px] after:h-[900px] after:translate-x-[12rem] after:translate-y-[18rem] after:rotate-45 after:ease-in-out after:duration-500 after:transition-all
                                    hover:after:-translate-x-10 hover:after:-translate-y-[18rem]">
                                <div className="basis-3/5 z-[1]">
                                    <img className="w-full h-full object-cover"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/features/oss.svg"
                                         alt="Open Source"/>
                                </div>
                                <div className="basis-2/5 content-center py-6 px-7 z-[1]">
                                    <h6 className="text-lg">Open Source</h6><br/>
                                    <p className="text-base">Truly open development anyone who contributes to Godot
                                        benefits
                                        equally form other's contributions.</p>
                                </div>
                            </div>
                            {/*Card*/}
                        </div>
                        {/*Cards wrapper*/}</div>
                </div>
                {/*Cards container*/}
                <div className="flex flex-col bg-gray-700 w-screen h-full py-20 px-8" id="community">
                    <div className="relative w-full max-w-7xl my-0 mx-auto">
                        <h1 className="text-4xl font-bold">Get Involved</h1><br/>
                        <p>Join the community and help create a game engine that belongs to everybody.</p>
                        <div className="flex flex-wrap mt-14 px-3 gap-5 justify-center">
                            <div className="flex flex-col items-center text-center w-[30%] min-w-[350px]">
                                <img className="max-w-36"
                                     src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/get_involved/code.svg"
                                     alt="Code image"/>
                                <h4 className="text-lg font-bold">Code</h4><br/>
                                <p>If you know how to code, and enjoy fun and challenging problems, you can help by
                                    fixing
                                    bugs
                                    or creating cool new features.</p><br/>
                                <a className="text-[#f58c84] hover:text-[#aa5060] ease-in-out duration-[.3s]"
                                   href="https://docs.godotengine.org/en/latest/contributing/workflow/first_steps.html">Learn
                                    more</a>
                            </div>
                            {/*Item*/}
                            <div className="flex flex-col items-center text-center w-[30%] min-w-[350px]">
                                <img className="max-w-36"
                                     src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/get_involved/document.svg"
                                     alt="Document image"/>
                                <h4 className="text-lg font-bold">Document</h4><br/>
                                <p>Documentation quality is essential in a game engine; help make it better by updating
                                    the
                                    API
                                    reference, writing new guides or submitting corrections.</p><br/>
                                <a className="text-[#f58c84] hover:text-[#aa5060] ease-in-out duration-[.3s]"
                                   href="https://docs.godotengine.org/en/latest/contributing/documentation/contributing_to_the_documentation.html">Learn
                                    more</a>
                            </div>
                            {/*Item*/}
                            <div className="flex flex-col items-center text-center w-[30%] min-w-[350px]">
                                <img className="max-w-36"
                                     src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/get_involved/report.svg"
                                     alt="Report image"/>
                                <h4 className="text-lg font-bold">Report</h4><br/>
                                <p>Found a problem with the engine? Don't forget to report it so that developers can
                                    track
                                    it
                                    down.</p><br/>
                                <a className="text-[#f58c84] hover:text-[#aa5060] ease-in-out duration-[.3s]"
                                   href="https://docs.godotengine.org/en/latest/contributing/workflow/first_steps.html#testing-and-reporting-issues">Learn
                                    more</a>
                            </div>
                            {/*Item*/}
                        </div>
                        {/*Items wrapper*/}</div>
                </div>
                {/*"Get Involved" container*/}
                <div className="flex flex-col bg-[#253155] w-screen h-full text-center items-center py-10 px-2"
                     id="donate">
                    <img className="w-full max-w-96"
                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/icon/sfc.svg"
                         alt="SFC icon"/>
                    <h2 className="text-4xl font-bold">Donate</h2><br/>
                    <p className="max-w-lg">You don't need to be an engine developer to help Godot. Consider donating to
                        speed up development and make Godot Engine even more awesome!</p><br/>
                    <a className="text-[#f58c84] hover:text-[#aa5060] ease-in-out duration-[.3s]"
                       href="https://godotengine.org/donate/">Learn more</a>
                </div>
                {/*"Donate" container*/}
                <div className="flex flex-col bg-gray-700 w-screen h-full py-20 px-8">
                    <div className="relative w-full max-w-7xl my-0 mx-auto">
                        <h2 className="text-4xl font-bold">Sponsored by</h2><br/>
                        <div className="flex flex-col justify-center gap-6">
                            <div className="flex flex-wrap justify-center gap-3">
                                <div
                                    className="bg-transparent border-2 border-solid border-blue-500 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/heroiclabs.png"
                                         alt="Heroic Labs"/>
                                </div>
                                {/*Sponsor card*/}
                                <div
                                    className="bg-transparent border-2 border-solid border-blue-500 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/gamblify.png"
                                         alt="Gamblify"/>
                                </div>
                                {/*Sponsor card*/}
                                <div
                                    className="bg-transparent border-2 border-solid border-blue-500 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/spiffcode.png"
                                         alt="spiffcode"/>
                                </div>
                                {/*Sponsor card*/}
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                <div
                                    className="bg-transparent border border-solid border-blue-800 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/asifa-hollywood.png"
                                         alt="Asifa Hollywood"/>
                                </div>
                                {/*Sponsor card*/}
                                <div
                                    className="bg-transparent border border-solid border-blue-800 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/litslink.png"
                                         alt="Litslink"/>
                                </div>
                                {/*Sponsor card*/}
                                <div
                                    className="bg-transparent border border-solid border-blue-800 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/moonwards.png"
                                         alt="Moonwards"/>
                                </div>
                                {/*Sponsor card*/}
                                <div
                                    className="bg-transparent border border-solid border-blue-800 w-[200px] text-center px-4 content-center">
                                    <img className="p-2"
                                         src="https://roopaish.github.io/CSS-RoadMap/Godot%20Landing%20Page%20-%20Redesign/img/sponsors/zenva-academy.png"
                                         alt="Zenva Academy"/>
                                </div>
                                {/*Sponsor card*/}
                            </div>
                        </div>
                        {/*Sponsors wrapper*/}</div>
                </div>
                {/*"Sponsored by" container*/}
                <div className="flex w-screen h-full bg-[#2e3c66] py-10 px-8">
                    <div
                        className="relative flex flex-wrap w-full max-w-7xl my-0 mx-auto justify-between max-[768px]:justify-center gap-4">
                        <div className="text-center">
                            <p>©2024 <a href="https://github.com/lanasavic">LS</a>, recreated this Godot landing page UI
                                (as per <a href="https://github.com/Roopaish">RB</a> tasks).<br/><br/>Privacy Policy –
                                Code of Conduct</p>
                        </div>
                        {/*Copyright*/}
                        <div>
                            <h5 className="text-lg font-bold">Links</h5>
                            <div className="flex flex-col ml-3 leading-[18px]">
                                <a href="https://godotengine.org/blog/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">News</a>
                                <a href="https://godotengine.org/community/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Community</a>
                                <a href="https://godotengine.org/features/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Features</a>
                                <a href="https://godotengine.org/showcase/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Showcase</a>
                                <a href="https://docs.godotengine.org/en/stable/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Documentation</a>
                                <a href="https://godotengine.org/download/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Download</a>
                                <a href="https://fund.godotengine.org/"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Donate</a>
                                <a href="https://godotengine.org/press"
                                   className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]">Press
                                    Kit</a>
                            </div>
                            {/*Links a*/}
                        </div>
                        {/*Links*/}
                        <div>
                            <h5 className="text-lg font-bold">Contact us</h5>
                            <div className="flex flex-col ml-3 leading-[18px] gap-1">
                                <a className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]"
                                   href="https://github.com/godotengine"><FontAwesomeIcon
                                    className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                    icon={faGithubAlt} size="lg"/></a>
                                <a className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]"
                                   href="https://x.com/godotengine"><FontAwesomeIcon
                                    className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                    icon={faTwitter} size="lg"/></a>
                                <a className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]"
                                   href="https://www.facebook.com/groups/godotengine/"><FontAwesomeIcon
                                    className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                    icon={faFacebookSquare} size="lg"/></a>
                                <a className="cursor-pointer hover:text-blue-600 ease-in-out duration-[.3s]"
                                   href="https://www.reddit.com/r/godot/"><FontAwesomeIcon
                                    className="text-white hover:text-blue-400 hover:ease-in-out hover:duration-[.3s]"
                                    icon={faReddit} size="lg"/></a>
                            </div>
                            {/*Contacts a*/}
                        </div>
                        {/*Contacts*/}
                    </div>
                </div>
                {/*Footer*/}
            </div>
        </>
    )
}

/*
Navbar - does not slide out
*/
