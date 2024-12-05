import {Navigation} from "@/components/Navigation/Navigation";
import {Footer} from "@/components/Footer/Footer";
import Link from "next/link";
import screenshot1 from "@/public/images/screenshot1.png";
import screenshot2 from "@/public/images/screenshot2.png";

export default function Home() {
  return (
      <div className="grid grid-rows-[auto_1fr_auto] min-[941px]:grid-rows-none min-[941px]:grid-cols-[auto_1fr_auto] min-h-screen items-center justify-items-center overflow-hidden">
          <Navigation/>
          <div className="relative flex flex-col w-full min-h-full sm:min-h-screen ml-0 text-center gap-1 col-span-2 z-10 bg-white">
              <div className="p-4 flex-grow content-center">
                  <h1 className="text-2xl font-semibold text-gray-900">CSS RoadMap</h1>
                  <hr className="border border-b-gray-300 my-3"/>
                  <div className="flex flex-col gap-3">
                      <h2 className="text-xl font-semibold text-gray-900">"Covering all the CSS
                          aspects through the
                          RoadMap"</h2>
                      <h4>Based on tasks from <a className="text-blue-700 hover:text-blue-800"
                                                 href={'https://github.com/Roopaish/CSS-RoadMap'}>https://github.com/Roopaish/CSS-RoadMap</a>.
                      </h4>
                  </div>
              </div>
              <div className="flex flex-col gap-4 items-center flex-grow mb-5">
                  <Link href="/youtube-clone">
                      <div
                          className="relative w-[600px] h-[300px] max-[705px]:w-[300px] max-[705px]:h-[150px] 2xl:w-[800px] 2xl:h-[500px] bg-red-100 rounded overflow-hidden cursor-pointer hover:w-[660px] max-[705px]:hover:w-[330px] hover:grayscale hover:rounded-3xl ease-in-out duration-[.5s]
                          after:content-[attr(data-title)] after:opacity-0 after:w-full after:h-full after:content-center after:text-white after:text-2xl after:absolute after:top-0 after:left-0 after:hover:animate-textAppear" data-title="Youtube Clone">
                          <img className="w-full h-full object-cover" src={screenshot1.src} alt="Youtube Clone Screenshot"/>
                      </div>
                  </Link>
                  <Link href="/godot-landing">
                      <div
                          className="relative w-[600px] h-[300px] max-[705px]:w-[300px] max-[705px]:h-[150px] 2xl:w-[800px] 2xl:h-[500px] bg-red-100 rounded overflow-hidden cursor-pointer hover:w-[660px] max-[705px]:hover:w-[330px] hover:grayscale hover:rounded-3xl ease-in-out duration-[.5s]
                          after:content-[attr(data-title)] after:opacity-0 after:w-full after:h-full after:content-center after:text-white after:text-2xl after:absolute after:top-0 after:left-0 after:hover:animate-textAppear" data-title="Godot Landing Page">
                          <img className="w-full h-full object-cover" src={screenshot2.src} alt="Godot Landing Page Screenshot"/>
                      </div>
                  </Link>
              </div>
              <Footer/>
          </div>
      </div>
  );
}
