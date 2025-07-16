import { useState, useRef } from "react"
import { ImageType } from "@/app/config/ImageType"
import { FaFile } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const FileList = () => {
    const [files, setFiles] = useState([])
    const inputFile =  useRef(null)

    const handleFileSelector = () => {
        inputFile.current.click()
    }

    const handleSelectedFile = (e) => {
        const files = Array.from(e.target.files)
        setFiles((prevfiles) => [...prevfiles, ...files])
    }

    return (

        <section
        className="bg-primary flex flex-col gap-5 items-center justify-center p-10"
        >
            <input
            type="file"
            accept={`${ImageType.join(",")}`}
            multiple
            onChange={handleSelectedFile}
            style={{display: "none"}}
            ref={inputFile}
            />

            <div
            className={`flex flex-col gap-5 w-full ${files.length !== 0 ? "" : "hidden"}`}
            >
                {
                    [...files].map((file, index) => (
                        <div
                        className="flex flex-row bg-foreground justify-between text-background p-5 px-10 font-bold rounded-4xl"
                        key={index}
                        id={index}
                        >
                            <div className="flex flex-row gap-3 items-center text-nowrap">
                                <FaFile />
                                <h1>{file.name}</h1>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <div>
                                    <h1>{file.size}</h1>
                                </div>
                                <MdDelete />
                            </div>
                            
                        </div>
                    ))                    
                }
            </div>

            <button
            className="bg-secondary text-foreground p-5 font-bold rounded-2xl"
            onClick={handleFileSelector}>
                {files.length !== 0 ? 'Add More' : 'Select'} Files To Upload
            </button>
        </section>
    )
}

export default FileList