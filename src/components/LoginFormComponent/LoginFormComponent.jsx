export const LoginFormComponent = () => {
    return (
        <div className="bg-wallpaper bg-cover">
            <div className="h-screen flex flex-col justify-center">
                <div className="min-w-52 mx-auto my-0 p-4 text-center w-formWidth backdrop-blur-sm shadow-boxShadow">
                    <p className="text-2xl font-medium mb-5">Transparent Login Form</p>
                    <form className="flex flex-col justify-center">
                        <label className="text-white text-xl text-left mb-2" htmlFor="email">Email</label>
                        <input
                            className="bg-backgroundPink mb-2 min-h-8 rounded border border-solid border-black50 focus:active:outline-none focus:active:border focus:active:border-solid focus:active:border-indigo-300 pl-1"
                            type="email" id="email" name="email"/>
                        <label className="text-white text-xl text-left mb-2" htmlFor="password">Password</label>
                        <input
                            className="bg-backgroundPink mb-2 min-h-8 rounded border border-solid border-black50 focus:active:outline-none focus:active:border focus:active:border-solid focus:active:border-indigo-300 pl-1"
                            type="password" id="password" name="password"/>
                        <input
                            className="bg-backgroundGreen mb-2 min-h-8 rounded border border-solid border-black50 focus:active:outline-none focus:active:border focus:active:border-solid focus:active:border-indigo-300 cursor-pointer mt-8 text-white text-xl p-1.5"
                            type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
