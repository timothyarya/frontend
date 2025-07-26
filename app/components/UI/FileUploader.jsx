import { useState, useRef, useEffect } from "react"
import File from "./File"
import { ImageType } from "@/app/constant/ImageType"

const FileUploader = () => {
    const [files, setFiles] = useState([])
    const inputFileRef = useRef(null)

    const handleRef = () => {
        inputFileRef.current.click()
    }

    const handleSetFiles = (e) => {
        e.preventDefault()
        setFiles(e.currentTarget.files)
    }

    const handleConvertRef = () => {
        convertFileRef.current.click()
    }

    // useEffect(() => {
    //     console.log(files)
    // }, [files])

    return (
        <section className="flex flex-col gap-5 items-center">
            <form
            style={{display: 'none'}}
            >
                <input
                accept={ImageType.join(',')}
                type="file"
                multiple={true} 
                onChange={handleSetFiles}
                ref={inputFileRef}
                />
            </form>

            <div>
                {
                    [...files].map((f, i) => (
                        <File 
                        key={i} 
                        index={i}
                        file={files[i]}
                        filename={f.name}
                        fromType={f.type} 
                        />
                    ))
                }
            </div>
            <button
            onClick={handleRef}
            >
                Add Files
            </button>
            
        </section>
    )
}

export default FileUploader