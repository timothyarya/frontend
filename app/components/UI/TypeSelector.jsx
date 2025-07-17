import { ImageType } from "@/app/constant/ImageType"
import { useEffect, useState } from "react"

const TypeSelector = ({toType}) => {
    
    const [selectedType, setSelectedType] = useState('')

    useEffect(() => {
        toType(selectedType)
    }, [selectedType])

    return (
        <select 
        onChange={(e) => setSelectedType(e.target.value)}
        >
            {
                ImageType.map((type, index) => (
                    <option
                    key={index}
                    value={type}
                    >
                        {type}
                    </option>
                ))
            }
        </select>
    )
}

export default TypeSelector