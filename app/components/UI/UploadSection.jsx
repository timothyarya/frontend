import { useState } from "react"

const UploadSection = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }


    return (
        <>
            <section 
            className="flex flex-col bg-foreground w-dvw h-[50dvh] cursor-pointer text-black items-center justify-center default-transition"
            onClick={handleClick}
            >
                <div
                className='flex flex-col antialiased gap-2 items-center'
                >
                    <h1 className="text-5xl font-bold">Convert Images to another Images format!</h1>
                    <h1 className="text-xl">simply drag and drop your image files, or click this section to choose and upload file.</h1>
                </div>


            </section>
        </>
    )
}

export default UploadSection