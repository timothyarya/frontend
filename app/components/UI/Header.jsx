const Header = ({imgTypeFrom, imgTypeTo}) => {
    return (
        <section
        className="bg-foreground w-dvw h-[30dvh] flex flex-col gap-5 items-center justify-center"
        >
            <div className="flex flex-col gap-5 items-center text-center text-background">
                <h1
                className="font-bold text-6xl"
                >
                    Image Converter
                </h1>
                <h2 
                className="text-3xl"
                >
                    Convert any images format to another images format
                </h2>
            </div>
        </section>
    )
}

export default Header