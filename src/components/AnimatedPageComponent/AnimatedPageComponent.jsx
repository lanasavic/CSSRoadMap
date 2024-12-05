export const AnimatedPageComponent = () => {
    return (
        <div className="grid w-screen h-screen max-[810px]:w-full max-[810px]:h-full overflow-hidden bg-yellow-500 mx-auto text-white px-48 py-5 justify-center">
            <nav
                className="flex gap-10 bg-yellow-600 text-xl font-bold min-h-16 h-16 items-center p-4 animate-growFast">
                <p className="appearance-none opacity-0 animate-slideIn"><a href="/">Home</a></p>
                <p className="appearance-none opacity-0 animate-slideIn"><a href="">Blogs</a></p>
                <p className="appearance-none opacity-0 animate-slideIn"><a href="">Contact</a></p>
            </nav>
            <div className="grid grid-cols-gridWrap max-[810px]:grid-rows-gridWrap gap-7 my-20 leading-tight">
                <div>
                    <h3 className="font-bold text-[0px] animate-fontGrow">Introduction</h3>
                    <p className="opacity-0 animate-shake">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias quia mollitia
                        deserunt tenetur blanditiis ex, in autem, numquam facilis ut dolorem quibusdam. Quas, aliquam
                        rerum, nisi molestiae quam ad in laboriosam repellendus vitae dolore iste voluptates suscipit
                        nesciunt rem aperiam, cum recusandae corrupti dicta. Perferendis velit quaerat saepe nesciunt
                        atque non est! Cupiditate eveniet laboriosam quos neque accusantium numquam.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-[0px] animate-fontGrow">Information</h3>
                    <p className="opacity-0 animate-shake">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus autem velit placeat iure
                        omnis quae eos voluptas ut delectus impedit facilis, ea, beatae adipisci culpa aut cum minima
                        natus pariatur eligendi a deleniti doloremque reprehenderit! Obcaecati sapiente veniam delectus,
                        laboriosam placeat commodi at inventore quidem fuga, a temporibus ipsa voluptatibus mollitia,
                        consequuntur ipsum. Earum voluptatum quia non eos sit nostrum dolorum distinctio nemo officia
                        doloribus eum facere iure perferendis error corrupti impedit inventore voluptate laboriosam, in
                        nisi quae. In molestias praesentium placeat sed blanditiis quaerat tempora soluta? Modi, maxime.
                    </p>
                </div>
            </div>
            <div className="mb-10">
                <h3 className="font-bold text-[0px] animate-fontGrow">Gallery</h3>
                <div className="flex flex-row max-[810px]:flex-col opacity-0 animate-shake">
                    <div className="relative w-48 h-48 bg-yellow-100 overflow-hidden
                    after:absolute after:-translate-x-full after:bg-loadingGradient after:w-full after:h-full after:animate-loading"></div>
                    <div className="relative w-48 h-48 bg-yellow-100 overflow-hidden
                    after:absolute after:-translate-x-full after:bg-loadingGradient after:w-full after:h-full after:animate-loading"></div>
                    <div className="relative w-48 h-48 bg-yellow-100 overflow-hidden
                    after:absolute after:-translate-x-full after:bg-loadingGradient after:w-full after:h-full after:animate-loading"></div>
                    <div className="relative w-48 h-48 bg-yellow-100 overflow-hidden
                    after:absolute after:-translate-x-full after:bg-loadingGradient after:w-full after:h-full after:animate-loading"></div>
                </div>
            </div>
        </div>
    )
}
