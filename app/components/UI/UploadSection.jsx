import { useState } from "react"

const UploadSection = () => {
    const [drop, setDrop] = useState(false)
    const [files, setFiles] = useState([])
    const [showList, setShowList] = useState(false)
    const [dropState, setDropState] = useState(false)

    // const handleFiles = (e) => {
    //     e.preventDefault()
    //     if (e.target.files) {
    //         setFiles(e.target.files)
    //     }
    // }

    const dragEnter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDropState(true)
    }
    
    const dragLeave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDropState(false)
    }

    const dragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const dropedFiles = Array.from(e.dataTransfer.files)
        setFiles((prevfiles) => [...prevfiles, ...dropedFiles])
    }

    const handleShowList = () => {
        setShowList(!showList)
    }



    return (
        <>
            <section 
            className={`flex flex-col ${dropState ? "bg-gray-400" : "bg-foreground"} w-dvw h-[50dvh] cursor-pointer text-black items-center justify-center default-transition gap-5 z-10`}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragOver={dragOver}
            onDrop={handleDrop}
            >
                <div
                className='flex flex-col antialiased gap-2 items-center'
                >
                    <h1 className="text-5xl font-bold">Convert Images to another Images format!</h1>
                    <h1 className="text-xl">simply drag and drop your image files to upload them.</h1>
                </div>

                {/* <div className="bg-yellow-300 rounded-full p-5">
                    <input type="file" multiple className="bg-blue-300 rounded-full p-5" onChange={handleFiles}/>
                </div> */}
                
                {
                    files && (
                        <button
                        className="bg-blue-300 rounded-full p-3 px-5 font-mono"
                        onClick={handleShowList}
                        >
                            Click to show list of <span className="font-bold">{files.length}</span> file
                        </button>
                    )
                }

            </section>
            
            {
                showList && (
                    <div
                    className="fixed flex flex-col gap-5 top-[25%] right-[25%] z-90 w-1/2 h-1/2 bg-blue-300/75 rounded-4xl p-10"
                    >
                        <div>
                            <button
                            className="bg-red-800 rounded-2xl w-full py-5"
                            onClick={handleShowList}
                            >
                                Click here to close!
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 overflow-y-scroll">
                            { files && [...files].map((f, index) => (
                                <div key={f.name + index} className="bg-yellow-300 wrap-anywhere p-5 rounded-2xl text-black font-mono">
                                    <ul className="">
                                        <li>File Name : {f.name}</li>
                                        <li>File Type : {f.type}</li>
                                        <li>File Size : {f.size} bytes</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default UploadSection