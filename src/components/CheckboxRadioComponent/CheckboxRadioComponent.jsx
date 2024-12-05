import '@/components/main.css'

export const CheckboxRadioComponent = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen bg-gray-700 p-6 text-white max-[750px]:w-full max-[750px]:h-full max-[510px]:items-center">
            <h2 className="text-xl">Custom Checkbox | Radio Button</h2>
            <div
                className="labelCheck grid grid-cols-gridWrap2 max-[510px]:grid-rows-gridWrap2 gap-14 mx-12 my-20 justify-center text-lg">
                <div className="relative">
                    <h3 className="mb-3">Choose fruits you like.</h3>
                    <div className="flex items-center">
                        <input type="checkbox" id="fruit1" name="fruit" value="mango" defaultChecked
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-green-700 hover:bg-green-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-green-500 checked:hover:bg-green-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45"/>
                        <label htmlFor="fruit1" className="pl-2 cursor-pointer">Mango</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="fruit2" name="fruit" value="apple"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-green-700 hover:bg-green-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-green-500 checked:hover:bg-green-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45"/>
                        <label htmlFor="fruit2" className="pl-2 cursor-pointer">Apple</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="fruit3" name="fruit" value="orange"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-green-700 hover:bg-green-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-green-500 checked:hover:bg-green-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45"/>
                        <label htmlFor="fruit3" className="pl-2 cursor-pointer">Orange</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="fruit4" name="fruit" value="grapes"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-green-700 hover:bg-green-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-green-500 checked:hover:bg-green-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45"/>
                        <label htmlFor="fruit4" className="pl-2 cursor-pointer">Grapes</label>
                    </div>
                </div>
                <div className="relative">
                    <h3 className="mb-3">Choose languages you like.</h3>
                    <div className="flex items-center">
                        <input type="checkbox" id="languages1" name="languages" value="dart"
                               className="box-border w-4 h-4 rounded-full appearance-none outline-none cursor-pointer bg-orange-800 hover:bg-orange-700 transition-transform linear
                        after:inline-block after:scale-0 after:rotate-45 after:transition-transform after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-orange-600 checked:hover:bg-orange-600
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition checked:after:linear checked:after:rotate-45 checked:after:scale-100"/>
                        <label htmlFor="languages1" className="pl-2 cursor-pointer">Dart</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="languages2" name="languages" value="cpp"
                               className="box-border w-4 h-4 rounded-full appearance-none outline-none cursor-pointer bg-orange-800 hover:bg-orange-700 transition-transform linear
                        after:scale-0 after:rotate-45 after:transition-transform after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-orange-600 checked:hover:bg-orange-600
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition-transform checked:after:linear checked:after:rotate-45 checked:after:scale-100"/>
                        <label htmlFor="languages2" className="pl-2 cursor-pointer">C++</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="languages3" name="languages" value="python" defaultChecked
                               className="box-border w-4 h-4 rounded-full appearance-none outline-none cursor-pointer bg-orange-800 hover:bg-orange-700 transition-transform linear
                        after:scale-0 after:rotate-45 after:transition-transform after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-orange-600 checked:hover:bg-orange-600
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition-transform checked:after:linear checked:after:rotate-45 checked:after:scale-100"/>
                        <label htmlFor="languages3" className="pl-2 cursor-pointer">Python</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="languages4" name="languages" value="javascript" defaultChecked
                               className="box-border w-4 h-4 rounded-full appearance-none outline-none cursor-pointer bg-orange-800 hover:bg-orange-700 transition-transform linear
                        after:scale-0 after:rotate-45 after:transition-transform after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-orange-600 checked:hover:bg-orange-600
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition-transform checked:after:linear checked:after:rotate-45 checked:after:scale-100"/>
                        <label htmlFor="languages4" className="pl-2 cursor-pointer">Javascript</label>
                    </div>
                </div>
                <div className="relative">
                    <h3 className="mb-3">What are your favorite animes?</h3>
                    <div className="flex items-center">
                        <input type="checkbox" id="anime1" name="anime" value="attackontitan"
                               className="box-border w-4 h-4 appearance-none outline-none bg-yellow-700 hover:bg-yellow-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-yellow-500 checked:hover:bg-yellow-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-[9px] checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45
                        checked:after:animate-tickRotate checked:after:origin-top-left"/>
                        <label htmlFor="anime1" className="pl-2 cursor-pointer">Attack on Titan</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="anime2" name="anime" value="yourname" defaultChecked
                               className="box-border w-4 h-4 appearance-none outline-none bg-yellow-700 hover:bg-yellow-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-yellow-500 checked:hover:bg-yellow-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-[9px] checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45
                        checked:after:animate-tickRotate checked:after:origin-top-left"/>
                        <label htmlFor="anime2" className="pl-2 cursor-pointer">Your Name</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="anime3" name="anime" value="deathnote"
                               className="box-border w-4 h-4 appearance-none outline-none bg-yellow-700 hover:bg-yellow-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-yellow-500 checked:hover:bg-yellow-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-[9px] checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45
                        checked:after:animate-tickRotate checked:after:origin-top-left"/>
                        <label htmlFor="anime3" className="pl-2 cursor-pointer">Death Note</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="anime4" name="anime" value="spongebob" defaultChecked disabled
                               className="box-border w-4 h-4 appearance-none outline-none bg-yellow-700 hover:bg-yellow-600
                        checked:w-4 checked:h-4 checked:bg-cover checked:bg-yellow-500 checked:hover:bg-yellow-500
                        disabled:after:opacity-50 checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-[9px] checked:after:border-solid checked:after:border-tick checked:after:border-amber-50 checked:after:rotate-45
                        checked:after:animate-tickRotate checked:after:origin-top-left"/>
                        <label htmlFor="anime4" className="pl-2 cursor-pointer">Spongebob</label>
                    </div>
                </div>
                <div className="relative">
                    <h3 className="mb-3">What is your gender?</h3>
                    <div className="flex items-center">
                        <input type="radio" id="gender1" name="gender" value="male" defaultChecked
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-cyan-800 hover:bg-cyan-600
                        after:-translate-x-1 after:rotate-45 after:transition after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-cyan-500 checked:hover:bg-cyan-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition checked:after:linear checked:after:rotate-45 checked:after:translate-x-0"/>
                        <label htmlFor="gender1" className="pl-2 cursor-pointer">Male</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="gender2" name="gender" value="female"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-cyan-800 hover:bg-cyan-600
                        after:-translate-x-1 after:rotate-45 after:transition after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-cyan-500 checked:hover:bg-cyan-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition checked:after:linear checked:after:rotate-45 checked:after:translate-x-0"/>
                        <label htmlFor="gender2" className="pl-2 cursor-pointer">Female</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="gender3" name="gender" value="bisexual"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-cyan-800 hover:bg-cyan-600
                        after:-translate-x-1 after:rotate-45 after:transition after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-cyan-500 checked:hover:bg-cyan-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition checked:after:linear checked:after:rotate-45 checked:after:translate-x-0"/>
                        <label htmlFor="gender3" className="pl-2 cursor-pointer">Bisexual</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="gender4" name="gender" value="other"
                               className="box-border w-4 h-4 appearance-none outline-none cursor-pointer bg-cyan-800 hover:bg-cyan-600
                        after:-translate-x-1 after:rotate-45 after:transition after:linear checked:w-4 checked:h-4 checked:bg-cover checked:bg-cyan-500 checked:hover:bg-cyan-500
                        checked:after:absolute checked:after:w-2 checked:after:h-3 checked:after:left-1 checked:after:border-solid checked:after:border-tick checked:after:border-amber-50
                        checked:after:transition checked:after:linear checked:after:rotate-45 checked:after:translate-x-0"/>
                        <label htmlFor="gender4" className="pl-2 cursor-pointer">Other</label>
                    </div>
                </div>
                <div className="redText relative">
                    <h3 className="mb-3">What you don't like?</h3>
                    <div className="flex items-center">
                        <input type="radio" id="like1" name="like" value="sociallife" defaultChecked
                               className="box-border w-9 h-4 rounded-full appearance-none outline-none cursor-pointer bg-purple-500 hover:bg-purple-800
                        before:absolute before:w-5 before:h-5 before:-translate-y-0.5 before:translate-x-4 before:rounded-full before:bg-emerald-400 before:transition before:ease-in
                        checked:w-9 checked:h-4 checked:bg-cover checked:bg-purple-800 checked:hover:bg-purple-800
                        checked:before:transition checked:before:-translate-x-0.5 checked:before:ease-in"/>
                        <label htmlFor="like1" className="pl-2 cursor-pointer">Social Life</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="like2" name="like" value="work"
                               className="box-border w-9 h-4 rounded-full appearance-none outline-none cursor-pointer bg-purple-500 hover:bg-purple-800
                        before:absolute before:w-5 before:h-5 before:-translate-y-0.5 before:translate-x-4 before:rounded-full before:bg-emerald-400 before:transition before:ease-in
                        checked:w-9 checked:h-4 checked:bg-cover checked:bg-purple-800 checked:hover:bg-purple-800
                        checked:before:transition checked:before:-translate-x-0.5 checked:before:ease-in"/>
                        <label htmlFor="like2" className="pl-2 cursor-pointer">Work</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="like3" name="like" value="sleep"
                               className="box-border w-9 h-4 rounded-full appearance-none outline-none cursor-pointer bg-purple-500 hover:bg-purple-800
                        before:absolute before:w-5 before:h-5 before:-translate-y-0.5 before:translate-x-4 before:rounded-full before:bg-emerald-400 before:transition before:ease-in
                        checked:w-9 checked:h-4 checked:bg-cover checked:bg-purple-800 checked:hover:bg-purple-800
                        checked:before:transition checked:before:-translate-x-0.5 checked:before:ease-in"/>
                        <label htmlFor="like3" className="pl-2 cursor-pointer">Sleep</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
languages - no out animation, only in
*/
