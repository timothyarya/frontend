import convertApi from "@/app/api/convertapi/route"
import TypeSelector from "./TypeSelector"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

const File = ({file, filename, fromType, index}) => {
    const [convertTo, setConvertTo] = useState('')
    const [convertFrom, setConvertFrom] = useState('')
    const [convertLink, setConvertLink] = useState('')

    const handleToType = (type) => {
        setConvertTo(type)
    }

    useEffect(() => {
        try {
            const handleConvert = async () => {
                let params = convertApi.createParams()
                params.add('file', file)
                let res = await convertApi.convert('png', 'pdf', params)
                setConvertLink(res.files[0].Url)  
            }
            handleConvert()
        } catch (err) {
            console.log(err)
        }
    }, [])
    

    return (
        <div
        className="flex flex-row gap-5"
        >
            <div>
                <h1>{filename}</h1>
                <h1>{fromType.slice(6)}</h1>
            </div>
            <div
            className="flex flex-row gap-2 font-bold"
            >
                <h1>Convert To</h1>
                <TypeSelector toType={handleToType} />
            </div>
            
                <Link
                href={convertLink}
                target="_blank"
                style={convertLink ? {} : {display: 'none'}}
                >
                    Download
                </Link>
        </div>
    )
}

export default File